"use client";

import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeedbackCard from "./FeedbackCard";

export default function CardSlider() {
  // const settings = {
  //   arrows: false,
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   centerMode: true,
  //   centerPadding: "100px",
  //   responsive: [
  //     {
  //       breakpoint: 1920,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1080,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 754,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  //   //className: "w-\[380px\]"
  // };
  return (
    <div className="flex w-full flex-wrap justify-center">
      <div className="w-[22rem] shadow-md px-4 pt-8 border border-red-200 rounded-md mx-4 my-4 inset-0 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-pink-500 hover:to-transparent">
        <div className="w-full flex justify-center ">
        <Image src="/digital.jpg" width={55} height={34} className="mb-4 flex justify-center" alt="" />
        </div>
        <h3 className="text-xl mb-4 font-medium text-center">Digital Marketing, SEO</h3>
        <p className="text-[#2D3748] mb-12">
          We help you to increased online visibility, improved search-engine
          rankings, and a steady flow of targeted organic traffic to your
          website.
        </p>
      </div>
      <div className="w-[22rem] shadow-md px-4 pt-8 border border-red-200 rounded-md mx-4 my-4 inset-0 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-pink-500 hover:to-transparent">
        <div className="w-full flex justify-center ">
        <Image src="/web.svg" width={55} height={34} className="mb-4 flex justify-center" alt="" />
        </div>
        <h3 className="text-xl mb-4 text-center font-medium">Web Design & Development</h3>
        <p className="text-[#2D3748] mb-12">
          A Website is an extension of yourself and we can help you to express
          it properly. Your website is your number one marketing asset because
          we live in a digital age.
        </p>
      </div>
      <div className="w-[22rem] shadow-md px-4 pt-8 border border-red-200 rounded-md mx-4 my-4 inset-0 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-pink-500 hover:to-transparent">
      
        <div className="w-full flex justify-center ">
        <Image src="/mobile.svg" width={55} height={34} className="mb-4 flex justify-center" alt="" />
        </div>
        <h3 className="text-xl mb-4 text-center font-medium">
          Mobile App Development and API Integration
        </h3>
        <p className="text-[#2D3748] mb-12">
          We provide smooth user experiences across all the latest platforms and
          devices. And also We have an API-first methodology for building end to
          end digital applications that deliver seamless application integration
        </p>
      </div>
      <div className="w-[22rem] shadow-md px-4 pt-8 border border-red-200 rounded-md mx-4 my-4 inset-0 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-pink-500 hover:to-transparent">
        <div className="w-full flex justify-center ">
        <Image src="/graphics.jpg" width={55} height={34} className="mb-4 flex justify-center" alt="" />
        </div>
        <h3 className="text-xl mb-4 text-center font-medium">
          Graphics Design, UI/UX Design, Digital Marketing , SEO
        </h3>
        <p className="text-[#2D3748] mb-12">
          We provide an optimal viewing experience across different devices,
          including desktops, tablets, and mobile phones
        </p>
      </div>
      <div className="w-[22rem] shadow-md px-4 pt-8 border border-red-200 rounded-md mx-4 my-4 inset-0 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-pink-500 hover:to-transparent">
        <div className="w-full flex justify-center ">
        <Image src="/testing.jpg" width={55} height={34} className="mb-4 flex justify-center" alt="" />
        </div>
        <h3 className="text-xl mb-4 text-center font-medium">Software testing</h3>
        <p className="text-[#2D3748] mb-12">
          We perform thorough testing, including functional, regression, and
          performance testing to validate features, ensure compatibility with
          updates, and evaluate system responsiveness and scalability.
        </p>
      </div>
    </div>
  );
}

// export function ClientSlider() {
//   const settings = {
//     arrows: false,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1920,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 1080,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 500,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     className: "text-center",
//   };

//   return (
//     <Slider {...settings}>
//       <div>
//         <img
//           src="/people.svg"
//           className="w-full h-20"
//           alt="client company logo"
//         />
//       </div>
//       <div>
//         <img
//           src="/people.svg"
//           className="w-full h-20"
//           alt="client company logo"
//         />
//       </div>
//       <div>
//         <img
//           src="/people.svg"
//           className="w-full h-20"
//           alt="client company logo"
//         />
//       </div>
//       <div>
//         <img
//           src="/people.svg"
//           className="w-full h-20"
//           alt="client company logo"
//         />
//       </div>
//       <div>
//         <img
//           src="/people.svg"
//           className="w-full h-20"
//           alt="client company logo"
//         />
//       </div>
//       <div>
//         <img
//           src="/people.svg"
//           className="w-full h-20"
//           alt="client company logo"
//         />
//       </div>
//     </Slider>
//   );
// }



