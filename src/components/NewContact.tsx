'use client'
import { useState } from 'react';

export default function ContactUs() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-10 lg:px-16 flex flex-col lg:flex-row justify-center  items-start w-full max-w-[1300px] mx-auto gap-8">
      {/* Left column with heading and description */}
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Interested in collaborating or have a specific request? Just send us an email
          to learn more. We can't wait to hear from you!
        </p>
        <div className="hidden lg:block border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500">
            We typically respond within 1-2 business days. For urgent inquiries, 
            please include "Urgent" in your subject line.
          </p>
        </div>
      </div>
      
      {/* Right column with form */}
      <div className="w-full lg:w-2/3">
        {submitSuccess ? (
          <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded mb-6">
            Thank you for your message! We'll get back to you soon.
          </div>
        ) : null}
        
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                First Name <span className="text-gray-400">(required)</span>
              </label>
              <input 
                type="text" 
                id="firstName" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                Last Name <span className="text-gray-400">(required)</span>
              </label>
              <input 
                type="text" 
                id="lastName" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-gray-400">(required)</span>
            </label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message <span className="text-gray-400">(required)</span>
            </label>
            <textarea 
              id="message" 
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors disabled:bg-gray-400 flex items-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            
            <span className="text-xs text-gray-500 ml-4 hidden sm:inline-block">
              All fields marked (required) must be completed
            </span>
          </div>
        </form>
        
        <div className="block lg:hidden border-t border-gray-200 mt-8 pt-6">
          <p className="text-sm text-gray-500">
            We typically respond within 1-2 business days. For urgent inquiries, 
            please include "Urgent" in your subject line.
          </p>
        </div>
      </div>
    </section>
  );
}