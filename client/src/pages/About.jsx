import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Academia
        </h1>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Academia is a modern learning platform designed to help students gain
          real-world skills through expert-led courses, structured learning paths,
          and interactive experiences.
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 space-y-10">

        {/* SECTION 1 */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            🎯 Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            To make high-quality education accessible, practical, and
            career-focused for learners everywhere.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 dark:border-gray-700"></div>

        {/* SECTION 2 */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            🚀 What We Offer
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            A wide range of courses, real-time progress tracking,
            certifications, and structured learning paths designed for success.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 dark:border-gray-700"></div>

        {/* SECTION 3 */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            💡 Why Choose Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We focus on real-world skills, guided learning, and a seamless
            experience to help you grow confidently.
          </p>
        </div>

      </div>

      {/* EXTRA PREMIUM TOUCH */}
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Trusted by learners building their future 🚀
        </p>
      </div>

    </div>
  );
};

export default About;