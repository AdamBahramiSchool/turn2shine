'use client';
import React, { useState } from 'react';

const GetQuote = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    location: '',
    service: '',
    other_service: '',
    accommodations: '',
    mediaDescription: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    "Pressure Washing",
    "Gutter Cleaning",
    "Window Cleaning",
    "Roof Cleaning",
    "House Washing",
    "Deck Cleaning",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.first_name) tempErrors.first_name = "First name is required";
    if (!formData.last_name) tempErrors.last_name = "Last name is required";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.location) tempErrors.location = "Service location is required";
    if (!selectedService) tempErrors.service = "Service is required";
    if (selectedService === 'Other' && !formData.other_service)
      tempErrors.other_service = "Please specify the service";
    if (!selectedType) tempErrors.propertyType = "Please select Residential or Commercial";
    if ((selectedType === 'Residential' || selectedType === 'Commercial') && uploadedFiles.length === 0)
      tempErrors.upload = "Please upload at least one file or video";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      setUploadedFiles(prevFiles => [...prevFiles, ...Array.from(e.target.files)]);
    }
  };

  const handleRemoveFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      
      formDataToSend.append('service', selectedService);
      formDataToSend.append('propertyType', selectedType);
      
      uploadedFiles.forEach(file => {
        formDataToSend.append('files', file);
      });
      
      const response = await fetch("/api/get_quote/", {
        method: "POST",
        body: formDataToSend
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      
      setFormData({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        location: '',
        service: '',
        other_service: '',
        accommodations: '',
        mediaDescription: '',
      });
      setUploadedFiles([]);
      setSelectedService('');
      setSelectedType('');
      setErrors({});
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen mt-16 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Tell us about your project and we'll provide you with a customized quote tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg text-gray-700">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span><strong>778-650-7604</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span><strong>info@turn2shine.com</strong></span>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  />
                  {errors.first_name && <p className="text-red-600 text-sm mt-1">{errors.first_name}</p>}
                </div>

                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  />
                  {errors.last_name && <p className="text-red-600 text-sm mt-1">{errors.last_name}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Service Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                />
                {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={selectedService}
                  onChange={(e) => {
                    setSelectedService(e.target.value);
                    handleChange(e);
                  }}
                  className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
                {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
              </div>

              {selectedService === 'Other' && (
                <div>
                  <label htmlFor="other_service" className="block text-sm font-medium text-gray-700">Specify Other Service</label>
                  <input
                    type="text"
                    name="other_service"
                    id="other_service"
                    value={formData.other_service}
                    onChange={handleChange}
                    className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  />
                  {errors.other_service && <p className="text-red-600 text-sm mt-1">{errors.other_service}</p>}
                </div>
              )}

              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Property Type</label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                >
                  <option value="">Select Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
                {errors.propertyType && <p className="text-red-600 text-sm mt-1">{errors.propertyType}</p>}
              </div>

              {(selectedType === 'Residential' || selectedType === 'Commercial') && (
                <>
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Upload Images or Videos</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-colors duration-200">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                            <span>Upload files</span>
                            <input
                              id="file-upload"
                              type="file"
                              multiple
                              accept="image/*,video/*"
                              onChange={handleFileUpload}
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                    {errors.upload && <p className="text-red-600 text-sm mt-1">{errors.upload}</p>}
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Uploaded Files:</h4>
                      <ul className="space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                            <span className="truncate max-w-xs text-sm text-gray-600">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(index)}
                              className="ml-2 text-sm font-medium text-red-600 hover:text-red-800 transition-colors duration-200"
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <label htmlFor="mediaDescription" className="block text-sm font-medium text-gray-700">
                      Describe Uploaded Files (Optional)
                    </label>
                    <textarea
                      id="mediaDescription"
                      name="mediaDescription"
                      rows="4"
                      value={formData.mediaDescription}
                      onChange={handleChange}
                      className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                      placeholder="Explain what you're showing in the uploads..."
                    ></textarea>
                  </div>
                </>
              )}

              <div>
                <label htmlFor="accommodations" className="block text-sm font-medium text-gray-700">Special Accommodations</label>
                <textarea
                  id="accommodations"
                  name="accommodations"
                  rows="3"
                  value={formData.accommodations}
                  onChange={handleChange}
                  className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  placeholder="Any special requests or additional information"
                ></textarea>
              </div>

              <div>
                {submitSuccess && (
                  <div className="p-4 mb-6 text-green-700 bg-green-100 rounded-lg border border-green-500" role="alert">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="font-medium">Quote request submitted successfully! We'll contact you soon.</p>
                    </div>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-4 px-6 border border-transparent rounded-full shadow-lg text-lg font-semibold text-white transition-all duration-200 ${
                    isSubmitting 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-0.5'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Get Your Free Quote'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
