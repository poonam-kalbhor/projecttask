
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect, useState } from 'react';

import Logoicon from '../src/images/brand_icon_black.svg';
import Leftimg from '../src/images/Pilot-Nexia-Int.png';
import Team from '../src/images/Team.png';
import Cardslider from './component/cardslider';
import ArticleSlider from './component/insightsslider';

import AdvisoryImg from '../src/images/Advice-4.svg';
import TaxImg from '../src/images/iconTicket.svg';
import AuditImg from '../src/images/iconCash.svg';
import ForensicImg from '../src/images/iconSearch.svg';
import OutsourcedSupportImg from '../src/images/iconDirection.svg';
import Search from '../src/images/search-icon.svg'
import facebook from "../src/images/social_facebook.svg"
import LinkedIn from "../src/images/social_linkedin.svg"
import Insta from "../src/images/icons8-instagram.svg"

function App() {
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (serviceMenuOpen && hoveredIndex === null) {
      setHoveredIndex(0);
    }
  }, [serviceMenuOpen]);

  const services = [
    {
      title: "Advisory",
      description: [
        "Advisory Board",
        "Business And Intangible Asset Valuations",
        "Business And Investment Structuring",
        "Business Exit Services",
        "Business Reviews",

      ],
      image: AdvisoryImg,
    },
    {
      title: "Tax",
      description: [
        "Capital Gains Tax",
        "Employee Share Schemes",
        "Fringe Benefits Tax",
        "Goods And Services Tax",
        "International And Cross Border Services",
        "Tax Disputes "
      ],
      image: TaxImg,
    },
    {
      title: "Audit",
      description: [
        "Financial Statement Audits",
        "Internal Control Reviews",
        "Compliance Audits",
        "Due Diligence Services",
        "Risk Assessments",
        "Fraud Prevention Analysis"
      ],
      image: AuditImg,
    },
    {
      title: "Forensic",
      description: [
        "Fraud Detection",
        "Litigation Support",
        "Asset Tracing",
        "Expert Witness Testimony",
        "Forensic Data Analysis",
        "Dispute Resolution"
      ],
      image: ForensicImg,
    },
    {
      title: "Outsourced Support",
      description: [
        "Bookkeeping Services",
        "Payroll Management",
        "Accounts Payable & Receivable",
        "Virtual CFO Services",
        "BAS & IAS Preparation",
        "Financial Reporting"
      ],
      image: OutsourcedSupportImg,
    },
  ];


  const renderHoverMenu = (items) => {
    const hasRightContent = items.some(
      (item) => item.icon || item.subtitle || item.description
    );

    return (
      <div
        className="absolute -left-14 top-[40px] z-50"
        onMouseEnter={() => setHoveredMenu(hoveredMenu)}
        onMouseLeave={() => {
          setHoveredMenu(null);
          setHoveredItemIndex(null);
        }}
      >

        <div className="relative">
          <div className="absolute left-[60px] -top-5 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[25px] border-transparent border-b-[#fcfcfc] z-50 shadow-[30px_rgba(0,0,0,0.1)]"></div>
        </div>


        <div className={`rounded-[35px] overflow-hidden bg-[#fcfcfc] shadow-[0_0_30px_rgba(0,0,0,0.1)] ${hasRightContent ? 'w-[750px]' : 'w-[380px]'}`}>
          <div className="flex w-full h-full">

            <div className="w-full flex flex-col gap-2 p-[40px] bg-[#fcfcfc]">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 transform ${hoveredItemIndex === index
                    ? 'bg-[#e0f0ff] scale-95 translate-x-2'
                    : ''
                    }`}
                  onMouseEnter={() => setHoveredItemIndex(index)}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-semibold text-[18px] transition-colors ${hoveredItemIndex === index
                        ? 'text-[#007aff]'
                        : 'text-[#007aff]'
                        }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  {(item.icon || item.subtitle || item.description) && (
                    <i
                      className={`bi bi-arrow-right text-[20px] transition-opacity duration-200 ${hoveredItemIndex === index
                        ? 'opacity-100 text-[#007aff]'
                        : 'opacity-0'
                        }`}
                    ></i>
                  )}
                </div>
              ))}
            </div>

            {hasRightContent && (
              <div className="w-1/2 bg-[#e0f0ff] px-[40px] py-[30px] 2xl:py-[60px] overflow-y-auto">
                {hoveredItemIndex !== null && items[hoveredItemIndex] && (
                  <div className="text-[#4a4c65] leading-7 font-medium space-y-4">

                    {(items[hoveredItemIndex].icon || items[hoveredItemIndex].subtitle) && (
                      <div className="flex items-center gap-4 mb-2">
                        {items[hoveredItemIndex].icon && (
                          <div className="text-3xl text-[#007aff]">
                            {items[hoveredItemIndex].icon}
                          </div>
                        )}
                        {items[hoveredItemIndex].subtitle && (
                          <div className="text-xl font-semibold text-[#007aff]">
                            {items[hoveredItemIndex].subtitle}
                          </div>
                        )}
                      </div>
                    )}


                    {items[hoveredItemIndex].description && (
                      <p className="text-sm">{items[hoveredItemIndex].description}</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };


  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  const industries = [
    { title: "Legal Practices" },
    { title: "Medical Practitioners" },
    { title: "Not-For-Profit" },
    { title: "Professional Services " },
    { title: "Property And Development" },
    { title: "Retail And Franchises" },
    { title: "Technology" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [advisoryOpen, setAdvisoryOpen] = useState(false);
  const [taxOpen, setTaxopen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)
  const [forensicOpen, setForensicOpen] = useState(false)
  const [auditoOpen, setAuditoOpen] = useState(false)
  const [industryOpen, setSIndustryOpen] = useState(false)
  const [insightsopen, setInsightsopen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [peopleopen, setPeopleopen] = useState(false)
  const [careersopen, setCareers] = useState(false)

  const careers = [
    { title: "What's on Offer", },

  ];
  return (
    <>
      <div
        className='customnav fixed z-20 top-0 right-0 left-0 py-[26px] md:py-[26px] lg:py-[20px] xl:py-[2.292vw] 2xl:py-[2vw] px-[48px] lg:px-[48px] xl:px-[48px] 3xl:px-[10vw] bg-[#fff] flex justify-between items-center'
        onMouseLeave={() => {
          setServiceMenuOpen(false);
          setHoveredIndex(null);
        }}
      >
        <div className='flex items-center gap-[60px] xl:gap-[80px]'>
          <div className='flex items-center'>
            <img src={Logoicon} alt="logo icon" className='w-[80px] lg:w-[80px] xl:w-[90px] 2xl:w-[5.208vw] h-[34px] lg:h-[52px] xl:h-[36px] 2xl:h-[2.604vw]' />
          </div>

          <div className='hidden xl:flex gap-[60px] relative'>
            <div
              className='font-euclid text-[14px] 2xl:text-[0.973vw] font-semibold text-[#0b0f66] cursor-pointer hover:text-[#9093b5] relative'
              onMouseEnter={() => setServiceMenuOpen(true)}
            >
              Services

              {serviceMenuOpen && (
                <div
                  className="absolute -left-14 top-[50px] z-50"
                  onMouseEnter={() => {
                    setServiceMenuOpen(true);
                    setHoveredIndex(0);
                  }}
                  onMouseLeave={() => {
                    setServiceMenuOpen(false);
                    setHoveredIndex(null);
                  }}
                >

                  <div className="relative">
                    <div className="absolute left-[60px] -top-5 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[25px] border-transparent border-b-[#fcfcfc] z-50 shadow-[30px_rgba(0,0,0,0.1)]"></div>
                  </div>


                  <div className="w-[750px] rounded-[35px] overflow-hidden bg-[#fcfcfc] shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                    <div className="flex w-full h-full">

                      <div className="w-1/2 flex flex-col gap-2 p-[40px] bg-[#fcfcfc]">
                        {services.map((item, index) => (
                          <div
                            key={index}
                            className={`flex justify-between items-center px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 transform ${hoveredIndex === index
                              ? 'bg-[#e0f0ff] scale-95 translate-x-2'
                              : ''
                              }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                          >
                            <div className="flex items-center gap-3">
                              <img src={item.image} alt={item.title} className="w-10 h-10" />
                              <span
                                className={`font-semibold text-[18px] transition-colors ${hoveredIndex === index
                                  ? 'text-[#007aff]'
                                  : 'text-[#007aff]'
                                  }`}
                              >
                                {item.title}
                              </span>
                            </div>
                            <i
                              className={`bi bi-arrow-right text-[20px] transition-opacity duration-200 ${hoveredIndex === index
                                ? 'opacity-100 text-[#007aff]'
                                : 'opacity-0'
                                }`}
                            ></i>
                          </div>
                        ))}
                      </div>


                      <div className="w-1/2 bg-[#e0f0ff] px-[60px] py-[30px] 2xl:py-[60px] overflow-y-auto">
                        {hoveredIndex !== null && (
                          <div className="text-[#4a4c65]  leading-9 font-medium">
                            <ul className="list-none space-y-7 text-[35px]">
                              {services[hoveredIndex].description.map((line, i) => (
                                <li
                                  key={i}
                                  className="border-b-2 border-transparent hover:border-[#72b6fe] pb-1 cursor-pointer text-sm py-1 transition-all duration-200"
                                >
                                  {line}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}




            </div>

            {["Industries", "About Us", "Our People", "Insights", "Careers"].map((item, i) => {
              const showMenu = hoveredMenu === item && (item === "Industries" || item === "Careers");
              return (
                <div
                  key={i}
                  className="font-euclid text-[14px] 2xl:text-[0.973vw] font-semibold text-[#0b0f66] cursor-pointer hover:text-[#9093b5] relative"
                  onMouseEnter={() => {
                    if (item === "Industries" || item === "Careers") {
                      setHoveredMenu(item);
                    } else {
                      setHoveredMenu(null);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item === "Industries" || item === "Careers") {
                      setHoveredMenu(null);
                    }
                  }}
                >
                  {item}

                  {showMenu && renderHoverMenu(item === "Industries" ? industries : careers)}
                </div>
              );
            })}

          </div>
        </div>

        <div className='flex items-center justify-between md:gap-[40px] gap-[30px]  '>
          <div className='hidden xl:inline-block font-euclid text-[16px] 2xl:text-[0.973vw] font-semibold text-[#353131] cursor-pointer hover:text-[#5c5a5a] pr-[20px]'>Client Portal</div>

          <img onClick={() => setIsOpen(!isOpen)} src={Search} className="xl:w-7 2xl:w-8 xl:h-7 2xl:h-8 h-6 w-6" />
          {isOpen && (
            <>

              <div
                className="fixed top-24 left-0 right-0 bottom-0 bg-black bg-opacity-50 "
                onClick={() => setIsOpen(false)}
              />


              <div className="fixed top-16 xl:top-24 left-0 right-0 w-full bg-[#0071dc] py-6 px-4 z-50 lg:mt-0 mt-[10px]">
                <div className="max-w-4xl mx-auto relative">

                  <i className="bi bi-search absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />


                  <input
                    type="text"

                    className="w-full pl-12 pr-6 py-2 rounded-full text-gray-800 text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-white"
                    autoFocus
                  />
                </div>
              </div>

            </>
          )}


          <button className="hidden xl:inline-block cursor-pointer text-[18px] py-[8px] px-[26px] rounded-[30px] bg-[#007aff] font-semibold text-[#fff] justify-center items-center">Contact</button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative w-10 h-10 p-2 text-[#0B0F66] xl:hidden"
          >

            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-[200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${mobileMenuOpen ? "opacity-0 scale-90" : "opacity-100 scale-105"
                }`}
            >
              <i className="bi bi-list text-[25px] md:text-[30px] text-[#007aff]"></i>
            </span>


            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-[200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${mobileMenuOpen ? "opacity-100 scale-105" : "opacity-0 scale-90"
                }`}
            >
              <i className="bi bi-x-lg md:text-[25px] text-[20px] text-[#243241] font-extrabold"></i>
            </span>
          </button>






          {mobileMenuOpen && (
            <div className="fixed left-0 right-0 bottom-0 md:top-[74px] sm:top-[70px] top-[80px] z-40 flex ">

              <div
                className={`  w-[99.7%] xs:w-[80%] sm:w-[50%] md:w-[40%] bg-white h-full shadow-lg overflow-y-auto transform transition-transform duration-[5000ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
              >


                <div className="sticky top-0 z-20 bg-[#007aff] px-[50px] md:px-[4vw] py-[30px] md:py-[2vw] text-white">
                  <div className="absolute pointer-events-none w-[82.5%] min-w-[82.5%] h-[150%] min-h-[150%] bg-white opacity-10 left-0 top-[-25%] rounded-[100%_0_0_100%] scale-x-[-1]"></div>
                  <div className="relative flex items-center justify-between z-10">
                    <div className="font-bold font-euclid text-[14px]">Client Portal</div>
                    <div className="font-euclid bg-white text-[#007aff] font-semibold md:py-[16px] py-[12px] rounded-[35px] items-center text-[14px] inline-flex px-[20px] md:px-[25px]">
                      Contact
                    </div>
                  </div>
                </div>


                <div
                  className={` ${servicesOpen
                    ? "border-b-[0.15vw] border-[#007aff]"
                    : ""
                    }`}
                  onClick={() => setServicesOpen(!servicesOpen)}
                >

                  <div>
                    <div
                      className="flex justify-between items-center  py-[30px]  sm:py-[23px]  md:py-[2.4vw] border-b-[0.15vw] border-[#007aff] cursor-pointer px-[75px] sm:px-[60px] md:px-[4vw]"
                      onClick={(e) => { e.stopPropagation();setServicesOpen(!servicesOpen)}}
                    >
                      <span className="text-[22px]  font-euclid  font-bold text-[#0B0F66] pt-1">Services</span>
                      <i className={`bi ${servicesOpen ? "bi-chevron-up" : "bi-chevron-down"} text-[#007aff] text-[22px] flex items-center pt-[20px] font-extrabold`}></i>
                    </div>
                    {servicesOpen && (
                      <div className=" bg-[#fff]">

                        <div>
                          <div
                            className={`flex justify-between items-center cursor-pointer text-[#007aff] font-bold md:my-[3.7vw] my-[35px] md:mx-[3vw] mx-[40px] md:px-[1.8vw] px-[20px]  py-[20px] md:py-[2.9vw] rounded-[1.5rem] transition-transform duration-300 ${advisoryOpen
                              ? "bg-[#e0f0ff] border-[0.1vw] border-[#a7b3c0]"
                              : "hover:bg-[#e0f0ff]  hover:my-[5vw] hover:text-[#3a3d6d]"
                              }`}
                            onClick={(e) => { e.stopPropagation();setAdvisoryOpen(!advisoryOpen)}}
                          >
                            <div className="flex items-center gap-2">
                              <img src={AdvisoryImg} className="w-9 h-9 mr-8" />
                              <span className="font-euclid text-[17px]">Advisory</span>
                            </div>
                            <i
                              className={`bi ${advisoryOpen ? "bi-chevron-up" : "bi-chevron-down"
                                } text-[#007aff] text-[22px] flex items-center pr-[20px] font-extrabold`}
                            ></i>
                          </div>

                          {advisoryOpen && (
                            <div className="bg-[#e0f0ff] border-t border-[#c7d4d5]">
                              <ul className="md:pl-[4.2vw] pl-[35px] md:py-[3vw] py-[32px] text-sm text-[#405b7b] space-y-7">
                                <li className="cursor-pointer">Advisory Board</li>
                                <li className="cursor-pointer">
                                  Business and Intangible Asset Valuations
                                </li>
                                <li className="cursor-pointer">
                                  Business and Investment Structuring
                                </li>
                                <li className="cursor-pointer">Business Exit Services</li>
                                <li className="cursor-pointer">Business Reviews</li>
                                <li className="cursor-pointer">Business Services</li>
                                <li className="cursor-pointer">
                                  Data Analytics and Business Intelligence
                                </li>
                                <li className="cursor-pointer">Employee Incentive Programs</li>
                                <li className="cursor-pointer">Insolvency Appointments</li>
                              </ul>
                            </div>
                          )}
                        </div>

                        <div>
                          <div
                            className={`flex justify-between items-center cursor-pointer text-[#007aff] font-bold md:my-[3.7vw] my-[35px] md:mx-[3vw] mx-[40px] md:px-[1.8vw] px-[20px]  py-[20px] md:py-[2.9vw] rounded-[1rem] md:rounded-[1.5rem] ${taxOpen ? "bg-[#e0f0ff] border-[0.1vw] border-[#a7b3c0]" : "hover:bg-[#e0f0ff] hover:text-[#3a3d6d]  hover:mt-[5vw] hover:duration-[450ms] ease-in-out"
                              }`} b
                            onClick={(e) => { e.stopPropagation();setTaxopen(!taxOpen)}}
                          >
                            <div className="flex items-center gap-2  ">

                              <img src={TaxImg} className="w-9 h-9 mr-8" />
                              <span className=' font-euclid text-[17px]'>Tax</span>
                            </div>
                            <i
                              className={`bi ${taxOpen ? "bi-chevron-up" : "bi-chevron-down"} text-[#007aff] text-[22px] flex items-center pr-[20px] font-extrabold`}
                            ></i>
                          </div>

                          {taxOpen && (
                            <div className='bg-[#e0f0ff] border-t border-[#c7d4d5]'>

                              <ul className="md:pl-[4.2vw] pl-[35px] md:py-[3vw] py-[32px] text-sm text-[#405b7b] space-y-7">
                                <li className="cursor-pointer">Capital Gains Tax</li>
                                <li className="cursor-pointer">Employee Share Schemes</li>
                                <li className="cursor-pointer">Fringe Benefits Tax</li>
                                <li className="cursor-pointer">Goods and Services Tax</li>
                                <li className="cursor-pointer">International and Cross Border Services</li>
                                <li className="cursor-pointer">Business Services</li>
                                <li className="cursor-pointer">Payroll Tax</li>
                                <li className="cursor-pointer">Tax Disputes and Audit Management</li>
                                
                              </ul>
                            </div>
                          )}
                        </div>

                        <div>
                          <div
                            className={`flex justify-between items-center cursor-pointer text-[#007aff] font-bold md:my-[3.7vw] my-[35px] md:mx-[3vw] mx-[40px] md:px-[1.8vw] px-[20px]  py-[20px] md:py-[2.9vw] rounded-[1rem] md:rounded-[1.5rem] ${auditoOpen ? "bg-[#e0f0ff] border-[0.1vw] border-[#a7b3c0]" : "hover:bg-[#e0f0ff] hover:text-[#3a3d6d] hover:mt-[5vw] hover:duration-[450ms] ease-in-out"
                              }`}
                            onClick={(e) => { e.stopPropagation(); setAuditoOpen(!auditoOpen)}}
                          >
                            <div className="flex items-center gap-2  ">

                              <img src={AuditImg} className="w-9 h-9 mr-8" />
                              <span className=' font-euclid text-[17px]'>Audit</span>
                            </div>
                            <i
                              className={`bi ${auditoOpen ? "bi-chevron-up" : "bi-chevron-down"} text-[#007aff] text-[22px] flex items-center pr-[20px] font-extrabold`}
                            ></i>
                          </div>

                          {auditoOpen && (
                            <div className='bg-[#e0f0ff] border-t border-[#c7d4d5]'>

                              <ul className="md:pl-[4.2vw] pl-[35px] md:py-[3vw] py-[32px] text-sm text-[#405b7b] space-y-7">
                                <li className="cursor-pointer">AFSL Reporting and Audits</li>
                                <li className="cursor-pointer">External Audit</li>
                                <li className="cursor-pointer">Internal Audit</li>
                                <li className="cursor-pointer">Business Exit Services</li>
                                <li className="cursor-pointer">Business Reviews</li>
                                <li className="cursor-pointer">QBCC Reporting and Audits</li>
                                
                              </ul>
                            </div>
                          )}
                        </div>

                        <div>
                          <div
                            className={`flex justify-between items-center cursor-pointer text-[#007aff] font-bold md:my-[3.7vw] my-[35px] md:mx-[3vw] mx-[40px] md:px-[1.8vw] px-[20px]  py-[20px] md:py-[2.9vw] rounded-[1rem] md:rounded-[1.5rem] ${forensicOpen ? "bg-[#e0f0ff] border-[0.1vw] border-[#a7b3c0]" : "hover:bg-[#e0f0ff] hover:text-[#3a3d6d] hover:mt-[5vw] hover:duration-[450ms] ease-in-out"
                              }`}
                            onClick={(e) => { e.stopPropagation();setForensicOpen(!forensicOpen)}}
                          >
                            <div className="flex items-center gap-2  ">

                              <img src={ForensicImg} className="w-9 h-9 mr-8" />
                              <span className=' font-euclid text-[17px]'>Forensic</span>
                            </div>
                            <i
                              className={`bi ${forensicOpen ? "bi-chevron-up" : "bi-chevron-down"} text-[#007aff] text-[22px] flex items-center pr-[20px] font-extrabold`}
                            ></i>
                          </div>

                          {forensicOpen && (
                            <div className='bg-[#e0f0ff] border-t border-[#c7d4d5]'>

                              <ul className="md:pl-[4.2vw] pl-[35px] md:py-[3vw] py-[32px] text-sm text-[#405b7b] space-y-7">
                                <li className="cursor-pointer">Asset Tracing</li>
                                <li className="cursor-pointer">Transaction and Earn-out Disputes</li>
                                <li className="cursor-pointer">Economic Loss and Damages Calculations</li>
                                <li className="cursor-pointer">Expert Witness and Dispute Resolution</li>
                                <li className="cursor-pointer">Fraud Investigation</li>
                                <li className="cursor-pointer">Matrimonial</li>
                                <li className="cursor-pointer">Trustee and Estate Services</li>
                                
                              </ul>
                            </div>
                          )}
                        </div>

                        <div>
                          <div
                            className={`flex justify-between items-center cursor-pointer text-[#007aff] font-bold md:my-[3.7vw] my-[35px] md:mx-[3vw] mx-[40px] md:px-[1.8vw] px-[20px]  py-[20px] md:py-[2.9vw] rounded-[1rem] md:rounded-[1.5rem] ${supportOpen ? "bg-[#e0f0ff] border-[0.1vw] border-[#a7b3c0]" : "hover:bg-[#e0f0ff] hover:text-[#3a3d6d] hover:mt-[5vw] hover:duration-[450ms] ease-in-out"
                              }`}
                            onClick={(e) => {  e.stopPropagation();setSupportOpen(!supportOpen)}}
                          >
                            <div className="flex items-center gap-2  ">

                              <img src={OutsourcedSupportImg} className="w-9 h-9 mr-8" />
                              <span className=' font-euclid text-[17px]'>Outsourced Support</span>
                            </div>
                            <i
                              className={`bi ${supportOpen ? "bi-chevron-up" : "bi-chevron-down"} text-[#007aff] text-[22px] flex items-center pr-[20px] font-extrabold`}
                            ></i>
                          </div>

                          {supportOpen && (
                            <div className='bg-[#e0f0ff] border-t border-[#c7d4d5]'>

                              <ul className="md:pl-[4.2vw] pl-[35px] md:py-[3vw] py-[32px] text-sm text-[#405b7b] space-y-7">
                                <li className="cursor-pointer">Board Packs</li>
                                <li className="cursor-pointer">Bookkeeping</li>
                                <li className="cursor-pointer">Financial Reporting Services</li>
                                <li className="cursor-pointer">Management Reporting</li>
                                <li className="cursor-pointer">Payroll Services</li>
                                
                              </ul>
                            </div>
                          )}
                        </div>


                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={` ${industryOpen
                    ? "border-b-[0.15vw] border-[#007aff]"
                    : ""
                    }`}
                  onClick={() => setSIndustryOpen(!industryOpen)}
                >

                  <div>
                    <div
                      className="flex justify-between items-center  py-[30px]  sm:py-[23px]  md:py-[2.4vw] border-b-[0.15vw] border-[#007aff] cursor-pointer px-[75px] sm:px-[60px] md:px-[4vw]"
                      onClick={() => setSIndustryOpen(!industryOpen)}
                    >
                      <span className="text-[22px]  font-euclid  font-bold text-[#0B0F66] pt-1">Industries</span>
                      <i className={`bi ${industryOpen ? "bi-chevron-up" : "bi-chevron-down"} text-[#007aff] text-[22px] flex items-center pt-[20px] font-extrabold`}></i>
                    </div>
                    {industryOpen && (
                      <div className=" bg-[#fff]">


                        <div
                          className="flex justify-between items-center cursor-pointer text-[#007aff] font-bold md:my-[2vw] my-[25px] md:mx-[3vw] mx-[30px] px-[1.8vw]  py-[2vw] md:rounded-[1.5rem] rounded-[0.8rem]  transition-transform duration-300 hover:bg-[#e0f0ff] hover:scale-110  hover:text-[#3a3d6d]"

                        >
                          <div className="flex items-center gap-2">
                            <span className="font-euclid text-[17px]">Legal Practice</span>
                          </div>
                        </div>









                        <div
                          className="flex justify-between items-center cursor-pointer text-[#007aff] font-bold md:my-[2vw] my-[25px] md:mx-[3vw] mx-[30px] px-[1.8vw] py-[2vw] md:rounded-[1.5rem] rounded-[0.8rem]  transition-transform duration-300 hover:bg-[#e0f0ff] hover:scale-110  hover:text-[#3a3d6d]"

                        >
                          <div className="flex items-center gap-2">
                            <span className="font-euclid text-[17px]">Medical Practitioners</span>
                          </div>
                        </div>

                        <div
                          className="flex justify-between items-center cursor-pointer text-[#007aff] font-bold md:my-[2vw] my-[25px] md:mx-[3vw] mx-[30px] px-[1.8vw] py-[2vw] md:rounded-[1.5rem] rounded-[0.8rem]  transition-transform duration-300 hover:bg-[#e0f0ff] hover:scale-110  hover:text-[#3a3d6d]"

                        >
                          <div className="flex items-center gap-2">
                            <span className="font-euclid text-[17px]">Not-For-Profit</span>
                          </div>
                        </div>

                        <div
                          className="flex justify-between items-center cursor-pointer text-[#007aff] font-bold md:my-[2vw] my-[25px] md:mx-[3vw] mx-[30px] px-[1.8vw] py-[2vw] md:rounded-[1.5rem] rounded-[0.8rem]  transition-transform duration-300 hover:bg-[#e0f0ff] hover:scale-110  hover:text-[#3a3d6d]"

                        >
                          <div className="flex items-center gap-2">
                            <span className="font-euclid text-[17px]">Professional Services</span>
                          </div>
                        </div>

                        <div
                          className="flex justify-between items-center cursor-pointer text-[#007aff] font-bold md:my-[2vw] my-[25px] md:mx-[3vw] mx-[30px] px-[1.8vw] py-[2vw] md:rounded-[1.5rem] rounded-[0.8rem]  transition-transform duration-300 hover:bg-[#e0f0ff] hover:scale-110  hover:text-[#3a3d6d]"

                        >
                          <div className="flex items-center gap-2">
                            <span className="font-euclid text-[17px]"> Property and Development</span>
                          </div>
                        </div>
                        <div
                          className="flex justify-between items-center cursor-pointer text-[#007aff] font-bold md:my-[2vw] my-[25px] md:mx-[3vw] mx-[30px] px-[1.8vw] py-[2vw] md:rounded-[1.5rem] rounded-[0.8rem]  transition-transform duration-300 hover:bg-[#e0f0ff] hover:scale-110  hover:text-[#3a3d6d]"

                        >
                          <div className="flex items-center gap-2">
                            <span className="font-euclid text-[17px]">Retail and Franchises</span>
                          </div>
                        </div>
                        <div
                          className="flex justify-between items-center cursor-pointer text-[#007aff] font-bold md:my-[2vw] my-[25px] md:mx-[3vw] mx-[30px] px-[1.8vw] py-[2vw] md:rounded-[1.5rem] rounded-[0.8rem]  transition-transform duration-300 hover:bg-[#e0f0ff] hover:scale-110  hover:text-[#3a3d6d]"

                        >
                          <div className="flex items-center gap-2">
                            <span className="font-euclid text-[17px]">Technology</span>
                          </div>
                        </div>


                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={` ${aboutOpen
                    ? "border-b-[0.15vw] border-[#007aff]"
                    : ""
                    }`}
                  onClick={() => setAboutOpen(!aboutOpen)}
                >

                  <div>
                    <div
                      className="flex justify-between items-center  py-[30px]  sm:py-[23px]  md:py-[2.4vw] border-b-[0.15vw] border-[#007aff] cursor-pointer px-[75px] sm:px-[60px] md:px-[4vw]"
                      onClick={() => setAboutOpen(!aboutOpen)}
                    >
                      <span className="text-[22px]  font-euclid  font-bold text-[#0B0F66] pt-1">About us</span>

                    </div>

                  </div>
                </div>
                <div
                  className={` ${peopleopen
                    ? "border-b-[0.15vw] border-[#007aff]"
                    : ""
                    }`}
                  onClick={() => setPeopleopen(!peopleopen)}
                >

                  <div>
                    <div
                      className="flex justify-between items-center  py-[30px]  sm:py-[23px]  md:py-[2.4vw] border-b-[0.15vw] border-[#007aff] cursor-pointer px-[75px] sm:px-[60px] md:px-[4vw]"
                      onClick={() => setPeopleopen(!peopleopen)}
                    >
                      <span className="text-[22px]  font-euclid  font-bold text-[#0B0F66] pt-1">Our People</span>

                    </div>

                  </div>
                </div>
                <div
                  className={` ${insightsopen
                    ? "border-b-[0.15vw] border-[#007aff]"
                    : ""
                    }`}
                  onClick={() => setInsightsopen(!insightsopen)}
                >

                  <div>
                    <div
                      className="flex justify-between items-center  py-[30px]  sm:py-[23px]  md:py-[2.4vw] border-b-[0.15vw] border-[#007aff] cursor-pointer px-[75px] sm:px-[60px] md:px-[4vw]"
                      onClick={() => setInsightsopen(!insightsopen)}
                    >
                      <span className="text-[22px]  font-euclid  font-bold text-[#0B0F66] pt-1">Insights</span>

                    </div>

                  </div>
                </div>

                <div
                  className={` ${careersopen
                    ? "border-b-[0.15vw] border-[#007aff]"
                    : ""
                    }`}
                  onClick={() => setCareers(!careersopen)}
                >

                  <div>
                    <div
                      className="flex justify-between items-center  py-[30px]  sm:py-[23px]  md:py-[2.4vw] border-b-[0.15vw] border-[#007aff] cursor-pointer px-[75px] sm:px-[60px] md:px-[4vw]"
                      onClick={() => setCareers(!careersopen)}
                    >
                      <span className="text-[22px]  font-euclid  font-bold text-[#0B0F66] pt-1">Careers</span>
                      <i className={`bi ${careersopen ? "bi-chevron-up" : "bi-chevron-down"} text-[#007aff] text-[22px] flex items-center pt-[20px] font-extrabold`}></i>
                    </div>
                    {careersopen && (
                      <div className=" bg-[#fff]">

                        <div
                          className="flex justify-between items-center cursor-pointer text-[#007aff] font-bold md:my-[3.3vw] md:py-[2vw] my-[25px] md:mx-[3vw] mx-[40px] px-[30px] md:px-[1.8vw] py-[25px] md:rounded-[1.5rem] rounded-[0.8rem] transition-transform duration-300 hover:bg-[#e0f0ff] hover:scale-110  hover:text-[#3a3d6d]"

                        >
                          <div className="flex items-center gap-2">
                            <span className="font-euclid text-[17px]">What's on Offer</span>
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                </div>
              </div>


              <div
                className={`flex-1 bg-[#2e2d2d] transition-opacity duration-[5000ms] ease-in-out ${mobileMenuOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
                  }`}
              ></div>
            </div>
          )}


        </div>




      </div>

      <div className='mt-[80px] lg:mt-[68px] xl:mt-[85px] mb-[50px]'>
        <div className='bg-[#0585f7] relative'>
          <div className='left-main-banner-content'>
            <div className='main-banner-heading text-[48px] md:text-[48px] lg:text-[48px] xl:text-[65px] 2xl:text-[66px] 3xl:text-[80px] leading-[1.2] text-[#fff]'>
              Proactive business solutions
            </div>
            <div className='main-banner-text'>
              <p className='text-[15px] md:text-[18px] xl:text-[19px] 2xl:text-[20px] 3xl:text-[22px] text-white font-semibold'>At Pilot Partners Chartered Accountants, our dedicated team of experienced accountants and business advisors is here to support you.</p>
              <p className='text-[15px] md:text-[18px] xl:text-[19px] 2xl:text-[20px] 3xl:text-[22px] text-[#fff] font-semibold'>
                As Queensland’s largest independent Chartered Accounting firm we proudly work with many different types of entities and individuals.
              </p>
              <p className='text-[15px] md:text-[18px] xl:text-[19px] 2xl:text-[20px] 3xl:text-[22px] text-[#fff] font-semibold'>
                Discover how we can help you achieve your unique goals.
              </p>
            </div>
            <button className='py-[22px] lg:py-[24px] px-[44px] lg:px-[48px] bg-white rounded-[40px] flex items-center text-center justify-center text-[17px] text-[#2f75f6] xl:text-[18px] font-semibold border border-[#fff] mt-[16px] lg:mt-0'>Contact us</button>
          </div>
          <div className='w-[68%] xs:w-[50%] md:w-[50%] lg:w-[49%] xl:w-[50%] 2xl:w-[50%] absolute -bottom-[130px] sm:-bottom-[130px] md:-bottom-[85px] lg:-bottom-[40px] xl:-bottom-[80px] 2xl:-bottom-[105px] 3xl:-bottom-[140px] right-0'>
            <div className='banner-left-round-img'>
              <img src={Leftimg} alt="logo icon" />
            </div>
          </div>
        </div>

        <div className='bg-[#fff] customteam grid grid-cols-2 pt-[190px] xl:pt-[120px] px-[12.5vw] md:px-[48px] 3xl:px-[10vw] md:pb-[95px] pb-[40px] gap-[26px] md:gap-[45px] lg:gap-[30px] xl:gap-[50px]'>
          <div className='mt-[80px] xl:col-span-1 col-span-2 flex-col items-center justify-center text-[#0b0f66] font-semibold text-[32px] lg:text-[35px] leading-[3.25rem] lg:pr-[40px]'>
            Tailored strategies for your business objectives
          </div>
          <div className='xl:col-span-1 col-span-2 flex-col items-center justify-center'>
            <div className='xl:mt-[80px] md:mr-[60px] text-[16px] leading-[1.55rem] text-[#212529]'>
              We offer a full range of accounting and business consulting services for you and your business
            </div>
            <div className='bg-[#007ef0] flex-col items-center justify-center mt-[40px] py-[22px] px-[44px] font-semibold text-[#fff] rounded-[16vw] md:rounded-[11vw] inline-block cursor-pointer'>
              Explore our Services
            </div>
          </div>
        </div>

        <Cardslider />

        <div className='bg-[#007aff] flex flex-col-reverse lg:grid grid-cols-2'>
          <div className='col-span-2 lg:col-span-1'>
            <img src={Team} alt="logo icon" className='team' />
          </div>
          <div className='col-span-2 lg:col-span-1   lg:ml-[1vw] xl:ml-[4vw] 2xl:ml-[8vw] flex-col items-center place-content-center pt-[140px] md:pt-[90px] lg:pt-[70px] pb-[60px] md:pb-[80px] lg:pb-[40px] px-[50px]'>
            <div className='text-[34px] md:text-[36px] pb-[30px] lg:pb-[30px] sm:pb-[80px] text-[#fff] font-extrabold'>
              Meet our team
            </div>
            <div className='text-[17px] md:text-[17px] leading-[30px] lg:w-[100%] xl:w-[80%] w-[100%] md:w-[60%] text-[#fff] font-medium'>
              We’re a team of expert chartered accountants and specialist advisors who share a common philosophy – our clients are our focus. Through one-on-one relationships, we actively work with you to deliver superior business solutions and strategic advice.
            </div>
            <div className=' cursor-pointer py-[18px] px-[40px] rounded-[50px] bg-[#fff] inline-block text-[16px] font-bold text-[#007aff] mt-[45px]'>
              Get in touch
            </div>
          </div>
        </div>

        <div className=' bg-[#d7effc] pt-[100px] lg:pt-[140px] 2xl:pt-[160px] 2xl:pl-[48px] lg:pl-[42px]  2xl:pb-[100px] lg:pb-[90px] pb-[60px] gap-[20px]'>




          <ArticleSlider />

        </div>
        <div className='bg-[#007aff] pt-[120px] pb-[180px] lg:px-[130px] md:px-[80px] px-[50px] text-center space-y-6 '>
          <div className='text-[52px] font-euclid text-[#fff] font-semibold'>
            Stay Informed
          </div>
          <div className=' text-[20px] text-center text-[#fff]'>Stay updated with our tailored newsletters and alerts. Explore insights on accounting issues affecting your business and industries, along with firm updates. </div>
          <div className='  cursor-pointer py-[12px] px-[25px] rounded-[30px] border-[1px] border-[#ecf1f4] inline-block text-[#fff] font-semibold'>
            Subscribe
          </div>
        </div>
        <div className='md:h-[700px] xs:h-[700px] h-[900px] bg-white relative'>
          <div className='md:h-[900px] lg:h-[600px] xs:h-[1160px] sm:h-[900px]  absolute right-[90px] lg:right-0 lg:left-[170px] -top-[60px] z-10 bg-white lg:pl-[100px] pl-[40px] 3xl:pr-[100px] lg:pr-[40px]  pr-[40px] py-[80px]'>

            <div className='grid grid-cols-12 gap-[18px]  pb-[30px] border-b-[2px] border-[#4bb6fd] '>
              <div className='lg:col-span-3 col-span-12 lg:border-b-[0px] border-b-[2px] border-[#4bb6fd] lg:pb-[0px] pb-[40px]'>

                <div className='lg:px-[20px] space-y-6 '>
                  <div>
                    <img src={Logoicon} className="w-[100px] h-[40px]" />
                  </div>
                  <div className='text-[12px] text-[#007aff] font-medium cursor-pointer'>
                    07 3023 1300
                  </div>
                  <div className='text-[12px] text-[#007aff] font-medium cursor-pointer'>
                    <a>
                      Level 10, 1 Eagle Street Brisbane 4000 QLD Australia
                    </a>
                  </div>
                  <div className='flex gap-[10px]'>
                    <div>
                      <img src={facebook} className="xl:w-[40px] w-[37px] xl:h-[32px] h-[25px] cursor-pointer" />
                    </div>
                    <div>
                      <img src={LinkedIn} className="xl:w-[40px] w-[37px] xl:h-[32px] h-[25px] cursor-pointer" />
                    </div>
                    <div>
                      <img src={Insta} className="xl:w-[40px] w-[37px] xl:h-[32px] h-[25px] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='lg:col-span-9 col-span-12'>
                <div className='grid md:grid-cols-4 grid-cols-2 pb-[20px]  '>

                  <div className='sm:px-[20px] lg:px-[30px] xl:px-[40px] px-[10px] mt-[30px] font-medium space-y-5 cursor-pointer'>
                    <div className='text-[#2f68eb] text-[14px]'>
                      Services
                    </div>
                    <div className='text-[14px] text-[#0b0f66]'>Advisory</div>
                    <div className='text-[14px] text-[#0b0f66]'>Tax</div>
                    <div className='text-[14px] text-[#0b0f66]'>Audit</div>
                    <div className='text-[14px] text-[#0b0f66]'>Forensic</div>
                    <div className='text-[14px] text-[#0b0f66]'>Outsourced Support</div>
                  </div>
                  <div className='sm:px-[20px] lg:px-[30px] xl:px-[40px] px-[10px] mt-[30px] font-medium space-y-5 cursor-pointer'>
                    <div className='text-[#2f68eb] text-[14px]'>
                      Industries
                    </div>
                    <div className='text-[14px] text-[#0b0f66]'>Legal Practices</div>
                    <div className='text-[14px] text-[#0b0f66]'>Not-For-Profit</div>
                    <div className='text-[14px] text-[#0b0f66]'>Professional Services</div>
                    <div className='text-[14px] text-[#0b0f66]'>Property and Development</div>
                    <div className='text-[14px] text-[#0b0f66]'>Retail and Franchises</div>
                    <div className='text-[14px] text-[#0b0f66]'>Technology</div>
                  </div>
                  <div className='lg:px-[22px] xl:px-[30px] sm:px-[15px] px-[10px]  mt-[30px] font-medium space-y-5 lg:pt-[0px] pt-[12px] '>
                    <div className='text-[#2f68eb] text-[14px] cursor-pointer'>
                      About Us
                    </div>
                    <div className='text-[14px] text-[#0b0f66] cursor-pointer'>Sustainability and Social Impact</div>
                  </div>
                  <div className=' lg:px-[20px] xl:px-[27px] sm:px-[6px] px-[10px] mt-[30px] font-medium space-y-5 lg:pt-[0px] pt-[12px] '>
                    <div className='text-[#2f68eb] text-[14px] cursor-pointer'>
                      Careers
                    </div>
                    <div className='text-[14px] text-[#0b0f66] cursor-pointer'>What’s On Offer</div>
                  </div>
                </div>

              </div>
            </div>
            <div>
              <div>


                <div className="mt-[30px] 
  flex flex-col items-start text-left
  sm:items-start sm:text-left
  md:items-center md:text-center
  xl:grid xl:grid-cols-2 xl:text-left xl:items-start xl:gap-x-4">


                  <div className=" xl:mt-5 flex flex-col md:flex-row md:flex-wrap md:justify-center xl:justify-start gap-4">
                    <div className="text-[14px] md:text-[15px] lg:text-[16px] text-[#007aff] cursor-pointer">
                      Notification Statement
                    </div>
                    <div className="text-[14px] md:text-[15px] lg:text-[16px] text-[#007aff] cursor-pointer">
                      Privacy
                    </div>
                    <div className="text-[14px] md:text-[15px] lg:text-[16px] text-[#007aff] cursor-pointer">
                      Terms and Conditions
                    </div>
                    <div className="text-[14px] md:text-[15px] lg:text-[16px] text-[#007aff] cursor-pointer">
                      Disclaimer
                    </div>
                  </div>


                  <div className="mt-2 xl:mt-0 flex flex-col items-start md:items-center xl:items-end text-left md:text-center xl:text-right">
                    <div className="text-[14px] md:text-[15px] lg:text-[16px] text-[#007aff] cursor-pointer">
                      Liability limited by a scheme approved under Professional Standards Legislation.
                    </div>
                    <div className="flex justify-start md:justify-center xl:justify-end mt-1">
                      <div className="text-[14px] md:text-[15px] lg:text-[16px] text-[#393b3c] pr-1">
                        ©
                      </div>
                      <div className="text-[14px] md:text-[15px] lg:text-[16px] text-[#007aff] cursor-pointer">
                        Copyright 2025 Pilot Partners
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

