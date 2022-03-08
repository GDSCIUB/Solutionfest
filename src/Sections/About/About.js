import React from 'react';
import cover1 from '../../assets/About-Cover-1.png';
import logo from '../../assets/logo.png';
import sdgWheel from '../../assets/sdg-wheel.png';
import { EVENT } from '../../module/Gernal';
import { SOCIALS } from '../../module/Gernal';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HufsaMunawar from '../../assets/Speakers/Hufsa-Munawar.jpg';
import SaadHamid from '../../assets/Speakers/Saad Hamid.jpeg';
import WajahatKarim from '../../assets/Speakers/wajahat-karim.jpeg';
import WaleedArshad from '../../assets/Speakers/Waleed Arshad.jpeg';
import EricBhatti from '../../assets/Speakers/Eric Bhatti.jpg';
import AimanSaeed from '../../assets/Speakers/Aiman Saeed.jpeg';
import AdilShehzad from '../../assets/Speakers/Adil Shehzad.jpg';
import Aqsakausar from '../../assets/Speakers/Aqsa kausar.jpeg';
import HiraTariq from '../../assets/Speakers/Hira Tariq.jpeg';
import MuhammadAsimKhaskheli from '../../assets/Speakers/Muhammad Asim Khaskheli.jpg';
import MuhammadBinMasood from '../../assets/Speakers/Muhammad Bin Masood.jpeg';
import ShahzebKazmi from '../../assets/Speakers/Shahzeb Kazmi.jpg';
import OsamaRajput from '../../assets/Speakers/Osama Rajput.jpeg';
import SakinaAbbas from '../../assets/Speakers/Sakina Abbas.jpeg';
import TalalAthar from '../../assets/Speakers/Talal Athar.jpeg';
import SharjeelYunus from '../../assets/Speakers/Sharjeel Yunus.jpg';
import AlinaSohaib from '../../assets/Speakers/Alina Sohaib.jpg';
import KashifTaj from '../../assets/Mentors/Kashif Taj.jpg';
import MuhammadHamza from '../../assets/Mentors/Muhammad Hamza.jpg';
import EmadEhsan from '../../assets/Mentors/Emad Ehsan.jpg';
import SabaKalsoom from '../../assets/Mentors/Saba Kalsoom.jpg';
import NahyanFarooq from '../../assets/Mentors/Nahyan Farooq.jpg';
import AmmarRaja from '../../assets/Mentors/Ammar A. Raja.jpg';
import HuzaifaHabib from '../../assets/Mentors/Huzaifa Habib.jpg';
import OmarAbedin from '../../assets/Mentors/Omar Abedin.jpg';
import CyniaEjaz from '../../assets/Mentors/Cynia Ejaz.jpg';
import * as Add2Calendar from "add2calendar";
import 'add2calendar/css/add2calendar.css';

import './About.css';

class Add2CalendarComponent extends React.Component {
    componentDidMount() {
        const Session1 = new Add2Calendar({
            title: 'UI/UX Session | SolutionFest',
            start: 'March 10, 2022 19:00',
            end: 'March 10, 2022 20:00',
            location: 'https://meet.google.com/xbz-qapp-qij',
            description: "UI/UX | SolutionFest | Speaker: Shahzeb Kazmi | Google Meet Link: https://meet.google.com/xbz-qapp-qij"
        })
        Session1.createWidget('#single-normal')
    }

    render() {
        return (
            <div id="single-normal"></div>
        );
    }
}

