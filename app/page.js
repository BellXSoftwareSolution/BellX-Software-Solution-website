"use client";

import { GoArrowRight } from "react-icons/go";
import CardSlider, { Testimonials } from "./components/CardSlider";
import Technologies from "./components/Technologies";
import Process from "./components/Process";
import image1 from "../public/image1.svg";
import Image from "next/image";
import rocket from "../public/rocket.jpg";
import codeReview from "../public/code-review.jpg";
import quality from "../public/quality.jpg";
import security from "../public/security.jpg";
import proven from "../public/proven.jpg";
import developing from "../public/developing.jpg";
import aboutImage from "../public/about.jpg"

export default function Home() {
  return (
    <div className="w-full mx-auto px-4">
      <div className="">
        <video
          className="w-full h-full object-cover absolute -z-10 top-0 left-0"
          src="/bg-video.mp4"
          autoPlay
          muted
          loop
        />

        <div className="flex  justify-between items-center mb-20">
          <div className="w-full md:w-[48%]">
            <div className="animate-appearup">
              <h1 className="text-xl md:text-2xl lg:text-4xl">
                Empowering{" "}
                <span className="font-semibold bg-gradient-to-r from-[#F7666F] to-[#406AFF] bg-clip-text text-transparent">
                  Business
                </span>{" "}
                through
              </h1>

              <h1 className="font-bold text-xl md:3xl lg:text-5xl mb-8">
                custom{" "}
                <span className="bg-gradient-to-r from-[#DE4396] to-[#0d1c9f] bg-clip-text text-transparent">
                  software solution
                </span>
              </h1>
              <p className="text-black mb-12">
                We offer robust, secure, and scalable software development
                solutions that build business value starting from collaborative
                ideation and product strategy, through to product engineering,
                testing and continuous scaling.
              </p>
            </div>

            <div className="w-full py-5 animate-moveleft">
              <a
                href="/contact-us"
                className="text-white bg-gradient-to-r from-[#6675F7] to-[#57007B] px-5 py-4 md:px-7 md:py-5 rounded-md animate-moveleft w-full"
              >
                Let&apos;s get started!
              </a>
            </div>
          </div>
          <div className="w-[48%] animate-appearup ">
            <Image
              src={image1}
              alt="starting-image"
              className="w-full hidden md:block animate-grow"
            />
          </div>
        </div>
      </div>

      <div
        id="services"
        className="flex flex-col mt-36 md:mt-16 mb-16 items-center"
      >
        <hr className="bg-pink-500 h-1 w-16 my-6" />
        <p className="text-2xl">Services</p>
        <p className="text-2xl font-semibold">we offer</p>
      </div>
      <div>
        <CardSlider />
      </div>

      <div className="flex justify-around items-center mt-24">
        <div className="w-full md:w-2/5">
          <hr className="bg-pink-500 h-1 w-16 my-6" />
          <h3 className="text-3xl mb-12 font-medium">
            Leading companies trust us to{" "}
            <span className="font-semibold">develop software</span>
          </h3>
          <p className="text-[#898CA9] mb-12">
            We{" "}
            <span className="bg-gradient-to-r from-[#DE4396] to-[#0d1c9f] bg-clip-text text-transparent">
              add development capacity
            </span>{" "}
            to tech teams. Our value isn&apos;t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>
          <a href="/" className="text-[#57007B]">
            See more informations <GoArrowRight className="inline" />
          </a>
        </div>
        <Image src={aboutImage} alt="about-image" className="w-2/5 hidden md:block rounded-md" />
      </div>

      {/* <div className="flex flex-col my-16">
        <hr className="bg-pink-500 h-1 w-16 my-6" />
        <p className="text-2xl">Meet the people</p>
        <p className="text-2xl font-semibold">we are working with</p>
      </div>
      <ClientSlider /> */}
      <div className="w-full my-20"></div>
      <div className="flex flex-col items-center my-16">
        <hr className="bg-pink-500 h-1 w-16 my-6" />
        <p className="text-2xl">Why customers love</p>
        <p className="text-2xl font-semibold">Working with us</p>
      </div>
      <Testimonials />

      <div id="who-we-are" className="flex flex-col items-center my-16">
        <hr className="bg-pink-500 h-1 w-16 my-6" />
        <p className="text-2xl">Our design and</p>
        <p className="text-2xl font-semibold">development approach</p>
      </div>

      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex flex-col items-center sm:flex-row sm:items-start gap-6 border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image
            src={rocket}
            height={40}
            width={40}
            className="sm:h-[60px] sm:w-[60px]"
            alt="ux-driven"
          />
          <div>
            <p className="text-center sm:text-left font-semibold mb-3">
              UX Driven Engineering
            </p>
            <p className="text-[#4A5568]">
              we approach to software development that places a strong emphasis
              on user experience (UX) throughout the entire engineering process.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex flex-col items-center sm:flex-row sm:items-start gap-6 border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image
            src={developing}
            height={40}
            width={40}
            className="sm:h-[60px] sm:w-[60px]"
            alt="developing-image"
          />
          <div>
            <p className="text-center sm:text-left font-semibold mb-3">
              Developing Shared Understanding
            </p>
            <p className="text-[#4A5568]">
              Clear communication, ,Regular team meetings ,Iterative feedback
              and reviews
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex flex-col items-center sm:flex-row sm:items-start gap-6 border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image
            src={proven}
            height={40}
            width={40}
            className="sm:h-[60px] sm:w-[60px]"
            alt="proven-image"
          />
          <div>
            <p className="text-center sm:text-left font-semibold mb-3">
              Specialization and Industry Expertise
            </p>
            <p className="text-[#4A5568]">
              Expertise in specific technologies and frameworks indicates a deep
              understanding of those tools and the ability to leverage them
              effectively.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex flex-col items-center sm:flex-row sm:items-start gap-6 border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image
            src={security}
            height={40}
            width={40}
            className="sm:h-[60px] sm:w-[60px]"
            alt="security-image"
          />
          <div>
            <p className="text-center sm:text-left font-semibold mb-3">
              Security
            </p>
            <p className="text-[#4A5568]">
              Implementing robust security measures is essential to safeguard
              sensitive information, maintain user trust, and ensure the
              integrity and availability of systems and data
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex flex-col items-center sm:flex-row sm:items-start gap-6 border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image
            src={codeReview}
            height={40}
            width={40}
            className="sm:h-[60px] sm:w-[60px]"
            alt="code-review-image"
          />
          <div>
            <p className="text-center sm:text-left font-semibold mb-3">
              Code Reviews
            </p>
            <p className="text-[#4A5568]">
              We understand the importance of thorough code evaluation and
              feedback, and our platform is designed to facilitate effective
              code reviews that result in improved code quality and team
              productivity.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex flex-col items-center sm:flex-row sm:items-start gap-6 border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image
            src={quality}
            height={40}
            width={40}
            className="sm:h-[60px] sm:w-[60px]"
            alt="quality-image"
          />
          <div>
            <p className="text-center sm:text-left font-semibold mb-3">
              Quality Assurance & Testing
            </p>
            <p className="text-[#4A5568]">
              Quality Assurance & Testing services encompass a comprehensive
              range of activities designed to identify and rectify defects,
              improve software performance, and enhance user experience.
            </p>
          </div>
        </div>
      </div>

      <Technologies />

      <div id="how-it-works" className="flex flex-col items-center my-16">
        <hr className="bg-pink-500 h-1 w-16 my-6" />
        <p className="text-2xl">How development</p>
        <p className="text-2xl font-semibold">pass through</p>
      </div>

      <Process />

      <div className="flex flex-col md:flex-row justify-around items-center bg-gradient-to-r from-[#F1F1F5] to-[#E4ECF7] h-72 rounded-[20px]">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left w-[90%] md:w-2/5 lg:w-2/5 lg:min-w-0">
          Do you want to partner with us to scale your business?
        </p>
        <a
          href="mailto:bellxsoftwaresolution@gmail.com?subject=Seeking%20partnership"
          target="_blank"
          className="text-white bg-gradient-to-r from-[#6675F7] to-[#57007B] px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-md mt-0 lg:mt-0"
        >
          <span className="text-base sm:text-lg font-bold">
            Contact us
          </span>
        </a>
      </div>
    </div>
  );
}
