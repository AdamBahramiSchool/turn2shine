'use client';
import React, { useState } from 'react'

const ContactUs = () => {
  const [selectedService, setSelectedService] = useState('');
  const services = [
    "Pressure Washing",
    "Gutter Cleaning",
    "Window Cleaning",
    "Roof Cleaning",
    "House Washing",
    "Deck Cleaning",
    "Other"
  ];

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    location: '',
    service: '',
    other_service: '',
    accommodations: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.first_name) tempErrors.first_name = "First name is required";
    if (!formData.last_name) tempErrors.last_name = "Last name is required";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.location) tempErrors.location = "Service location is required";
    if (!formData.service) tempErrors.service = "Service is required";
    if (formData.service === 'Other' && !formData.other_service) tempErrors.other_service = "Please specify the service";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (validateForm()) {
    //   try {
    //     const response = await fetch('/api/send-email', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(formData),
    //     });
    //     if (response.ok) {
    //       alert('Form submitted successfully!');
    //       // Reset form
    //       setFormData({
    //         first_name: '',
    //         last_name: '',
    //         phone: '',
    //         email: '',
    //         location: '',
    //         service: '',
    //         other_service: '',
    //         accommodations: ''
    //       });
    //     } else {
    //       alert('Failed to submit form. Please try again.');
    //     }
    //   } catch (error) {
    //     console.error('Error:', error);
    //     alert('An error occurred. Please try again.');
    //   }
    // }
    console.log("Succesfully sent email")
  };

  return (
    <div className="bg-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Contact Us</h2>
          
          <div className="mb-8 text-center">
            <p className="text-lg"><strong>Phone:</strong> (555) 123-4567</p>
            <p className="text-lg"><strong>Email:</strong> info@yourcompany.com</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" name="first_name" id="first_name" placeholder="John" onChange={handleChange} className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base" />
              </div>

              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last_name" id="last_name" placeholder="Doe" onChange={handleChange} className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base" />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
              <input type="tel" name="phone" id="phone" placeholder="(123) 456-7890" onChange={handleChange} className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" id="email" placeholder="johndoe@example.com" onChange={handleChange} className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base" />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Service Location</label>
              <input type="text" name="location" id="location" placeholder="123 Main St, City, State" onChange={handleChange} className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base" />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Needed</label>
              <select 
                id="service" 
                name="service" 
                className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base"
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>

            {selectedService === 'Other' && (
              <div>
                <label htmlFor="other_service" className="block text-sm font-medium text-gray-700">Specify Other Service</label>
                <input type="text" name="other_service" id="other_service" placeholder="Describe the service you need" onChange={handleChange} className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base" />
              </div>
            )}

            <div>
              <label htmlFor="accommodations" className="block text-sm font-medium text-gray-700">Special Accommodations</label>
              <textarea id="accommodations" name="accommodations" rows="3" placeholder="Any special requests or additional information" onChange={handleChange} className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base"></textarea>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