// export function Testimonials() {
//   SwiperCore.use([Autoplay]);
//   const [index, setIndex] = React.useState(0);
//   const feedback = [
//     {
//       id: "1",
//       content:
//         "By leveraging BellX's services, I have been able to establish a strong and compelling online presence. They have designed and developed a modern and user-friendly website that effectively showcases my tech products and engages my target audience. The website's intuitive navigation, visually appealing design, and seamless user experience have contributed to attracting more visitors and converting them into customers",
//       name: "Kalkidan",
//       title: "Owner of shop.org tech stor",
//       img: "/kalkidan.svg",
//     },
//     {
//       id: "2",
//       content:
//         "Bellx software solution's team comprises highly skilled software engineers and developers with extensive expertise in various programming languages, frameworks, and technologies. ",
//       name: "Daniel",
//       title: "Software engineer",
//       img: "/daniel.svg",
//     },
//     {
//       id: "3",
//       content:
//         "BellX is a highly supportive software development company that has played a crucial role in helping numerous clients establish a strong online presence through their expertly designed and developed websites. With their extensive experience and dedication to client success, BellX has proven to be a reliable partner in addressing the unique needs of businesses across various industries.",
//       name: "Zelalem",
//       title: "Running Car rental bussines",
//       img: "/zelealem.svg",
//     },
//     {
//       id: "4",
//       content:
//         "My gym members can easily access their workout routines and I can fulfill my commitment to ensuring their safety. BellX has provided a seamless solution that allows my gym members to conveniently access their personalized workout plans, track their progress, and stay motivated to achieve their fitness goals.",
//       name: "kaleb",
//       title: "GYM center owner",
//       img: "/kaleab.svg",
//     },
//   ];

  
//   return (
//     // make small circles for each feedback
//     // make the circles clickable
//     <div>
//       <div className="w-full flex justify-center items-center gap-x-1 lg:gap-x-2">
//       { Array.from({ length: feedback.length }).map((_, idx) => (
//       <div
//         key={idx}
//         onClick={() => setIndex(idx)}
//         className={`h-2 w-2 rounded-full bg-red-200 mx-2 cursor-pointer ${
//           index === idx ? "bg-red-500" : ""
//         }`}
//       ></div>
//     ))}
//       </div>
     
//     <Swiper
//       spaceBetween={50}
//       // loop={true}
//       loop={true}
//       pagination={{
//         clickable: true
//       }}
//       autoplay={{
//         delay: 2000,
//       }}
//       autoplayDisableOnInteraction={false}
//       slidesPerView={1}
//       onSlideChange={() => {setIndex((index+1) % feedback.length)}}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
      
//         <SwiperSlide key={feedback[0].id}>
//           <FeedbackCard
//             content={feedback[0].content}
//             name={feedback[0].name}
//             title={feedback[0].title}
//             img={feedback[0].img}
//           />
//         </SwiperSlide>
//         <SwiperSlide key={feedback[1].id}>
//           <FeedbackCard
//             content={feedback[1].content}
//             name={feedback[1].name}
//             title={feedback[1].title}
//             img={feedback[1].img}
//           />
//         </SwiperSlide>
//         <SwiperSlide key={feedback[2].id}>
//           <FeedbackCard
//             content={feedback[2].content}
//             name={feedback[2].name}
//             title={feedback[2].title}
//             img={feedback[2].img}
//           />
//         </SwiperSlide>
//         <SwiperSlide key={feedback[3].id} >
        
//           <FeedbackCard
//             content={feedback[3].content}
//             name={feedback[3].name}
//             title={feedback[3].title}
//             img={feedback[3].img}
//           />
//         </SwiperSlide>

//     </Swiper>
//     </div>
    
//   );
// }
export function Testimonials() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "text-center",
    //responsive: [
      //       {
      //         breakpoint: 1920,
      //         settings: {
      //           slidesToShow: 3,
      //           slidesToScroll: 1,
      //           infinite: true,
      //           dots: true,
      //         },
      //       },
      //       {
      //         breakpoint: 1080,
      //         settings: {
      //           slidesToShow: 2,
      //           slidesToScroll: 1,
      //           initialSlide: 2,
      //         },
      //       },
      //       {
      //         breakpoint: 500,
      //         settings: {
      //           slidesToShow: 1,
      //           slidesToScroll: 1,
      //         },
      //       },
      //     ],
  };

  const feedback = [
    {
      id: "feedback-1",
      content:
        "By leveraging BellX's services, I have been able to establish a strong and compelling online presence. They have designed and developed a modern and user-friendly website that effectively showcases my tech products and engages my target audience. The website's intuitive navigation, visually appealing design, and seamless user experience have contributed to attracting more visitors and converting them into customers",
      name: "Kalkidan",
      title: "Owner of shop.org tech stor",
      img: "/kalkidan.jpg",
    },
    {
      id: "feedback-2",
      content:
        "Bellx software solution's team comprises highly skilled software engineers and developers with extensive expertise in various programming languages, frameworks, and technologies. ",
      name: "Daniel",
      title: "Software engineer",
      img: "/daniel.jpg",
    },
    {
      id: "feedback-3",
      content:
        "BellX is a highly supportive software development company that has played a crucial role in helping numerous clients establish a strong online presence through their expertly designed and developed websites. With their extensive experience and dedication to client success, BellX has proven to be a reliable partner in addressing the unique needs of businesses across various industries.",
      name: "Zelalem",
      title: "Running Car rental bussines",
      img: "/zelealem.jpg",
    },
    {
      id: "feedback-4",
      content:
        "My gym members can easily access their workout routines and I can fulfill my commitment to ensuring their safety. BellX has provided a seamless solution that allows my gym members to conveniently access their personalized workout plans, track their progress, and stay motivated to achieve their fitness goals.",
      name: "kaleb",
      title: "GYM center owner",
      img: "/kaleb.jpg",
    },
  ];

  return (
    <Slider {...settings}>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </Slider>
  );
}
