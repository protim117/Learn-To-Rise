import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import News from '../News/News/News';
import Services from '../Services/Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <News></News>
        </div>
    );
};

export default Home;