const About = () => {

    return (
        <div className='about' id='About'>
            <div className='about_sec'>
                <div className='about_head'>
                    <h2>{EVENT.name}</h2>
                    <p>{EVENT.name} is a student-run virtual event consisting of a 15 Days training and mentorship event from experts and fun challenges.</p>
                    <p>It will bring student developers to compete and develop creative solutions to real-world problems based on United Nations’ Sustainable goals. The event is designed to solve local community problems, spark innovation, attract and educate new talent in accordance with the 2022 Solution Challenge.</p>
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
                        <p>Held in association with the 2022 Google Solution challenge {EVENT.name} is the student-run training and mentorship event by the GDSC Pakistan. We believe that remarkable developers, designers, and innovators can help us solve challenges to end poverty, ensure prosperity, and protect the planet. The diversity and talent of the participating developers will contribute greatly to the success of our event. We want to establish a tech ecosystem and provide a platform for students to present their ideas of the future.</p>
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
                <div id='Workshops'>
                    <h1>Sessions & Workshops</h1>
                </div>

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
                            <div>
                                <div className='WatchSession'>
                                    <a href="https://youtu.be/hza2jo_JmUw" target="_blank" rel="noreferrer">Watch Session</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='workshop'>
                        <div className='workshop_name ws'>
                            <p className='workshop_title'>UNDP: Sustainable Goals Session</p>
                            <p className='workshop_speaker'>Speaker: Sharjeel & Alina</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 25 Feb 2022</p>
                                <p className='workshop_time'>Time: 7:00 - 8:00 PM</p>
                            </div>
                            <div className='WatchSession'>
                                <a href="https://youtu.be/H1zTELXc7og" target="_blank" rel="noreferrer">Watch Session</a>
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
                            <div className='WatchSession'>
                                <a href="https://youtu.be/TpHFdI2XJXs" target="_blank" rel="noreferrer">Watch Session</a>
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
                            <div className='WatchSession'>
                                <a href="https://youtu.be/2-fIxq8tmYk" target="_blank" rel="noreferrer">Watch Session</a>
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
                                <p className='workshop_time'>Time: 6:00 - 7:00 PM</p>
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
                            <p className='workshop_speaker'>Speaker: Shahzeb Kazmi</p>
                        </div>
                        <div className='workshop_details ws'>
                            <div>
                                <p className='workshop_date'>Date: 10 March 2022</p>
                                <p className='workshop_time'>Time: 7:00 - 8:00 PM</p>
                            </div>
                            <div>
                                <Add2CalendarComponent />
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
                <div id='speakers'>
                    <h1>Speakers</h1>
                </div>
                <div className='solutionfest_speakers'>
                    <div className='speaker'>
                        <img className='speaker_img' src={HufsaMunawar} alt="" />
                        <p className='speaker_name'>
                            Hufsa Munawar&nbsp;
                            <a href="https://www.linkedin.com/in/hmunawar/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>Community Manager, Developer Relations at Google</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={SaadHamid} alt="" />
                        <p className='speaker_name'>
                            Saad Hamid&nbsp;
                            <a href="https://www.linkedin.com/in/saadhamid/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>App Growth Manager at Google</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={WajahatKarim} alt="" />
                        <p className='speaker_name'>
                            Wajahat Karim&nbsp;
                            <a href="https://www.linkedin.com/in/wajahatkarim" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>Google Developer Expert - Android</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={WaleedArshad} alt="" />
                        <p className='speaker_name'>
                            Waleed Arshad&nbsp;
                            <a href="https://www.linkedin.com/in/waleed006/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>Google Developer Expert - Flutter</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={EricBhatti} alt="" />
                        <p className='speaker_name'>
                            Eric Bhatti&nbsp;
                            <a href="https://www.linkedin.com/in/ericbhatti/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>VP Engineering at Sastaticket.pk | GDE Firebase</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={AimanSaeed} alt="" />
                        <p className='speaker_name'>
                            Aiman Saeed&nbsp;
                            <a href="https://www.linkedin.com/in/aimansaeed/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>Allianz | ESMT | OYW Ambassador | Google #IamRemarkable</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={AdilShehzad} alt="" />
                        <p className='speaker_name'>
                            Adil Shehzad&nbsp;
                            <a href="https://www.linkedin.com/in/adilshehzad7/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>DevOps Engineer @Strategic Systems International | GitHub Campus Expert</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={Aqsakausar} alt="" />
                        <p className='speaker_name'>
                            Aqsa Kausar&nbsp;
                            <a href="https://www.linkedin.com/in/aqsa-kausar/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>Tech Lead (ML) at Red Buffer, Google Developer Expert (ML)</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={HiraTariq} alt="" />
                        <p className='speaker_name'>
                            Hira Tariq&nbsp;
                            <a href="https://www.linkedin.com/in/hirat97/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>Building Communities @NICK | GDG Kolachi | Assembly F</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={MuhammadAsimKhaskheli} alt="" />
                        <p className='speaker_name'>
                            Asim Khaskheli&nbsp;
                            <a href="https://www.linkedin.com/in/asim-khaskheli/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>Associate Product Manager @OneScreen | Founder & President Hack Club NUST</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={MuhammadBinMasood} alt="" />
                        <p className='speaker_name'>
                            Muhammad Bin Masood&nbsp;
                            <a href="https://www.linkedin.com/in/muhammadbinmasood/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>Training and Development Lead @Airlift Technologies</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={ShahzebKazmi} alt="Shahzeb Kazmi" />
                        <p className='speaker_name'>
                            Shahzeb Kazmi&nbsp;
                            <a href="https://www.linkedin.com/in/shahzebkazmi/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>Product Designer | Design Community Advocate</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={OsamaRajput} alt="" />
                        <p className='speaker_name'>
                            Osama Rajput&nbsp;
                            <a href="https://www.linkedin.com/in/rajputosama/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>Artificial Intelligence Engineer @NayaPay</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={SakinaAbbas} alt="" />
                        <p className='speaker_name'>
                            Sakina Abbas&nbsp;
                            <a href="https://www.linkedin.com/in/sakina-abbas/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>ReacTree CEO & Co-Founder | Google Developer Expert Flutter</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={TalalAthar} alt="" />
                        <p className='speaker_name'>
                            Talal Athar&nbsp;
                            <a href="https://www.linkedin.com/in/talalathar/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>Senior Product Designer @Oraan & YouTuber</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={SharjeelYunus} alt="Sharjeel Yunus" />
                        <p className='speaker_name'>
                            Sharjeel Yunus&nbsp;
                            <a href="https://www.linkedin.com/in/sharjeel-yunus/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>GDSC IUB Lead @Google Developers</p>
                    </div>
                    <div className='speaker'>
                        <img className='speaker_img' src={AlinaSohaib} alt="Alina Shoaib" />
                        <p className='speaker_name'>
                            Alina Shoaib&nbsp;
                            <a href="https://www.linkedin.com/in/alina-s-b7913618b/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </p>
                        <p className='speaker_desc'>GDSC NUST Lead @Google Developers</p>
                    </div>
                </div>
            </div>
            <div className='hackathon_mentors'>
                <div id='Mentors'>
                    <h1>Mentors</h1>
                </div>
                <div className='solutionfest_mentors'>
                    <div className='mentor'>
                        <div className='mentor_img'>
                            <img className='mentor_image' src={HufsaMunawar} alt="Hufsa Munawar" />
                        </div>
                        <div className='mentor_detail'>
                            <h3 className='mentor_topic'>Ideas & Concepts</h3>
                            <hr />
                            <div className='mentor_name'>
                                <h4>Hufsa Munawar</h4>&nbsp;
                                <a href="https://www.linkedin.com/in/hmunawar/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <p className='mentor_desc'>
                                Community Manager, Developer Relations at Google
                            </p>
                        </div>
                    </div>
                    <div className='mentor'>
                        <div className='mentor_img'>
                            <img className='mentor_image' src={KashifTaj} alt="Kashif Taj" />
                        </div>
                        <div className='mentor_detail'>
                            <h3 className='mentor_topic'>Technology</h3>
                            <hr />
                            <div className='mentor_name'>
                                <h4>Kashif Taj</h4>&nbsp;
                                <a href="https://www.linkedin.com/in/kaxhiftaj/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <p className='mentor_desc'>
                                CEO @Techease
                            </p>
                        </div>
                    </div>
                    <div className='mentor'>
                        <div className='mentor_img'>
                            <img className='mentor_image' src={MuhammadHamza} alt="Muhammad Hamza" />
                        </div>
                        <div className='mentor_detail'>
                            <h3 className='mentor_topic'>Technology</h3>
                            <hr />
                            <div className='mentor_name'>
                                <h4>Muhammad Hamza</h4>&nbsp;
                                <a href="https://www.linkedin.com/in/mhmzdev/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <p className='mentor_desc'>
                                Associate Software Engineer @Sastaticket.pk
                            </p>
                        </div>
                    </div>
                    <div className='mentor'>
                        <div className='mentor_img'>
                            <img className='mentor_image' src={EmadEhsan} alt="Emad Ehsan" />
                        </div>
                        <div className='mentor_detail'>
                            <h3 className='mentor_topic'>Technology</h3>
                            <hr />
                            <div className='mentor_name'>
                                <h4>Emad Ehsan</h4>&nbsp;
                                <a href="https://www.linkedin.com/in/emadehsan/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <p className='mentor_desc'>
                                Google Developer Expert | Co-Founder Traverous
                            </p>
                        </div>
                    </div>
                    <div className='mentor'>
                        <div className='mentor_img'>
                            <img className='mentor_image' src={SabaKalsoom} alt="Saba Kalsoom" />
                        </div>
                        <div className='mentor_detail'>
                            <h3 className='mentor_topic'>Team Building</h3>
                            <hr />
                            <div className='mentor_name'>
                                <h4>Saba Kalsoom</h4>&nbsp;
                                <a href="https://www.linkedin.com/in/sabakalsoom/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <p className='mentor_desc'>
                                Community and Partnerships Lead @COLABS
                            </p>
                        </div>
                    </div>
                    <div className='mentor'>
                        <div className='mentor_img'>
                            <img className='mentor_image' src={NahyanFarooq} alt="Nahyan Farooq" />
                        </div>
                        <div className='mentor_detail'>
                            <h3 className='mentor_topic'>Idea Discussion</h3>
                            <hr />
                            <div className='mentor_name'>
                                <h4>Nahyan Farooq</h4>&nbsp;
                                <a href="https://www.linkedin.com/in/nehyan26/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <p className='mentor_desc'>
                                Chief Design Officer @QriosityNet | MIT Innovative Leader | Edupreneur
                            </p>
                        </div>
                    </div>
                    <div className='mentor'>
                        <div className='mentor_img'>
                            <img className='mentor_image' src={AmmarRaja} alt="Ammar Raja" />
                        </div>
                        <div className='mentor_detail'>
                            <h3 className='mentor_topic'>Idea Discussion</h3>
                            <hr />
                            <div className='mentor_name'>
                                <h4>Ammar Raja</h4>&nbsp;
                                <a href="https://www.linkedin.com/in/ammarraja/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <p className='mentor_desc'>
                                Decision Scientist | Academic | Analytics | Data Governance | AI | Data Strategist
                            </p>
                        </div>
                    </div>
                    <div className='mentor'>
                        <div className='mentor_img'>
                            <img className='mentor_image' src={HuzaifaHabib} alt="Huzaifa Habib" />
                        </div>
                        <div className='mentor_detail'>
                            <h3 className='mentor_topic'>Idea Discussion</h3>
                            <hr />
                            <div className='mentor_name'>
                                <h4>Huzaifa Habib</h4>&nbsp;
                                <a href="https://www.linkedin.com/in/huzaifa-habib/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <p className='mentor_desc'>
                                Community Manager Associate @Turing.com
                            </p>
                        </div>
                    </div>
                    <div className='mentor'>
                        <div className='mentor_img'>
                            <img className='mentor_image' src={OmarAbedin} alt="Omar Abedin" />
                        </div>
                        <div className='mentor_detail'>
                            <h3 className='mentor_topic pp'>Pitching & Presentation</h3>
                            <hr />
                            <div className='mentor_name'>
                                <h4>Omar Abedin</h4>&nbsp;
                                <a href="https://www.linkedin.com/in/omarabedin/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <p className='mentor_desc'>
                                Project Director @NIC Karachi | Founder @PakTekHub | VC @GreenRisingFund
                            </p>
                        </div>
                    </div>
                    <div className='mentor'>
                        <div className='mentor_img'>
                            <img className='mentor_image' src={CyniaEjaz} alt="Cynia Ejaz" />
                        </div>
                        <div className='mentor_detail'>
                            <h3 className='mentor_topic pp'>Pitching & Presentation</h3>
                            <hr />
                            <div className='mentor_name'>
                                <h4>Cynia Ejaz</h4>&nbsp;
                                <a href="https://www.linkedin.com/in/cyniaejaz/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <p className='mentor_desc'>
                                Entrepreneur | Community Builder | Startup Growth
                            </p>
                        </div>
                    </div>
                </div>
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
