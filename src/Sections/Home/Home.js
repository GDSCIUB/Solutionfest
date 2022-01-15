import React from 'react';
import cover from '../../assets/main-page-cover.png';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import DevfolioLogo from '../../assets/Devfolio_Logo-White.png';
import ReactTypingEffect from 'react-typing-effect';
import { SOCIALS, EVENT } from '../../module/Gernal';

import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div>
                <div className='home_header'>
                    <div className='typing_effect'>
                        <ReactTypingEffect
                            text={["Innovate", "Design", "Build", "Challenge", "Learn"]}
                            speed="300ms"
                            eraseSpeed="300ms"
                            typingDelay="1000ms"
                        />
                    </div>
                    <h1>{EVENT.name}.</h1>
                    <p>Virtual Hackathon · {EVENT.dates} · <span>GDSC Pakistan</span></p>
                </div>
                <div className='home_buttons'>
                    <a href={SOCIALS.devpost} rel="noreferrer" target='_blank'>
                        <button className='home_button_devfolio'>
                            <img src={DevfolioLogo} alt="" />&nbsp;Go to dashboard
                        </button>
                    </a>
                    <a href={SOCIALS.discord} rel="noreferrer" target="_blank">
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
