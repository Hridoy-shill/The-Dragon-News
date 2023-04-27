import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const CategoryNews = () => {
    const {id} = useParams()
    const categoriesData = useLoaderData()
    console.log(categoriesData);
    return (
        <div>
            {
                categoriesData.map(categoryData =><NewsCard key={categoryData._id} categoryData={categoryData}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;