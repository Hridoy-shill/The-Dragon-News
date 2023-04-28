import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const CategoryNews = () => {
    const {id} = useParams()
    const categoriesData = useLoaderData()
    console.log(categoriesData);
    return (
        <div>
            <h1 className='font-bold text-xl mb-8'>Dragon News Home</h1>
            {
                categoriesData.map(categoryData =><NewsCard key={categoryData._id} categoryData={categoryData}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;