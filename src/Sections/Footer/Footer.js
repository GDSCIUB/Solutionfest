import React from 'react';
import gdscLogo from '../../assets/gdsc-logo-white.png';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { EVENT, FORMS } from '../../module/Gernal';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_head'>
                <img src={gdscLogo} alt="" />
                <p>#{EVENT.name} | What will you create to be put in?</p>
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
                    </div>
                    <div>
                        <a href='/#about'>About {EVENT.name}</a>
                        <span>&nbsp;|&nbsp;</span>
                        <a href='/Code-of-Conduct'>Code of Conduct</a>
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
