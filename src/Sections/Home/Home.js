import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='home_header'>
                <h2>Build</h2>
                <h1>Crack The Solution.</h1>
                <p>Virtual Hackathon - Expected Dates: Febuary 15 - 28 | <span>GDSC IUB x GDSC BULC</span></p>
            </div>
            <div className='home_buttons'>
                <button className='home_button_devfolio'>Go to dashboard</button>
                <button className='home_button_discord'>Join Our Discord Server</button>
            </div>
            <div className='home_img'></div>
        </div>
    )
}

export default Home;
