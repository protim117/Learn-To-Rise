import React, { useEffect, useState } from 'react';

const usePrice = () => {
    const[prices,setPrices]=useState([]);
    useEffect(()=>{
        fetch("./price.json")
        .then(res=>res.json())
        .then(data=>setPrices(data))
    },[])
    return {
        prices
    };
};

export default usePrice;