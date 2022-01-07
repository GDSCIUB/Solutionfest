import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about' id='About'>
            <div className='about_head'>
                <h2>Crack The Solution</h2>
                <p>The Solution is a student-run virtual event consisting of a 36-hour hackathon with mentorship from experts and fun challenges.</p>
                <p>It will bring student developers to compete and develop creative solutions to real-world problems based on United Nations’ Sustainable goals. The hackathon is designed to solve local community problems, spark innovation, attract and educate new talent in accordance with the 2022 Solution Challenge.</p>
            </div>
            <div className='about_img'></div>
            <div className='about_hackathon'>
                <div className='hackaton_img'></div>
                <div className='hackathon_about'>
                    <div className='hackathon_about_head'>
                        <h3>Crack The Solution | Google Solution Challenge</h3>
                        <p>Held in association with the 2022 Google Solution challenge Crack the Solution is the student-run hackathon by the GDSC IUB x GDSC BULC. We believe that remarkable developers, designers, and innovators can help us solve challenges to end poverty, ensure prosperity, and protect the planet. The diversity and talent of the participating developers will contribute greatly to the success of our event. We want to establish a tech ecosystem and provide a platform for students to present their ideas of the future.</p>
                    </div>
                    <div className='hackathon_about_img'></div>
                </div>
            </div>
            <div className='hackathon_theme'>
                <div className='theme_head'>
                    <h1>All the themes you need to create something incredible.</h1>
                    <p>The themes for Hack The Solution have been derived from United Nations 17 sustainable goals. They recognize that ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, reduce inequality, and spur economic growth – all while tackling climate change and working to preserve our oceans and forests.</p>
                </div>
                <div className='theme_img'></div>
            </div>
            <div className='hackathon_judges'>
                <h2>Judges</h2>
                <p>Will be Announced Soon!</p>
            </div>
            <div className='hackathon_mentors'>
                <h2>Mentors</h2>
                <p>Will be Announced Soon!</p>
            </div>
            <div className='hackathon_platform'>
                <h1>Join Our Discord Server</h1>
                <p>Don’t miss a single tinkle. Join our official discord server to stay up top of the latest announcements and sessions, participate in fun games and challenges, and stay connected to fellow hackers.</p>
                <button>Got to Discord</button>
            </div>
            <div className='hackthon_speakers'>
                <h1>Speakers</h1>
                <p>Will be Announced Soon!</p>
            </div>
            <div className='hackathon_workshops'>
                <h1>Sessions & Workshops</h1>
                <p>Will be Updated Soon!</p>
            </div>
        </div>
    )
}

export default About;
