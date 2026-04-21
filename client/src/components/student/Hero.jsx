import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from '../../components/student/SearchBar';

const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-7 bg-gradient-to-b from-cyan-100/70 via-cyan-50/40 to-transparent px-7 pt-20 text-center dark:from-slate-900 dark:via-slate-950 dark:to-transparent md:pt-36 md:px-0">
      <h1 className="relative mx-auto max-w-3xl md:text-home-heading-large text-home-heading-small font-extrabold tracking-tight text-gray-800 dark:text-gray-100">
        Empower your future with the courses designed to
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> fit your choice.</span>
        <img src={assets.sketch} alt="sketch" className="md:block hidden absolute -bottom-7 right-0" />
      </h1>
      <p className="mx-auto hidden max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300 md:block">
        Learn in-demand skills with structured courses, real-world projects, and expert guidance designed to accelerate your career.
      </p>
      <p className="mx-auto max-w-sm text-sm leading-6 text-gray-600 dark:text-gray-300 md:hidden">
        Learn in-demand skills with structured courses, real-world projects, and expert guidance designed to accelerate your career.
      </p>
      <SearchBar />
      <div className="flex flex-wrap items-center justify-center gap-3 px-4 pb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
        <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 shadow-sm">🔥 1000+ learners</span>
        <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 shadow-sm">🚀 Career-focused</span>
        <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 shadow-sm">⭐ Expert instructors</span>
      </div>
    </div>
  );
};

export default Hero;
