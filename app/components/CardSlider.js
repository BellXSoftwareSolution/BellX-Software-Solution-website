"use client";

import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeedbackCard from "./FeedbackCard";

export default function CardSlider() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 754,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    //className: "w-\[380px\]"
  };
  return (
    <Slider {...settings}>
      <div className="w-80 shadow-md px-4 pt-8 border border-red-200 rounded-md m-4">
        <Image src="/digital.svg" width={55} height={34} className="mb-4" alt="images"/>
        <h3 className="text-xl mb-4 font-medium">Digital Marketing, SEO</h3>
        <p className="text-[#2D3748] mb-12">
          We help you to increased online visibility, improved search-engine
          rankings, and a steady flow of targeted organic traffic to your
          website.
        </p>
      </div>
      <div className="w-80 shadow-md px-4 pt-8 border border-red-200 rounded-md m-4">
        <Image src="/web.svg" width={55} height={34} className="mb-4" alt="images"/>
        <h3 className="text-xl mb-4 font-medium">Web Design & Development</h3>
        <p className="text-[#2D3748] mb-12">
          A Website is an extension of yourself and we can help you to express
          it properly. Your website is your number one marketing asset because
          we live in a digital age.
        </p>
      </div>
      <div className="w-80 shadow-md px-4 pt-8 border border-red-200 rounded-md m-4">
        <Image src="/mobile.svg" width={55} height={34} className="mb-4" alt="images"/>
        <h3 className="text-xl mb-4 font-medium">
          Mobile App Development and API Integration
        </h3>
        <p className="text-[#2D3748] mb-12">
          We provide smooth user experiences across all the latest platforms and
          devices. And also We have an API-first methodology for building end to
          end digital applications that deliver seamless application integration
        </p>
      </div>
      <div className="w-80 shadow-md px-4 pt-8 border border-red-200 rounded-md m-4">
        <Image src="/graphics.svg" width={55} height={34} className="mb-4" alt="image1"/>
        <h3 className="text-xl mb-4 font-medium">
          Graphics Design, UI/UX Design, Digital Marketing , SEO
        </h3>
        <p className="text-[#2D3748] mb-12">
          We provide an optimal viewing experience across different devices,
          including desktops, tablets, and mobile phones
        </p>
      </div>
      <div className="w-80 shadow-md px-4 pt-8 border border-red-200 rounded-md m-4">
        <Image src="/code-icon.svg" width={55} height={34} className="mb-4" alt="image1"/>
        <h3 className="text-xl mb-4 font-medium">Software testing</h3>
        <p className="text-[#2D3748] mb-12">
          We perform thorough testing, including functional, regression, and
          performance testing to validate features, ensure compatibility with
          updates, and evaluate system responsiveness and scalability.
        </p>
      </div>
    </Slider>
  );
}

export function ClientSlider() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    className: "text-center",
  };

  return (
    <Slider {...settings}>
      <div>
        <Image
          src="/people.svg"
          className="w-full h-20"
          alt="client company logo 1"
        />
      </div>
      <div>
        <Image
          src="/people.svg"
          className="w-full h-20"
          alt="client company logo 2"
        />
      </div>
      <div>
        <Image
          src="/people.svg"
          className="w-full h-20"
          alt="client company logo 3"
        />
      </div>
      <div>
        <Image
          src="/people.svg"
          className="w-full h-20"
          alt="client company logo 4"
        />
      </div>
      <div>
        <Image
          src="/people.svg"
          className="w-full h-20"
          alt="client company logo 5"
        />
      </div>
      <div>
        <Image
          src="/people.svg"
          className="w-full h-20"
          alt="client company logo 6"
        />
      </div>
    </Slider>
  );
}

export function Testimonials() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    className: "text-center",
  };

  const feedback = [
    {
      id: "feedback-1",
      content:
        "By leveraging BellX's services, I have been able to establish a strong and compelling online presence. They have designed and developed a modern and user-friendly website that effectively showcases my tech products and engages my target audience. The website's intuitive navigation, visually appealing design, and seamless user experience have contributed to attracting more visitors and converting them into customers",
      name: "Kalkidan",
      title: "Owner of shop.org tech stor",
      Image: "/kalkidan.svg",
    },
    {
      id: "feedback-2",
      content:
        "Bellx software solution's team comprises highly skilled software engineers and developers with extensive expertise in various programming languages, frameworks, and technologies. ",
      name: "Daniel",
      title: "Software engineer",
      Image: "/daniel.svg",
    },
    {
      id: "feedback-3",
      content:
        "BellX is a highly supportive software development company that has played a crucial role in helping numerous clients establish a strong online presence through their expertly designed and developed websites. With their extensive experience and dedication to client success, BellX has proven to be a reliable partner in addressing the unique needs of businesses across various industries.",
      name: "Zelalem",
      title: "Running Car rental bussines",
      Image: "/zelealem.svg",
    },
    {
      id: "feedback-1",
      content:
        "My gym members can easily access their workout routines and I can fulfill my commitment to ensuring their safety. BellX has provided a seamless solution that allows my gym members to conveniently access their personalized workout plans, track their progress, and stay motivated to achieve their fitness goals.",
      name: "kaleb",
      title: "GYM center owner",
      Image: "/kaleab.svg",
    },
  ];

  return (
    <Slider {...settings}>
      {feedback.map((index, card) => (
        <FeedbackCard {...card} key={index}/>
      ))}
    </Slider>
  );
}
