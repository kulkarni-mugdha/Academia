import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';

const CourseCard = ({ course }) => {

    const { calculateRating, calculateDiscountedPrice, formatPrice, toggleWishlist, isInWishlist } = useContext(AppContext);
    console.log('CourseCard course:', course)

    // Safety check
    if (!course) return null;

    const rating = calculateRating(course || {});
    const coursePrice = Number(course?.coursePrice ?? course?.price ?? 0);
    const discount = Number(course?.discount ?? 0);
    const finalPrice = calculateDiscountedPrice(coursePrice, discount);
    const wishlisted = isInWishlist(course._id);

    const handleWishlist = (event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleWishlist(course._id);
        toast.success(wishlisted ? 'Removed from wishlist' : 'Added to wishlist');
    };

    return (
        <Link
            onClick={() => window.scrollTo(0, 0)}
            to={`/course/${course?._id || ""}`}
            className="border border-[var(--color-border)] bg-[var(--color-card)] pb-6 overflow-hidden rounded-lg transition-colors duration-300"
        >
            <img
                className="w-full"
                src={course?.courseThumbnail || assets.placeholder}
                alt="course"
            />

            <div className="p-3 text-left">

                {/* Course Title */}
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    {course?.courseTitle || "Untitled Course"}
                </h3>

                {/* Educator */}
                <p className="text-gray-700 dark:text-gray-200">
                    {course?.educator?.name || "Unknown Educator"}
                </p>

                {/* Rating Section */}
                <div className="flex items-center space-x-2">
                    <p>{rating}</p>

                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                className="w-3.5 h-3.5"
                                src={
                                    i < Math.floor(rating)
                                        ? assets.star
                                        : assets.star_blank
                                }
                                alt="star"
                            />
                        ))}
                    </div>

                    <p className="text-gray-700 dark:text-gray-200">
                        ({course?.courseRatings?.length || 0})
                    </p>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 pt-1">
                    <p className="text-base font-semibold text-gray-900 dark:text-gray-100">
                        {formatPrice(finalPrice)}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-200 line-through">
                        {formatPrice(coursePrice)}
                    </p>
                    <button
                        type="button"
                        onClick={handleWishlist}
                        className="ml-auto rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-gray-700 dark:text-gray-100"
                    >
                        {wishlisted ? 'Wishlisted' : 'Wishlist'}
                    </button>
                </div>

            </div>
        </Link>
    );
};

export default CourseCard;
