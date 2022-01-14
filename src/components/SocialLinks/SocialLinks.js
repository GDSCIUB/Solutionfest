import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./SocialLinks.css";

const SocialLinks = () => {
    return (
        <div className='social'>
            <a href="https://www.instagram.com/crack_the_solution/" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/crackthesolution" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.facebook.com/crackthesolution/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />

            </a>
            <a href="https://twitter.com/cracksolution_" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://discord.gg/NmXeaxxu" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faDiscord} />
            </a>
        </div>
    )
}

export default SocialLinks;
