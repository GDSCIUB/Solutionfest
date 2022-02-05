import React from 'react';
import sponsorCover from '../../assets/sponsor-cover.png';
import { SOCIALS } from '../../module/Gernal';
import Google from '../../assets/google-developers.png';
import './Sponsors.css';

const Sponsors = () => {
    return (
        <div id='Sponsors' className='sponsors'>
            <div className='sponsors_head'>
                <div className='sponsors_head_content'>
                    <h1>Sponsor a special hackathon</h1>
                    <p>Our sponsors help us unite emerging developers, designers, and builders. They make it possible for hackers to build something they're proud of. Stay tuned as we confirm more sponsors for the event.</p>
                    <p>Interested in sponsoring? Email us at {SOCIALS.mail}</p>
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
                <div className='sponsors_here'>
                    <div className='diamond_sponsors'>
                        <h3>DIAMOND SPONSORS</h3>
                        <div className='sponsors_div'>
                            <div>
                                <a href="https://developers.google.com/" target="_blank" rel="noreferrer">
                                    <img src={Google} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='community_partners'>
                <h2>Community Partners</h2>
                <p>Will be updated soon!</p>
            </div> */}
        </div>
    )
}

export default Sponsors;
