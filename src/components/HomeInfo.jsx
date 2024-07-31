import React from 'react';
import { Link } from 'react-router-dom';
const InfoBox = ({ text, link, btnText}) => (
    <div className="info-box">
        {text}
        <Link to={link}>
            {btnText}
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
        <InfoBox />
        ),
    3: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Track Your Mental Health Progress
            <br/>
            Use our comprehensive tracking tools to monitor your mental health journey. Gain valuable insights into your mood, stress levels, and overall well-being.
        </h1>
    ),
    4: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Enjoy Interactive Games and Insights
            <br/>
            Dive into a variety of interactive games that not only entertain but also provide valuable insights into your cognitive performance. Stay motivated with personalized feedback and tips.
        </h1>
    ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
