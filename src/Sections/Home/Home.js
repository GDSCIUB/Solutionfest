import React from 'react';
import cover from '../../assets/main-page-cover.png';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import DevfolioLogo from '../../assets/Devfolio_Logo-White.png';

import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div>
                <div className='home_header'>
                    <h2>Build</h2>
                    <h1>Crack The Solution.</h1>
                    <p>Virtual Hackathon - Expected Dates: Febuary 15 - 28 | <span>GDSC IUB x GDSC BULC</span></p>
                </div>
                <div className='home_buttons'>
                    <a href="/" target='_blank'>
                        <button className='home_button_devfolio'>
                            <img src={DevfolioLogo} alt="" />&nbsp;Go to dashboard
                        </button>
                    </a>
                    <a href="https://discord.gg/NmXeaxxu" rel="noreferrer" target="_blank">
                        <button className='home_button_discord'>
                            <FontAwesomeIcon icon={faDiscord} /> Join Our Discord Server
                        </button>
                    </a>
                    <SocialLinks />
                </div>
            </div>
            <div className='home_img'>
                <img src={cover} alt="" />
            </div>
        </div>
    )
}

export default Home;
