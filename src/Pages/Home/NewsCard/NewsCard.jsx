import React from 'react';
import { FaRegBookmark, FaShare, FaEye, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ categoryData }) => {
    const { _id, image_url, author, details, title, total_view, rating } = categoryData;
    return (
        <div className='mb-5  bg-gray-50'>
            <div className='flex justify-between items-center w-full border-2 bg-gray-200 px-3 py-1'>
                <div className='flex items-center space-x-2'>
                    <img src={author.img} alt="" className='w-11 h-11 rounded-full' />
                    <div>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex space-x-3'>
                    <FaRegBookmark className='w-5 h-5 text-gray-500'></FaRegBookmark>
                    <FaShare className='w-5 h-5 text-gray-500'></FaShare>
                </div>
            </div>
            <div className='space-y-3 px-3 py-1 mb-5'>
                <p className='font-bold text-2xl'>{title}</p>
                <img src={image_url} className='object-cover' alt="" />
                <p>{details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <br />
                    <Link to={`/news/${_id}`} className='font-semibold text-orange-500 underline text-sm'>Read more</Link></>}</p>
            </div>
            <hr />
            <div className='flex justify-between items-center px-3 py-3 mt-2'>
                <p className='font-semibold text-xl flex items-center'>
                    <Rating className='me-2 text-xl' initialRating={rating.number}
                        readonly
                        emptySymbol={<FaStar className='text-gray-500'></FaStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar className='text-orange-500'></FaStar>}></Rating>
                    {rating?.number}
                </p>
                <p className='flex items-center'>
                    <FaEye className='w-5 h-5 text-gray-500 me-2'></FaEye>
                    {total_view}
                </p>
            </div>
        </div>
    );
};

export default NewsCard;