import React from 'react';
import FAQS from 'react-faqs-component';
import "./Faqs.css";

const data = {
    faqs: [
        { question: "What is Hackathon?", answer: "Hackathons are community events, where you get to interact with students from all around the world as well as forming teams to create future tech." },

        { question: "I hava no idea what coding is?", answer: "That's why you must attend our event, we will guide you through everything with awesome workshops, tech talks and many more." },

        { question: "Do I need to pay any money?", answer: "Absolutely not! our event is free and open for all, if incase anyone asks for moeny you can dm any of our moderator." },

        { question: "I don't have a team to participate? ", answer: "You don't need one, prior to our event in discord you will meet many hackers exactly like you and join to form a team, if not you can participate alone." },

        { question: "How to participate?", answer: "All you need is to fill our form above and join Discord, we will guide you through everything there." },

        { question: "I have more doubts?", answer: "Reach us directly at (email) we would happy to help you." },

        { question: "Can I volunteer?", answer: "Yes we are looking for volunteers, fill the form (in footer section) we would be glad to have you." },

        { question: "Wat are the conduct of guidilines?", answer: "We strongly follow HackClub code of conduct, Our team members will enforce this codde throughout the event. To see the code of conduct please visit the website footer." },
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
