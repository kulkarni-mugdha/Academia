import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Contact Us
      </h1>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Have questions or need help? We'd love to hear from you.
      </p>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        
        <form className="space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Send Message
          </button>

        </form>

        <div className="mt-6 text-gray-600 dark:text-gray-300">
          <p>Email: support@academia.com</p>
          <p>Location: India</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;