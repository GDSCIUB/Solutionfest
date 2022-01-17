import React from 'react';
import gdscLogo from '../../assets/gdsc-logo-white.png';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { FORMS } from '../../module/Gernal';
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
                        <a href={FORMS.VOLUNTEERING_FORM}>Join our Team (Volunteer)</a>
                    </div>
                    <div>
                        <a href={FORMS.SPEAKER_FORM}>Become Speaker</a>
                        <span>&nbsp;|&nbsp;</span>
                        <a href={FORMS.MENTOR_FORM}>Become Mentor</a>
                        <span>&nbsp;|&nbsp;</span>
                        <a href={FORMS.PARTNER_FORM}>Become Community Partner</a>
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
