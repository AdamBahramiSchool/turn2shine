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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

    setIsSubmitting(true);
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
        setFormData({
          first_name: '',
          last_name: '',
          phone: '',
          email: '',
          Address: '',
          accommodations: '',
        });
        setErrors({});
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Have questions or need assistance? We're here to help you with all your exterior cleaning needs.
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
                <label htmlFor="Address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="Address"
                  id="Address"
                  value={formData.Address}
                  onChange={handleChange}
                  className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                />
                {errors.Address && <p className="text-red-600 text-sm mt-1">{errors.Address}</p>}
              </div>

              <div>
                <label htmlFor="accommodations" className="block text-sm font-medium text-gray-700">Special Accommodations</label>
                <textarea
                  name="accommodations"
                  id="accommodations"
                  rows="4"
                  value={formData.accommodations}
                  onChange={handleChange}
                  className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  placeholder="Any special requests or additional information"
                />
              </div>

              <div>
                {submitSuccess && (
                  <div className="p-4 mb-6 text-green-700 bg-green-100 rounded-lg border border-green-500" role="alert">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="font-medium">Message sent successfully! We'll get back to you soon.</p>
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
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
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

export default ContactUs;
