import { longFormatters } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/homeLayout/NewsCard';

const CategoryNews = () => {
    let {id} = useParams()
    let data = useLoaderData()
    let [categoryNews,setCategoryNews]=useState([])
    useEffect(() => {
if (id=='0') {
    setCategoryNews(data)
    return
} else if (id == '1') {
    
    const filterNews=data.filter((news)=>news.others.is_today_pick=== true)
    
     setCategoryNews(filterNews);
} else {
    
    const filterNews=data.filter((news)=>news.category_id=== parseInt(id))
    
     setCategoryNews(filterNews);
}

   },[data,id])
    
    return (
        <div>
            <h2 className='font-bold mb-5'>
            Total <span className='text-secondary'>{categoryNews.length}</span>  Found
            </h2>  
            <div className='grid grid-cols-1 gap-3'>
                {
                    categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;