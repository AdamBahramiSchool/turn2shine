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
    if (selectedType === 'Residential' && uploadedFiles.length === 0)
      tempErrors.upload = "Please upload at least one file or video";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFileUpload = (e) => {
    setUploadedFiles([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Form submitted successfully!");
    // Submit logic here
  };

  return (
    <div className="bg-blue-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Contact Us</h2>

          <div className="mb-8 text-center">
            <p className="text-lg"><strong>Phone:</strong> 778-650-7604</p>
            <p className="text-lg"><strong>Email:</strong> info@turn2shine.com</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" name="first_name" id="first_name" onChange={handleChange}
                  className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base" />
                {errors.first_name && <p className="text-red-600 text-sm mt-1">{errors.first_name}</p>}
              </div>

              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last_name" id="last_name" onChange={handleChange}
                  className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base" />
                {errors.last_name && <p className="text-red-600 text-sm mt-1">{errors.last_name}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
              <input type="tel" name="phone" id="phone" onChange={handleChange}
                className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base" />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" id="email" onChange={handleChange}
                className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base" />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Service Location</label>
              <input type="text" name="location" id="location" onChange={handleChange}
                className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base" />
              {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Needed</label>
              <select
                id="service"
                name="service"
                className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base"
                onChange={(e) => {
                  setSelectedService(e.target.value);
                  handleChange(e);
                }}
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
                <input type="text" name="other_service" id="other_service" onChange={handleChange}
                  className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base" />
                {errors.other_service && <p className="text-red-600 text-sm mt-1">{errors.other_service}</p>}
              </div>
            )}

            {/* Residential or Commercial Dropdown */}
            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Property Type</label>
              <select
                id="propertyType"
                name="propertyType"
                className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base"
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
              {errors.propertyType && <p className="text-red-600 text-sm mt-1">{errors.propertyType}</p>}
            </div>

            {/* Conditional Upload + Description for Residential */}
            {selectedType === 'Residential' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Upload Images or Videos</label>
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="mt-1 block w-full py-2 px-4 border border-black rounded-md shadow-sm text-base bg-white"
                  />
                  {errors.upload && <p className="text-red-600 text-sm mt-1">{errors.upload}</p>}
                </div>

                <div>
                  <label htmlFor="mediaDescription" className="block text-sm font-medium text-gray-700">
                    Describe Uploaded Files (Optional)
                  </label>
                  <textarea
                    id="mediaDescription"
                    name="mediaDescription"
                    rows="4"
                    onChange={handleChange}
                    className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base"
                    placeholder="Explain what you're showing in the uploads..."
                  ></textarea>
                </div>
              </>
            )}

            <div>
              <label htmlFor="accommodations" className="block text-sm font-medium text-gray-700">Special Accommodations</label>
              <textarea id="accommodations" name="accommodations" rows="3" onChange={handleChange}
                className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base"
                placeholder="Any special requests or additional information"></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
