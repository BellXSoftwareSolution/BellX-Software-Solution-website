import { GoArrowRight } from "react-icons/go";
import { LiaAngleRightSolid } from "react-icons/lia";
import CardSlider, {
  ClientSlider,
  Testimonials,
} from "./components/CardSlider";
import Image from "next/image";
import Technologies from "./components/Technologies";
import Process from "./components/Process";

export default function Home() {
  return (
    <div className="w-[95%] mx-auto py-16">
      <div className="flex  justify-between items-center mb-20">
        <div className="w-full md:w-[48%]">
          <h1 className="text-2xl lg:text-4xl">
            Empowering{" "}
            <span className="font-semibold bg-gradient-to-r from-[#F7666F] to-[#406AFF] bg-clip-text text-transparent">
              Business
            </span>{" "}
            through
          </h1>
          <h1 className="text-3xl font-bold lg:text-5xl mb-8">
            custom{" "}
            <span className="bg-gradient-to-r from-[#DE4396] to-[#0d1c9f] bg-clip-text text-transparent">
              software solution
            </span>
          </h1>
          <p className="text-[#898CA9] mb-12">
            We offer robust, secure, and scalable software development solutions
            that build business value starting from collaborative ideation and
            product strategy, through to product engineering, testing and
            continuous scaling.
          </p>
          <a
            href="mailto:bellxsoftwaresolution@gmail.com?subject=Seeking%20partnership"
            target="_blank"
            className="text-white bg-[#3D63EA] px-7 py-5 rounded-md"
          >
            Let&apos;s get started!
          </a>
        </div>
        <Image alt="alts" src="/image1.svg" className="w-[48%] hidden md:block" />
      </div>
      
      <div id="services" className="flex flex-col my-16 items-center">
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
        <Image alt="alts" src="/about.svg" className="w-2/5 hidden md:block" />
      </div>

      {/* <div className="flex flex-col my-16">
        <hr className="bg-pink-500 h-1 w-16 my-6" />
        <p className="text-2xl">Meet the people</p>
        <p className="text-2xl font-semibold">we are working with</p>
      </div>
      <ClientSlider /> */}

      <div className="flex flex-col items-center my-16">
        <hr className="bg-pink-500 h-1 w-16 my-6" />
        <p className="text-2xl">Why customers love</p>
        <p className="text-2xl font-semibold">Working with us</p>
      </div>
      <Testimonials />

      <div className="flex flex-col items-center my-16">
        <hr className="bg-pink-500 h-1 w-16 my-6" />
        <p className="text-2xl">Our recent</p>
        <p className="text-2xl font-semibold">Case Studies</p>
      </div>

      <div
        id="projects"
        className="flex  items-center bg-[#F1F2FF] justify-between  pr-16 mb-8 rounded-3xl border-2"
      >
        <Image alt="alts" src="/ecommerce.svg" className="w-[49%] hidden lg:block" />
        <div className="w-full p-8 lg:p-0 lg:w-[49%]">
          <h3 className="text-2xl mb-8 font-medium">
            E commerce Website for Tech store
          </h3>
          <p className="text-[#898CA9] mb-12">
            Born out of a vision, a single minded objective that puts service
            before anything else, Swift Clearance and Forwarding Corp. surging
            forth to deliver the best services in the shipping and logistics
            scenario. Its meteoric rise stems out of a solid foundation. The
            management boasts of over 20 years of rich and varied experience in
            the shipping and freight forwarding industry.
          </p>
          <div className="text-end">
            <a href="/" className="text-[#57007B]">
              Preview <LiaAngleRightSolid className="inline" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex  items-center bg-[#F0FFF7] justify-between  pr-16 mb-8 rounded-3xl border-2">
        <Image alt="alts" src="/gym.svg" className="w-[49%] hidden lg:block" />
        <div className="w-full p-8 lg:p-0 lg:w-[49%]">
          <h3 className="text-2xl mb-8 font-medium">Website for GYM center</h3>
          <p className="text-[#898CA9] mb-12">
            Born out of a vision, a single-minded objective that puts service
            before anything else, Swift Clearance and Forwarding Corp. surging
            forth to deliver the best services in the shipping and logistics
            scenario. Its meteoric rise stems out of a solid foundation. The
            management boasts of over 20 years of rich and varied experience in
            the shipping and freight forwarding industry.
          </p>
          <div className="text-end">
            <a href="/" className="text-[#57007B]">
              Preview <LiaAngleRightSolid className="inline" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex  items-center bg-[#FFF4F4] justify-between  pr-16 mb-8 rounded-3xl border-2">
        <Image alt="alts" src="/car.svg" className="w-[49%] hidden lg:block" />
        <div className="w-full p-8 lg:p-0 lg:w-[49%]">
          <h3 className="text-2xl mb-8 font-medium">Website for Car Rental</h3>
          <p className="text-[#898CA9] mb-12">
            Born out of a vision, a single minded objective that puts service
            before anything else, Swift Clearance and Forwarding Corp. surging
            forth to deliver the best services in the shipping and logistics
            scenario. Its meteoric rise stems out of a solid foundation. The
            management boasts of over 20 years of rich and varied experience in
            the shipping and freight forwarding industry
          </p>
          <div className="text-end">
            <a href="/" className="text-[#57007B]">
              Preview <LiaAngleRightSolid className="inline" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center my-16">
        <hr className="bg-pink-500 h-1 w-16 my-6" />
        <p className="text-2xl">Way of building</p>
        <p className="text-2xl font-semibold">Great Software</p>
      </div>

      <div className="flex justify-around items-center mb-20">
        <div className="w-full md:w-2/5">
          <h3 className="text-2xl mb-8 font-medium">
            Expertise and Technical Proficiency
          </h3>
          <p className="text-[#2D3748] mb-12">
            Our team comprises highly skilled software engineers and developers
            with extensive expertise in various programming languages,
            frameworks, and technologies. We have a deep understanding of the
            latest industry trends and best practices, allowing us to deliver
            innovative and efficient software solutions
          </p>
        </div>
        <Image alt="alts" src="/image2.svg" className="w-2/5 hidden md:block" />
      </div>

      <div className="flex justify-around items-center mb-20">
        <div className="w-full md:w-2/5">
          <h3 className="text-2xl mb-8 font-medium">Quality and Reliability</h3>
          <p className="text-[#2D3748] mb-12">
            We are committed to delivering high-quality software solutions that
            meet the highest standards of performance, reliability, and
            security. Our rigorous quality assurance processes and testing
            methodologies ensure that our clients receive a robust and
            error-free software product that they can rely on.
          </p>
        </div>
        <Image alt="alts" src="/image4.svg" className="w-2/5 hidden md:block" />
      </div>

      <div className="flex justify-around items-center mb-20">
        <Image alt="alts" src="/image3.svg" className="w-2/5 hidden md:block" />
        <div className="w-full md:w-2/5">
          <h3 className="text-2xl mb-8 font-medium">Timely Delivery</h3>
          <p className="text-[#2D3748] mb-12">
            We understand the importance of timely project delivery. Our team
            follows agile development methodologies, breaking down projects into
            manageable sprints and delivering incremental value. This approach
            allows us to deliver projects on time and adapt to evolving
            requirements efficiently.
          </p>
        </div>
      </div>

      <div id="who-we-are" className="flex flex-wrap justify-between">
        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex gap-6 items-start border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image alt="alts" src="/rocket.svg" />
          <div>
            <p className="font-semibold mb-3">UX Driven Engineering</p>
            <p className="text-[#4A5568]">
              Unlike other companies, we are a UX first development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex gap-6 items-start border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image alt="alts" src="/developing.svg" />
          <div>
            <p className="font-semibold mb-3">
              Developing Shared Understanding
            </p>
            <p className="text-[#4A5568]">
              Unlike other companies, we are a UX first development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex gap-6 items-start border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image alt="alts" src="/proven.svg" />
          <div>
            <p className="font-semibold mb-3">
              Proven Experience and Expertise
            </p>
            <p className="text-[#4A5568]">
              Unlike other companies, we are a UX first development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex gap-6 items-start border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image alt="alts" src="/security.svg" />
          <div>
            <p className="font-semibold mb-3">
              Security & Intellectual Property(IP)
            </p>
            <p className="text-[#4A5568]">
              Unlike other companies, we are a UX first development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex gap-6 items-start border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image alt="alts" src="/code-review.svg" />
          <div>
            <p className="font-semibold mb-3">Code Reviews</p>
            <p className="text-[#4A5568]">
              Unlike other companies, we are a UX first development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex gap-6 items-start border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image alt="alts" src="/quality.svg" />
          <div>
            <p className="font-semibold mb-3">Quality Assurance & Testing</p>
            <p className="text-[#4A5568]">
              Unlike other companies, we are a UX first development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
      </div>

      <Technologies />

      <div className="flex flex-col items-center my-16">
        <hr className="bg-pink-500 h-1 w-16 my-6" />
        <p className="text-2xl">How development</p>
        <p className="text-2xl font-semibold">pass through</p>
      </div>

    <Process />

      <div className="flex flex-col md:flex-row lg:flex-row justify-around items-center bg-gradient-to-r from-[#F1F1F5] to-[#E4ECF7] h-72 rounded-[20px]">
        <p className="text-4xl font-bold text-center md:text-left md:w-2/5 lg:w-2/5 lg:min-w-0">
          Do you want to partner with us to scale your business?
        </p>
        <a
          href="mailto:bellxsoftwaresolution@gmail.com?subject=Seeking%20partnership"
          target="_blank"
          className="text-white bg-yellow-400 px-6 py-3 rounded-md mt-6 lg:mt-0"
        >
          <span className="text-xl font-bold">Contact us</span>
        </a>
      </div>
    </div>
  );
}
