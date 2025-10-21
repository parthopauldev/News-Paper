import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/homeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    let [news, setNews] = useState({});
    let data = useLoaderData()
    let {id}= useParams();
   
    useEffect(() => {
        let newsDetails=data.find(singleNews=>singleNews.id == id)
setNews(newsDetails)
    },[data,id])
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5 text-2xl'>News Details</h2>
               <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;