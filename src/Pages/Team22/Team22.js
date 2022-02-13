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
            <div className='team_wrapper'>
                <h2>Organisers</h2>
                <div className="teamCards">
                    <TeamCard
                        name="Sharjeel Yunus"
                        img="https://github.com/sharjeelyunus.png"
                        role="GDSC IUB Lead"
                        github="https://github.com/sharjeelyunus"
                        linkedIn="https://www.linkedin.com/in/sharjeel-yunus/"
                    />
                    <TeamCard
                        name="Farhan Ashraf"
                        img="https://www.github.com/mriceflame.png"
                        role="GDSC BULC Lead"
                        github="https://github.com/mriceflame"
                        linkedIn="https://www.linkedin.com/in/s4a/"
                    />
                    <TeamCard
                        name="Alina Shoaib"
                        img="https://github.com/Alinashoaib.png"
                        role="GDSC NUST Lead"
                        github="https://github.com/Alinashoaib"
                        linkedIn="https://www.linkedin.com/in/alina-s-b7913618b/"
                    />
                    <TeamCard
                        name="Aftab Ahmad"
                        img="https://github.com/aftabah772.png"
                        role="GDSC Comsats ISB Lead"
                        github="https://github.com/aftabah772"
                        linkedIn="https://www.linkedin.com/in/aftabah772/"
                    />
                </div>
            </div>
            <div className='team_wrapper'>
                <h2>Social Media Team</h2>
                <div className="teamCards">
                    <TeamCard
                        name="Meer Hamza"
                        img="https://github.com/meerhamzadev.png"
                        role="GDSC UET Lead"
                        github="https://github.com/meerhamzadev"
                        linkedIn="https://www.linkedin.com/in/meerhamzadev/"
                    />
                    <TeamCard
                        name="Syed Aitezaz"
                        img="https://github.com/aitezazshah.png"
                        github="https://github.com/aitezazshah"
                        linkedIn="https://www.linkedin.com/in/syed-aitezaz-imtiaz-982b831ab/"
                    />
                    <TeamCard
                        name="Fatima Batool"
                        linkedIn="https://www.linkedin.com/in/fatima-batool-205970220"
                    />
                </div>
            </div>
            <div className='team_wrapper'>
                <h2>Graphics Team</h2>
                <div className="teamCards">
                    <TeamCard
                        name="Muhammad Afzal"
                        img="https://github.com/mafzaldev.png"
                        github="https://github.com/mafzaldev"
                        linkedIn="https://www.linkedin.com/in/mafzaldev"
                    />
                    <TeamCard
                        name="Uswah Saeed"
                        img="https://github.com/Uswah-Saeed.png"
                        github="https://github.com/Uswah-Saeed"
                        linkedIn="https://www.linkedin.com/in/uswah-saeed-b816241ba/"
                    />
                    <TeamCard
                        name="Faeez Shabir"
                        img="https://github.com/IamFaizy4.png"
                        github="https://github.com/IamFaizy4"
                        linkedIn="https://www.linkedin.com/in/iamfaizy4/"
                    />
                    <TeamCard
                        name="Abdullah Hassan"
                        linkedIn="https://www.linkedin.com/in/syed-abdullah-hassan-zaidi-746440215"
                    />
                    <TeamCard
                        name="Fatima Mashud"
                        img="https://github.com/Fatimamahsud.png"
                        github="https://github.com/Fatimamahsud"
                        linkedIn="https://www.linkedin.com/in/fatima-mahsud-39571b1a7/"
                    />
                </div>
            </div>
            <div className='team_wrapper'>
                <h2>Publication Team</h2>
                <div className="teamCards">
                    <TeamCard
                        name="Ali Rehman"
                        img="https://github.com/Thedanreturns.png"
                        github="https://github.com/Thedanreturns"
                        linkedIn="https://www.linkedin.com/in/ali-rehman-23004821b/"
                    />
                    <TeamCard
                        name="Shahzaneer Ahmad"
                        img="https://github.com/shahism.png"
                        github="https://github.com/shahism"
                        linkedIn="https://www.linkedin.com/in/shahism/"
                    />
                </div>
            </div>
            <div className='team_wrapper'>
                <h2>Community Managers</h2>
                <div className="teamCards">
                    <TeamCard
                        name="Umar Asad"
                        role="Discord"
                        img="https://github.com/MuhammadUmarAsad.png"
                        github="https://github.com/MuhammadUmarAsad"
                        linkedIn="https://www.linkedin.com/in/mumarasad"
                    />
                    <TeamCard
                        name="Ramsha"
                        role="Management"
                        linkedIn="https://www.linkedin.com/in/ramsha-khalid-02aab5209"
                    />
                </div>
            </div>
        </div>
    )
}

export default Team22;