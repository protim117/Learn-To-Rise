import React, { useEffect, useState } from 'react';

const useNews = () => {
    const[news,setNews]=useState([]);
    // fetching news data 
    useEffect(()=>{
        fetch('./news.json')
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[])
    return {news};
};

export default useNews;