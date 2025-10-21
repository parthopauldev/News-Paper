import React from 'react';
import { FaBookmark, FaShareAlt, FaEye, FaStar, FaRegStar } from 'react-icons/fa';
import { format } from 'date-fns';
import { Link } from 'react-router';

// Define the structure for the news item data


const NewsCard = ({news}) => {
    // Destructure the data for easier access
    const {id, title, total_view, author, thumbnail_url, details, rating } = news;
    
    // Helper function to render star rating
    const renderRating = (num) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= num) {
                // Full star
                stars.push(<FaStar key={i} className="text-yellow-500 w-4 h-4" />);
            } else {
                // Empty star
                stars.push(<FaRegStar key={i} className="text-gray-300 w-4 h-4" />);
            }
        }
        return stars;
    };

    // Format the date using date-fns
    const formattedDate = author.published_date ? format(new Date(author.published_date), 'yyyy-MM-dd') : 'N/A';
    
    // Truncate the details text to mimic the "Read More" preview
    const truncatedDetails = details.substring(0, 200) + '...';

    return (
        <div className="card w-full bg-base-100  border border-gray-200">
            {/* 1. Card Header (Author and Icons) */}
            <div className="flex justify-between items-center p-4 bg-gray-50 ">
                <div className="flex items-center space-x-3">
                    <img className="w-10 h-10 rounded-full object-cover" src={author.img} alt={author.name} />
                    <div>
                        <p className="font-semibold text-sm text-gray-800">{author.name}</p>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <div className="flex space-x-2 text-gray-600">
                    {/* Bookmark Icon */}
                    <button className="hover:text-primary transition-colors">
                        <FaBookmark className="w-5 h-5" />
                    </button>
                    {/* Share Icon */}
                    <button className="hover:text-primary transition-colors">
                        <FaShareAlt className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* 2. Card Body (Title, Image, Details) */}
            <div className="card-body p-5">
                <h2 className="card-title text-xl font-extrabold text-gray-900 leading-tight mb-3">
                    {title}
                </h2>
                
                {/* News Image */}
                <figure className="mb-4 rounded-lg overflow-hidden">
                    <img 
                        src={thumbnail_url} 
                        alt={title} 
                        className="w-full h-auto object-cover max-h-80"
                    />
                </figure>

                {/* Tag Cloud / Badges (Optional - based on the image's "Tag Cloud Tags") */}
                <div className="flex flex-wrap gap-2 my-2">
                    {news.tags.slice(0, 4).map((tag, index) => (
                        <div key={index} className="badge badge-outline badge-sm text-gray-600">
                            {tag}
                        </div>
                    ))}
                    {rating.badge === 'trending' && (
                         <div className="badge badge-warning badge-sm text-white font-bold">
                            {rating.badge.toUpperCase()}
                        </div>
                    )}
                </div>

                {/* Truncated Details */}
                <p className="text-gray-600 text-base mb-4">
                    {truncatedDetails}
                </p>
                
                {/* Read More Link */}
                <Link to={`/news-Details/${id}`} className="text-primary font-bold cursor-pointer hover:underline text-sm">
                    Read More
                </Link>
            </div>

            {/* 3. Card Footer (Rating and Views) */}
            <div className="flex justify-between items-center p-4 border-t bg-gray-50">
                {/* Rating Section */}
                <div className="flex items-center space-x-2">
                    <div className="flex">
                        {renderRating(rating.number)}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                        {rating.number}.0
                    </span>
                </div>
                
                {/* Total Views Section */}
                <div className="flex items-center space-x-1 text-gray-600">
                    <FaEye className="w-4 h-4" />
                    <span className="text-sm font-medium">
                        {total_view.toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

// Example of how to use it in another file (e.g., App.js)
/*
    import NewsCard from './NewsCard';
    
    function App() {
        return (
            <div className="p-10 max-w-lg mx-auto">
                <NewsCard />
            </div>
        );
    }
*/