import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req) {
  try {
    const body = await req.json(); // Read JSON body
    const { first_name, last_name, phone, email, address, accommodations } = body;

    // Insert data into Supabase table
    const { data, error } = await supabase
      .from('contact_us') // Replace with your Supabase table name
      .insert([
        {
          first_name,
          last_name,
          phone,
          email,
          address,
          accommodations,
        },
      ]);

    if (error) {
      console.error('Error inserting data into Supabase:', error);
      return new Response(JSON.stringify({ message: 'Failed to save data to database', error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Data saved successfully', data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
