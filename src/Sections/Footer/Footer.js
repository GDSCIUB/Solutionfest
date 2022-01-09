import React from 'react';
import gdscLogo from '../../assets/gdsc-logo-white.png';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_head'>
                <img src={gdscLogo} alt="" />
                <p>#CrackTheSolution | What will you create to be put in?</p>
                <div className='footer_policy'>
                    <div>
                        <a href="/Team2022">Meet our Team</a>
                        <span>&nbsp;|&nbsp;</span>
                        <a href="/">Join our Team</a>
                    </div>
                    <div>
                        <a href='/#about'>About Crack The Solution</a>
                        <span>&nbsp;|&nbsp;</span>
                        <a href='/Code-of-Conduct'>Code of Conduct</a>
                    </div>
                    <div>
                        <a href='/Privacy-Policy'>Privacy Policy</a>
                        <span>&nbsp;|&nbsp;</span>
                        <a href='/Terms-of-use'>Terms of Use</a>
                    </div>
                </div>
                <div className='footer_social'>
                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}

export default Footer;
