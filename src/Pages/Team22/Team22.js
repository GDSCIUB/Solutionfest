import React from 'react';
import TeamCard from './TeamCard';
import './Team.css';

const Team22 = () => {
    return (
        <div className="team" id="Team">
            <div className="team__title">
                <h1>Meet Our Team</h1>
                <p>Passionate students are driving the success of the program.</p>
            </div>
            <div className="teamCards">
                <TeamCard
                    name="Sharjeel Yunus"
                    img="https://firebasestorage.googleapis.com/v0/b/gdsciub.appspot.com/o/Team%2022%2Fsharjeel-sq.jpg?alt=media&token=a07aee2d-3239-4daf-8f17-f30ae7d14f45"
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
                    name="Emaan Yaqoob"
                    img="https://github.com/eeimaan.png"
                    role="Community Manager"
                    github="https://github.com/eeimaan"
                    linkedIn="https://www.linkedin.com/in/emaanyaqub/"
                />
                <TeamCard
                    name="Aadil Saeed"
                    img="https://firebasestorage.googleapis.com/v0/b/gdsciub.appspot.com/o/Team%2022%2Faadil.jpg?alt=media&token=57e0cfbc-cc21-4f01-b284-c5c6b408852d"
                    role="Promotions Head"
                    github="https://github.com/aadilsaeed"
                    linkedIn="https://www.linkedin.com/in/aadil-saeed-9b255021b"
                />
                <TeamCard
                    name="Hamza Bashir"
                    img="https://cloud-od7jqpcvy-hack-club-bot.vercel.app/1hamzamalik6825-28092021-0001.jpg"
                    role="Web Dev"
                    github="https://github.com/DEADHEAD652"
                    linkedIn="https://www.linkedin.com/in/hamza-malik-74a06621b"
                />
                <TeamCard
                    name="Saman Mehmood"
                    img="https://github.com/SamanMahmood.png"
                    role="Media Head"
                    github="https://github.com/SamanMahmood"
                    linkedIn="https://www.linkedin.com/in/saman-mahmood-a8187120a/"
                />
                <TeamCard
                    name="Faeez Shabbir"
                    img="https://github.com/IamFaizy4.png"
                    role="Graphics Head"
                    github="https://github.com/IamFaizy4"
                    linkedIn="https://www.instagram.com/iamfaizy4/"
                />
                <TeamCard
                    name="Ali Rehman"
                    img="https://github.com/Thedanreturns.png"
                    role="Publication Head"
                    github="https://github.com/Thedanreturns"
                    linkedIn="https://www.linkedin.com/in/ali-rehman-23004821b/"
                />
            </div>
        </div>
    )
}

export default Team22;