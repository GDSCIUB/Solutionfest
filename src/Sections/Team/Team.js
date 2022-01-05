import React from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    return (
        <div className="team" id="Team">
            <div className="team__title">
                <h1>Meet Our Team</h1>
                <p>Passionate students are driving the success of the program.</p>
            </div>
            <div className="teamCards">
                <TeamCard
                    name="Sharjeel Yunus"
                    clas="Computer Science"
                    img="https://firebasestorage.googleapis.com/v0/b/gdsciub.appspot.com/o/Team%2022%2Fsharjeel-sq.jpg?alt=media&token=a07aee2d-3239-4daf-8f17-f30ae7d14f45"
                    role="Community Lead"
                    github="https://github.com/sharjeelyunus"
                    linkedIn="https://www.linkedin.com/in/sharjeel-yunus/"
                />
            </div>
        </div>
    )
}

export default Team;
