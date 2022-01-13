import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';
import './Team.css';

const TeamCard = ({ name, img, role, github, linkedIn }) => {
    return (
        <div className="teamCard">
            <Avatar src={img} />
            <div className="team__details">
                <h1>{name}</h1>
                <h2>{role}</h2>
            </div>
            <div className="team__social">
                <a href={github} target='_blank' rel='noreferrer'><GitHubIcon /></a>
                <a href={linkedIn} target='_blank' rel='noreferrer'><LinkedInIcon /></a>
            </div>
        </div>
    )
}

export default TeamCard;