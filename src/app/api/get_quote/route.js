import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    // Parse the request body as FormData since we're sending files
    const formData = await request.formData();
    
    // Extract form fields
    const first_name = formData.get('first_name');
    const last_name = formData.get('last_name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const location = formData.get('location');
    const service = formData.get('service');
    const other_service = formData.get('other_service');
    const propertyType = formData.get('propertyType');
    const accommodations = formData.get('accommodations');
    const mediaDescription = formData.get('mediaDescription');
    
    // Extract files
    const files = formData.getAll('files');
    
    // Prepare data for Supabase (without file URLs yet)
    const quoteData = {
      first_name,
      last_name,
      phone,
      email,
      location,
      service,
      other_service: other_service || null,
      property_type: propertyType,
      accommodations: accommodations || null,
      media_description: mediaDescription || null,
      created_at: new Date().toISOString()
    };

    // Insert data into Supabase to get the ID
    const { data: insertedData, error } = await supabase
      .from('get_quote')
      .insert([quoteData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit quote request' },
        { status: 500 }
      );
    }

    // Get the ID of the inserted record
    const quoteId = insertedData[0].id;
    
    // Upload files to Supabase Storage and get URLs
    const fileUrls = [];
    const fileNames = [];
    
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Create a unique file path in the bucket
        const filePath = `${quoteId}/${Date.now()}_${file.name}`;
        
        // Convert file to buffer for upload
        const fileBuffer = await file.arrayBuffer();
        
        // Upload the file to Supabase Storage
        const { data: uploadData, error: uploadError } = await supabase
          .storage
          .from('turn2shinequote')
          .upload(filePath, fileBuffer, {
            contentType: file.type,
            cacheControl: '3600',
            upsert: true
          });
        
        if (uploadError) {
          console.error('Supabase storage error:', uploadError);
          continue; // Continue with other files even if one fails
        }
        
        // Get the public URL for the file
        const { data: urlData } = supabase
          .storage
          .from('turn2shinequote')
          .getPublicUrl(filePath);
        
        fileUrls.push(urlData.publicUrl);
        fileNames.push(file.name);
      }
    }
    
    // Update the Supabase record with file names as an array
    // Note: We're not updating file_urls since that column doesn't exist in the schema
    const { error: updateError } = await supabase
      .from('get_quote')
      .update({
        file_names: fileNames
      })
      .eq('id', quoteId);
    
    if (updateError) {
      console.error('Supabase update error:', updateError);
      return NextResponse.json(
        { error: 'Failed to update quote with file information' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        data: {
          ...insertedData[0],
          file_names: fileNames
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
