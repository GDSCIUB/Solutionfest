import React from 'react';
import TeamCard from './TeamCard';
import './Team.css';

const Team22 = () => {
    return (
        <div className="team" id="Team">
            <div className="team__title">
                <h1>Meet Our Team</h1>
                <p>A team of passionate students are driving the success of the program.</p>
            </div>
            <div className="teamCards">
                <TeamCard
                    name="Sharjeel Yunus"
                    img="https://github.com/sharjeelyunus.png"
                    role="Organizer"
                    github="https://github.com/sharjeelyunus"
                    linkedIn="https://www.linkedin.com/in/sharjeel-yunus/"
                />
                <TeamCard
                    name="Farhan Ashraf"
                    img="https://www.github.com/mriceflame.png"
                    role="Organizer"
                    github="https://github.com/mriceflame"
                    linkedIn="https://www.linkedin.com/in/s4a/"
                />
                <TeamCard
                    name="Alina Sohaib"
                    img="https://github.com/Alinashoaib.png"
                    role="Organizer"
                    github="https://github.com/Alinashoaib"
                    linkedIn="https://www.linkedin.com/in/alina-s-b7913618b/"
                />
                <TeamCard
                    name="Aftab Ahmad"
                    img="https://github.com/aftabah772.png"
                    role="Organizer"
                    github="https://github.com/aftabah772"
                    linkedIn="https://www.linkedin.com/in/aftabah772/"
                />
            </div>
        </div>
    )
}

export default Team22;