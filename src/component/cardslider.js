import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import AdvisoryImg from "../images/Advice-4.svg";
import TaxImg from "../images/iconTicket.svg";
import AuditImg from "../images/iconCash.svg";
import ForensicImg from "../images/iconSearch.svg";
import OutsourcedSupportImg from "../images/iconDirection.svg";


function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 500 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isSmallScreen;
}

function Cardslider() {
  const isSmallScreen = useIsSmallScreen();

  const cardData = [
    {
      title: 'Advisory',
      description: 'We offer a comprehensive range of advisory services.',
      image: AdvisoryImg,
      bgColor: 'bg-red-100'
    },
    {
      title: 'Tax',
      description: 'Our taxation team provides proactive guidance, strategy and insight.',
      image: TaxImg,
      bgColor: 'bg-[#f2e8d6]'
    },
    {
      title: 'Audit',
      description: 'We help you navigate complex legislative and regulatory environments.',
      image: AuditImg,
      bgColor: 'bg-[#ecf6fe]'
    },
    {
      title: 'Forensic',
      description: 'We act as independent experts and deliver objective, well-reasoned advice.',
      image: ForensicImg,
      bgColor: 'bg-[#caebe3]'
    },
    {
      title: 'Outsourced support',
      description: 'Outsourced accounting support can deliver efficiencies for your business.',
      image: OutsourcedSupportImg,
      bgColor: 'bg-[#eaeff3]'
    }
  ];

  const Card = ({ title, description, image, bgColor }) => {
    const truncatedDescription =
      isSmallScreen && description.length > 20
        ? description.slice(0, 20) + '...'
        : description;

    return (
      <div className="bg-white rounded-[2px] p-[44px] transition-transform transform hover:scale-110 cursor-pointer w-full h-[340px] lg:h-[300px]">
        <div className="flex justify-start mb-4">
          <div className={`relative w-[45px] h-[45px] rounded-full flex items-center justify-center ${bgColor}`}>
            <img
              src={image}
              alt={title}
              className="w-[50px] h-[50px] absolute -bottom-[16px] -left-[10px]"
            />
          </div>
        </div>
        <div className="leading-7">
          <h3 className="text-[25px] font-extrabold text-[#182e78] my-[40px]">{title}</h3>
          <p className="text-[#152559] mt-[14px]">{truncatedDescription}</p>
        </div>
      </div>
    );
  };

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "10%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10%"
        }
      }
    ]
  };

  return (
    <div className="bg-blue-50 md:px-[48px] 3xl:px-[10vw] pb-[90px] md:pb-[130px] pt-[120px] 3xl:pt-[130px] lg:px-12">
     
      <div className="hidden xl:block">
        <div className="flex justify-center gap-[20px] md:gap-[26px] lg:gap-[38px] mb-[20px] md:mb-[26px] lg:mb-[40px]">
          {cardData.slice(0, 3).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div className="flex justify-center gap-[20px] md:gap-[26px] lg:gap-[38px] mx-[140px] xl:mx-[180px] 2xl:mx-[220px] 3xl:mx-[250px]">
          {cardData.slice(3).map((card, index) => (
            <Card key={index + 3} {...card} />
          ))}
        </div>
      </div>

      
      <div className="hidden md:block xl:hidden">
        <div className="grid grid-cols-2 gap-6 justify-items-center mb-6">
          {cardData.slice(0, 4).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div className="flex justify-center mx-[220px] xl:mx-[250px] 2xl:mx-[220px]">
          <Card {...cardData[4]} />
        </div>
      </div>

      
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {cardData.map((card, index) => (
            <div key={index} className="px-[15px] xs:px-[12px]">
              <Card {...card} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Cardslider;
