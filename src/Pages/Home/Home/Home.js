import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import News from '../News/News/News';
import Services from '../Services/Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            {/* Banner section  */}
            <Banner></Banner>
            {/* Services section  */}
            <Services></Services>
            {/* Doctors Section  */}
            <Doctors></Doctors>
            {/* News Section  */}
            <News></News>
        </div>
    );
};

export default Home;