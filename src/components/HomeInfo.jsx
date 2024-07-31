import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'
const InfoBox = ({ text, link, btnText}) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
);

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Welcome to <span className='font-semibold'>NeuroPlay Cozie</span> 🐱‍🏍
            <br/>
            Your ultimate companion for boosting cognitive skills and tracking mental health. Dive into a world of engaging games and insightful progress tracking.
        </h1>
    ),
    2: (
        <InfoBox 
            text="Engage with a variety of cognitive games designed to enhance your memory, attention, and problem-solving skills. Challenge yourself and track your improvement over time."
            link="/about"
            btnText="Learn more"
        />
        ),
    3: (
        <InfoBox 
            text="Dive into a variety of interactive games that not only entertain but also provide valuable insights into your cognitive performance. Stay motivated with personalized feedback and tips."
            link="/blog"
            btnText="Explore Games"
        />
    ),
    4: (
        <InfoBox 
            text="Use our comprehensive tracking tools to monitor your mental health journey. Gain valuable insights into your mood, stress levels, and overall well-being."
            link="/contact"
            btnText="Lets talk"
        />
    ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
