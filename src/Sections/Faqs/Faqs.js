import React from 'react';
import FAQS from 'react-faqs-component';
import "./Faqs.css";

const data = {
    faqs: [
        { question: "What is Hackathon?", answer: "Hackathons are community events, where you get to interact with students from all around the world as well as forming teams to create future tech." },

        { question: "Who can participate?", answer: "This event is targeted at university or college students, but any student is welcome to participate!" },

        { question: "How does the application process work?", answer: "To apply to participate in solutionfest, you first need to go over to Apply form and register. Then go to devpost link to register your team and submissions. We also recommend that you join our discord server to stay on top of all the latest announcements and fun mini-events." },

        { question: "I hava no idea what coding is?", answer: "That's why you must attend our event, we will guide you through everything with awesome workshops, tech talks and many more." },

        { question: "What are the United Nations 17 Sustainable Development Goals?", answer: "Created by the United Nations in 2015 to be achieved by 2030, the 17 Sustainable Development Goals (SDGs) agreed upon by all 193 United Nations Member States aim to end poverty, ensure prosperity, and protect the planet. Check out: https://www.un.org/sustainabledevelopment/sustainable-development-goals/" },

        { question: "Do I need to pay any money?", answer: "Absolutely not! our event is free and open for all, if incase anyone asks for moeny you can dm any of our moderator." },

        { question: "I don't have a team to participate? ", answer: "You don't need one, prior to our event in discord you will meet many hackers exactly like you and join to form a team, if not you can participate alone." },

        { question: "What size can a team be?", answer: "2 to 4 people - we suggest having a minimum of 3 people in a team. The Solutionfest team will organize matchmaking at the start of the hackathon, so no need to worry if you don't have a team before the event." },

        { question: "I have more doubts?", answer: "Reach us directly at hello@solutionfest.tech we would happy to help you." },

        { question: "What are the conduct of guidelines?", answer: "We strongly follow HackClub code of conduct, Our team members will enforce this codde throughout the event. To see the code of conduct please visit the website footer." },
    ],
    backgroundColor: '#f4f5f9',
    titleColor: "#000",
    answerColor: "#000",
    iconColor: "#000",
}

const Faqs = () => {
    return (
        <div id="Faqs" className='faqs'>
            <FAQS data={data} />
        </div>
    )
}

export default Faqs;
