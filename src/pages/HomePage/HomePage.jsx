import React from 'react';
import Banner from '../../components/HomePage/Banner';
import Card from "../../components/HomePage/Card"
import AllFriends from '../../components/HomePage/AllFriends';

const Home = () => {
    return (
        <div>
            <Banner />
            <Card />
            <AllFriends />
        </div>
    );
};

export default Home;