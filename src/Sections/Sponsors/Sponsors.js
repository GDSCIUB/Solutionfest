import React from 'react';
import sponsorCover from '../../assets/sponsor-cover.png';
import { SOCIALS } from '../../module/Gernal';
import './Sponsors.css';

const Sponsors = () => {
    return (
        <div id='Sponsors' className='sponsors'>
            <div className='sponsors_head'>
                <div className='sponsors_head_content'>
                    <h1>Sponsor a special hackathon</h1>
                    <p>Our sponsors help us unite emerging developers, designers, and builders. They make it possible for hackers to build something they're proud of. Stay tuned as we confirm more sponsors for the event.</p>
                    <p>Interested in sponsoring? Email us at </p>
                    <a href={SOCIALS.email}>
                        <button>Become a sponsor</button>
                    </a>
                </div>
                <div className='sponsors_head_img'>
                    <img src={sponsorCover} alt="" />
                </div>
            </div>
            <div className='our_sponsors'>
                <h2>Our sponsors</h2>
                <p>Will be updated soon!</p>
            </div>
            <div className='community_partners'>
                <h2>Community Partners</h2>
                <p>Will be updated soon!</p>
            </div>
        </div>
    )
}

export default Sponsors;
