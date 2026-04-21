import React, { useContext, useEffect, useMemo } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [searchParams] = useSearchParams();
  const { allCourses, calculateDiscountedPrice, formatPrice } = useContext(AppContext);

  const course = useMemo(
    () => allCourses.find((item) => item._id === courseId),
    [allCourses, courseId]
  );

  const finalPrice = calculateDiscountedPrice(course?.coursePrice, course?.discount);

  useEffect(() => {
    if (searchParams.get('success') !== 'true') return;

    toast.success('Payment completed successfully.');
    const timer = window.setTimeout(() => {
      navigate(`/course/${courseId}`, { replace: true });
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [courseId, navigate, searchParams]);

  const handlePaymentRedirect = () => {
    const successUrl = `${window.location.origin}/checkout/${courseId}?success=true`;
    window.location.href = `https://your-payment-link?redirect_url=${encodeURIComponent(successUrl)}`;
  };

  if (!course) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6 text-center">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-8 py-10 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Loading checkout...</h1>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            We are preparing your course summary.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-6 py-14">
      <div className="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-colors duration-300 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Checkout</p>
          <h1 className="mt-3 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Review your course before payment
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-gray-600 dark:text-gray-300 sm:text-base">
            This flow is ready for an external Razorpay or Stripe payment link without changing your existing course and auth setup.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <img
              src={course.courseThumbnail}
              alt={course.courseTitle}
              className="h-64 w-full object-cover"
            />
            <div className="space-y-4 p-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Course title</p>
                <h2 className="mt-1 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {course.courseTitle}
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-300">
                  {course.discount}% off
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Learn with structured lessons and project-based practice
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-fit rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm transition-colors duration-300 sm:p-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Order summary</h3>
          <div className="mt-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center justify-between gap-4">
              <span>Original price</span>
              <span className="line-through">{formatPrice(course.coursePrice)}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Discounted price</span>
              <span className="text-lg font-semibold text-blue-600 dark:text-blue-300">{formatPrice(finalPrice)}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handlePaymentRedirect}
            className="mt-8 w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
          >
            Pay Now
          </button>

          <button
            type="button"
            onClick={() => navigate(`/course/${courseId}`)}
            className="mt-3 w-full rounded-xl border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:text-gray-200"
          >
            Back to course
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
