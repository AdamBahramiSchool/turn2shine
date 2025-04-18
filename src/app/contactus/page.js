'use client';
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    Address: '',
    accommodations: '',
  });
  const [errors, setErrors] = useState({});

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
    if (!formData.Address) tempErrors.Address = "Address is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const dataToSend = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      phone: formData.phone,
      email: formData.email,
      address: formData.Address,
      accommodations: formData.accommodations,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        setFormData({
          first_name: '',
          last_name: '',
          phone: '',
          email: '',
          Address: '',
          accommodations: '',
        });
        setErrors({});
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base"
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
                  className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base"
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
                className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base"
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
                className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="Address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="Address"
                id="Address"
                value={formData.Address}
                onChange={handleChange}
                className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base"
              />
              {errors.Address && <p className="text-red-600 text-sm mt-1">{errors.Address}</p>}
            </div>

            <div>
              <label htmlFor="accommodations" className="block text-sm font-medium text-gray-700">Special Accommodations</label>
              <textarea
                name="accommodations"
                id="accommodations"
                rows="3"
                value={formData.accommodations}
                onChange={handleChange}
                className="mt-1 block w-full py-3 px-4 border border-black rounded-md shadow-sm text-base"
                placeholder="Any special requests or additional information"
              />
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

export default ContactUs;

