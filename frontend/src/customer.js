import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./customer.css";

const WhyCustomer = () => {
  const testimonials = [
    {
      quote: "Shigoto has revolutionized our recruitment process. The platform is intuitive, making the selection smooth and efficient with advanced features like customized searches and data analysis. Their responsive support team is a great help. Shigoto is the best investment for our HR department!",
      name: "Rina Andriana",
      company: "TikTok",
      logo: "/tiktok.png",
    },
    {
      quote: "The support we received from Shigoto was exceptional. They truly understand our needs and have provided us with a tool that fits perfectly. We’ve seen a significant increase in efficiency.",
      name: "John Doe",
      company: "Tokopedia",
      logo: "/tokopedia.png",
    },
    {
      quote: "Shigoto’s platform is highly user-friendly and customizable. The features they offer have allowed us to streamline our hiring process and find the best candidates.",
      name: "Jane Smith",
      company: "Alibaba",
      logo: "/alibaba.png",
    },
    {
      quote: "I appreciate the level of detail and the ability to customize our recruitment process. Shigoto has helped us cut down on time-to-hire significantly.",
      name: "Chris Johnson",
      company: "Dropbox",
      logo: "/dropbox.png",
    },
    {
      quote: "Shigoto is an excellent resource for our HR department. They have a team of experts who are always on the lookout for new talent. The platform is user-friendly and easy to navigate.",
      name: "Sarah Lee",
      company: "Amazon",
      logo: "/amazon.png",
    },
    {
      quote: "Shigoto has been a game-changer for our HR department. They have a team of experts who are always ready to help. The platform is user-friendly and well-organized.",
      name: "David Kim",
      company: "Facebook",
      logo: "/facebook.png",
    },
    {
      quote: "Shigoto is an excellent resource for our HR department. They have a team of experts who are always on the lookout for new talent. The platform is user-friendly and easy to navigate.",
      name: "Sarah Lee",
      company: "Instagram",
      logo: "/insta.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-24 container mx-auto px-6">
      <h2 className="lg:text-5xl text-2xl font-semibold">Why Customers Trust Us</h2>
      <p style={{color: '#000'}} className="text-2xl mt-4 font-light">What our customers are saying</p>
      <br/>
      <div className="testimonial-container flex items-center justify-center mt-15 pb-12 gap-x-2 lg:w-1/2 mx-auto">
        <FaChevronLeft size={30} onClick={handlePrev} className="cursor-pointer" />
        <div className="testimonial-content text-2xl leading-10 mx-4">
          <p>{testimonials[currentIndex].quote}</p>
          <br/>
          <p style={{color: '#000'}} className="text-3xl font-semibold">{testimonials[currentIndex].name}</p>
          <p style={{color: '#000'}} className="text-xl pt-4">{testimonials[currentIndex].company}</p>
        </div>
        <FaChevronRight size={30} onClick={handleNext} className="cursor-pointer" />
      </div>
      <div className="logos flex items-center lg:gap-16 gap-3 overflow-hidden my-24">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="transition duration-300 ease-in-out hover:scale-105"
          >
            <img
              src={testimonial.logo}
              alt={testimonial.company}
              className={`logo-img w-40 h-14 object-contain ${index === currentIndex ? "active" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyCustomer;
