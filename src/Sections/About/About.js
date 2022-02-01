import React from 'react';
import cover1 from '../../assets/About-Cover-1.png';
import logo from '../../assets/logo.png';
import sdgWheel from '../../assets/sdg-wheel.png';
import { EVENT } from '../../module/Gernal';
import { SOCIALS } from '../../module/Gernal';
import './About.css';

const About = () => {
    return (
        <div className='about' id='About'>
            <div className='about_sec'>
                <div className='about_head'>
                    <h2>{EVENT.name}</h2>
                    <p>{EVENT.name} is a student-run virtual event consisting of a 15 Days hackathon with mentorship from experts and fun challenges.</p>
                    <p>It will bring student developers to compete and develop creative solutions to real-world problems based on United Nations’ Sustainable goals. The hackathon is designed to solve local community problems, spark innovation, attract and educate new talent in accordance with the 2022 Solution Challenge.</p>
                </div>
                <div className='about_img'>
                    <img src={cover1} alt="" />
                </div>
            </div>
            <div className='about_hackathon'>
                <div className='hackathon_about'>
                    <div className='hackathon_about_img'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='hackathon_about_head'>
                        <h3>{EVENT.name} | Google Solution Challenge</h3>
                        <p>Held in association with the 2022 Google Solution challenge {EVENT.name} is the student-run hackathon by the GDSC Pakistan. We believe that remarkable developers, designers, and innovators can help us solve challenges to end poverty, ensure prosperity, and protect the planet. The diversity and talent of the participating developers will contribute greatly to the success of our event. We want to establish a tech ecosystem and provide a platform for students to present their ideas of the future.</p>
                    </div>
                </div>
            </div>
            <div className='hackathon_theme'>
                <div className='theme_head'>
                    <h1>All the themes you need to create something incredible.</h1>
                    <p>The themes for {EVENT.name} have been derived from United Nations 17 sustainable goals. They recognize that ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, reduce inequality, and spur economic growth – all while tackling climate change and working to preserve our oceans and forests.</p>
                </div>
                <div className='theme_img'>
                    <img src={sdgWheel} alt="" />
                </div>
            </div>
            <div className='hackathon_workshops'>
                <h1>Sessions & Workshops</h1>
                <div className='workshop_schedule'>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>Solutions Challenge: Introduction</p>
                            <p className='workshop_speaker'>Speaker: Hufsa Munawar</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 21 Feb 2022</p>
                                <p className='workshop_time'>Time: 7:00 - 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>UNDP: Sustainable Goals Session</p>
                            <p className='workshop_speaker'>Speaker: TBA</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 25 Feb 2022</p>
                                <p className='workshop_time'>Time: 7:00 - 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>Finding a Community problem</p>
                            <p className='workshop_speaker'>Speaker: Aiman Saeed</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 28 Feb 2022</p>
                                <p className='workshop_time'>Time: 7:00 - 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>Building a team: Why is it important?</p>
                            <p className='workshop_speaker'>Speaker: Osama Rajput</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 02 March 2022</p>
                                <p className='workshop_time'>Time: 7:00 - 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>Android: Tech Session</p>
                            <p className='workshop_speaker'>Speaker: Wajahat Karim</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 04 March 2022</p>
                                <p className='workshop_time'>Time: 7:00 - 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>Design Sprint: Phase 1 - 3</p>
                            <p className='workshop_speaker'>Speaker: Talal Ather</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 05 March 2022</p>
                                <p className='workshop_time'>Time: 12:00 - 1:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>Design Sprint: Phase 4 - 6</p>
                            <p className='workshop_speaker'>Speaker: Talal Ather</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 06 March 2022</p>
                                <p className='workshop_time'>Time: 12:00 - 1:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>Flutter: Tech Session</p>
                            <p className='workshop_speaker'>Speaker: Waleed & Sakina</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 08 March 2022</p>
                                <p className='workshop_time'>Time: 7:00 - 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>UI/UX Session </p>
                            <p className='workshop_speaker'>Speaker: TBA</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 10 March 2022</p>
                                <p className='workshop_time'>Time: 7:00 - 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>Firebase: Tech Session</p>
                            <p className='workshop_speaker'>Speaker: Eric Bhatti</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 11 March 2022</p>
                                <p className='workshop_time'>Time: 7:00 - 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>Tenserflow: Tech Session</p>
                            <p className='workshop_speaker'>Speaker: Aqsa Kausar </p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 12 March 2022</p>
                                <p className='workshop_time'>Time: 12:00 - 1:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>Art of Pitching </p>
                            <p className='workshop_speaker'>Speaker: Muhammad bin Masood</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 13 March 2022</p>
                                <p className='workshop_time'>Time: 12:00 - 1:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>Segmenting your customers & profiling them</p>
                            <p className='workshop_speaker'>Speaker: Saad Hamid</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 16 March 2022</p>
                                <p className='workshop_time'>Time: 7:00 - 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>Through the lens of a Product</p>
                            <p className='workshop_speaker'>Speaker: Muhammad Asim Khaskheli</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 18 March 2022</p>
                                <p className='workshop_time'>Time: 7:00 - 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>Open source, git and GitHub : Tech Session</p>
                            <p className='workshop_speaker'>Speaker: Adil Shehzad</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 19 March 2022</p>
                                <p className='workshop_time'>Time: 12:00 - 1:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>The extra mile: How to reach the finish line?</p>
                            <p className='workshop_speaker'>Speaker: Hira Tariq</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 20 March 2022</p>
                                <p className='workshop_time'>Time: 12:00 - 1:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hackthon_speakers'>
                <h1>Speakers</h1>
                <p>Will be Announced Soon!</p>
            </div>
            <div className='hackathon_mentors'>
                <h1>Mentors</h1>
                <p>Will be Announced Soon!</p>
            </div>
            <div className='hackathon_platform'>
                <h1>Join Our Discord Server</h1>
                <p>Don’t miss a single tinkle. Join our official discord server to stay up top of the latest announcements and sessions, participate in fun games and challenges, and stay connected to fellow hackers.</p>
                <a href={SOCIALS.discord} target="_blank" rel="noreferrer">
                    <button>Go To Discord</button>
                </a>
            </div>
        </div>
    )
}

export default About;
