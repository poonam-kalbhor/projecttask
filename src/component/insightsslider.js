import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/AdobeStock_478981305-scaled.jpeg"
import img2 from "../images/AdobeStock_485808751-scaled.jpg"
import img3 from "../images/AdobeStock_704796997-for-SMSF-trustee-article-scaled.jpeg"
import img4 from "../images/shutterstock_2499685319-scaled.jpg"
import img5 from "../images/Thumb-2.jpg"

const articles = [
  {
    date: "TUE APR 08 2025",
    title: "Whistleblower Protections – A Policy Often Missed",
    image: img1,
  },
  {
    date: "FRI APR 04 2025",
    title: "Body Corporate Battles: Finding the Peace",
    image: img2,
  },
  {
    date: "THU MAY 08 2025",
    title: "Navigating estate administration",
    image: img3
  },
  {
    date: "WED MAR 15 2025",
    title: "Tax Deadlines to Remember in 2025",
    image: img4
  },
  {
    date: "MON FEB 20 2025",
    title: "New Financial Year Planning Tips",
    image: img5
  },
];

const ArticleSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
     centerMode: true,
    centerPadding: "10%",
    arrows: false, 
    responsive: [
     
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (

    <>
   <div className="  text-[#001B61]">
  <div className=" flex flex-col lg:flex-row items-start gap-10">
    
    <div className="lg:w-[30%] w-full  pl-[45px] lg:pl-[80px] xl:pl-[45px] ">
      <h2 className=" font-euclid text-[32px] md:text-[42px] font-bold text-[#0B0F66] leading-tight">
        Featured Insights
      </h2>
    </div>

   
    <div className=" lg:w-[70%] w-full ">
      <Slider ref={sliderRef} {...settings}>
        {articles.map((article, index) => (
          <div key={index} className="sm:px-3 px-2 w-[100%]">
            <div>
              <div className=" h-[190px] sm:h-[240px] w-[100%] overflow-hidden rounded-[2px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover mb-4 transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-blue-700 font-bold text-sm mb-2 mt-2">
                {article.date}
              </p>
              <h3 className="text-[18px] font-semibold leading-tight">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </Slider>

      
<div className="flex justify-start gap-6 mt-8 pl-[45px] md:pl-[0px]">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="w-[90px] h-[60px] border-1 border-blue-500 rounded-[30px] flex items-center justify-center"
        >
          <span className="text-blue-500 text-2xl"> <i className="bi bi-arrow-left-short text-[38px] flex items-center justify-center font-semibold"></i></span>
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="w-[90px] h-[60px] border-1 border-blue-500 rounded-[30px] flex items-center justify-center"
        >
          <span className="text-blue-500 text-2xl"><i className="bi bi-arrow-right-short text-[38px] flex items-center justify-center font-semibold"></i></span>
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default ArticleSlider;
