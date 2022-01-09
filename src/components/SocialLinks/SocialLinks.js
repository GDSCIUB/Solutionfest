import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./SocialLinks.css";

const SocialLinks = () => {
    return (
        <div className='social'>
            <a href="/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />

            </a>
            <a href="/" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/" target="_blank">
                <FontAwesomeIcon icon={faDiscord} />
            </a>
        </div>
    )
}

export default SocialLinks;
