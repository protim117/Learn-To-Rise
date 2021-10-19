import React from 'react';
import useNews from '../../../../Hooks/useNews';
import SingleNews from '../SingleNews/SingleNews';

const News = () => {
    const {news}=useNews();
    return (
        <div className='container mt-5'>
            <h2 className='mb-3'><u>Today's Popular News</u></h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                news.map(singleNews => <SingleNews key={singleNews.id} singleNews={singleNews}></SingleNews>)
            }
            </div>

        </div>
    );
};

export default News;