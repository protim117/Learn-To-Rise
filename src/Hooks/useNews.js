import React, { useEffect, useState } from 'react';

const useNews = () => {
    const[news,setNews]=useState([]);
    useEffect(()=>{
        fetch('./news.json')
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[])
    return {news};
};

export default useNews;