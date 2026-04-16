import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const learningPaths = [
  {
    title: 'Web Development Track',
    steps: ['Web Development for Beginners', 'Advanced React Development', 'Full Stack Web Development'],
  },
  {
    title: 'Data and AI Track',
    steps: ['Data Science with Python', 'Machine Learning Basics'],
  },
  {
    title: 'Interview Prep Track',
    steps: ['Java Programming Masterclass', 'Data Structures & Algorithms', 'Aptitude and Placement Preparation'],
  },
];

const LearningPath = () => {
  const { allCourses } = useContext(AppContext);
  const navigate = useNavigate();

  const handleStepClick = (step) => {
    const matchedCourse = allCourses.find((course) => course?.courseTitle === step);
    navigate(matchedCourse?._id ? `/course/${matchedCourse._id}` : '/course-list');
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-900 dark:text-gray-100">Learning Path</h2>
      <p className="mt-3 text-sm md:text-base text-gray-700 dark:text-gray-200">
        Follow clear roadmaps from beginner to advanced and build your skills step by step.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {learningPaths.map((path) => (
          <div key={path.title} className="rounded-xl border border-gray-200 bg-white p-5 text-left transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{path.title}</h3>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
              {path.steps.map((step, index) => (
                <React.Fragment key={step}>
                  <button
                    type="button"
                    onClick={() => handleStepClick(step)}
                    className="cursor-pointer rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-gray-800 transition duration-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:bg-slate-800 dark:text-gray-100 dark:hover:border-blue-400 dark:hover:bg-slate-700 dark:hover:text-blue-300"
                  >
                    {step}
                  </button>
                  {index < path.steps.length - 1 && <span className="text-blue-600 dark:text-blue-300">{'->'}</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;

