import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { SOCIALS } from '../../module/Gernal';
import "./SocialLinks.css";

const SocialLinks = () => {
    return (
        <div className='social'>
            <a href={SOCIALS.instagram} rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={SOCIALS.facebook} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />

            </a>
            <a href={SOCIALS.twitter} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={SOCIALS.discord} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faDiscord} />
            </a>
        </div>
    )
}

export default SocialLinks;
