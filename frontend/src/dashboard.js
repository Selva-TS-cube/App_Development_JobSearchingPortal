import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Navbar from './navbar.js';
import Footer from './footer.js';
import Customer from './customer.js';
import Feature from './featured.js';
import Hero from './hero.js';


import './dashboard.css';
import tcsLogo from './tcs-logo.png';
import iciciLogo from './icici-logo.png';
import wellsFargoLogo from './wellsfargo-logo.png';
import datamaticsLogo from './datamatics-logo.png';
import amazonLogo from './amazon-logo.png';
import actelent from './actalent-logo.png';
import airtelLogo from './airtel-logo.png';
import capegeminiLogo from './capegemini-logo.png';
import profilePic1 from './profile-pic1.png';
import profilePic2 from './profile-pic2.png';
import profilePic3 from './profile-pic3.png';

const Dashboard = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [followedCompanies, setFollowedCompanies] = useState({});

  const handleExploreClick = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handlecomRedirect = () => {
    navigate('/companies');
  };

  const handleFollowClick = (company) => {
    setFollowedCompanies((prev) => ({
      ...prev,
      [company]: !prev[company]
    }));
  };

  

  const successStories = [
    { profilePic: profilePic1, name: 'Wade Wilson', jobTitle: 'Software Engineer at TCS', story: 'Landing my dream job at TCS was a game-changer for my career. Thank you Hirehorizon.' },
    { profilePic: profilePic2, name: 'Sarah Smith', jobTitle: 'Data Analyst at ICICI Bank', story: 'HireHorizon provided me with the platform to grow and excel in my career.' },
    { profilePic: profilePic3, name: 'John Vooslo', jobTitle: 'Product Manager at Amazon', story: 'HireHorizon has been a fantastic place to create my career.' }
  ];

  const carouselSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true
        }
      }
    ]
  };

  return (
    <div className="dashboard">
      <Navbar />
      {/* <main className="main">
        <div className='hi2'>
          <div className='hi3'>
            <h1 className='jk'>Welcome to our Shigoto!</h1>
            <h2>"Find your dream job now"</h2>
            <p className='jk1'>5 lakh+ jobs for you to explore</p>
          </div>
          
          <div className="promotion">
            <h3>Think career, Think Shigoto</h3>
            <p className='jk1'>A comprehensive collection of tools, services, and resources designed to accelerate your professional growth and success.</p>
          </div>
        </div>
      </main> */}
      <Hero />
            {/* <button className="explore-button" onClick={handleExploreClick}>Start exploring</button> */}
      <Feature />
      <Customer />
      <Footer />
    </div>
  );
}

export default Dashboard;
