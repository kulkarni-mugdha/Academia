import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialsSection = () => {

  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text-3xl font-medium text-gray-900 dark:text-gray-100">Testimonials</h2>
      <p className="md:text-base text-gray-600 dark:text-gray-300 mt-3">
        Hear from our learners as they share their journeys of transformation, success, and how our <br /> platform has made a difference in their lives.
      </p>
      <div className="grid grid-cols-auto gap-8 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="text-sm text-left border border-gray-200 dark:border-gray-700 pb-6 rounded-lg bg-white dark:bg-gray-900 shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-100 dark:bg-slate-800">
              <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100">{testimonial.name}</h1>
                <p className="text-gray-600 dark:text-gray-300">{testimonial.role}</p>
              </div>
            </div>
            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="h-5"
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-5">{testimonial.feedback}</p>
            </div>
            <a href="#" className="text-blue-500 underline px-5">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
