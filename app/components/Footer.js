import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import bellxLogo from '../../public/bellx-logo.svg'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 xl:justify-around">
          {/* Column 1 */}
          <div>
            <Image src={bellxLogo} alt="Company Logo" className="w-24" />
            <p className="text-lg mb-3">BellX Software Solutions</p>
            <p className="text-sm">
              Your Agile Tech Partner That Helps You Accelerate Growth
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex justify-center md:block">Links</h3>
            <div className="flex justify-center md:block">
            <ul className="text-sm  grid grid-cols-3 justify-between md:flex md:flex-col md:gap-y-1">
              <li>
                <a href="/about" className=" hover:text-gray-700 hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="/services" className=" hover:text-gray-700 hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/project" className=" hover:text-gray-700 hover:underline">
                  Project
                </a>
              </li>
              <li>
                <a href="/how-it-works" className=" hover:text-gray-700 hover:underline">
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@bellxsoftwaresolution"
                  className=" hover:text-gray-700 hover:underline"
                >
                  Blog
                </a>
              </li>
              <li>
                <a href="#services" className=" hover:text-gray-700 hover:underline">
                  Areas we serve
                </a>
              </li>
            </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact us</h3>
            <p className="text-sm mb-4 max-w-md">
              Have a question or interested in our services? Contact us today
              and let’s start a conversation. We’re here to help you turn your
              ideas into reality
            </p>
            <p className="text-sm">Phone: +251961737319</p>
          </div>
        </div>

        {/* Social media icons */}
        <div className="mt-8 flex justify-center">
          <div className="bg-slate-200 rounded-full p-2 shadow-lg mx-2">
            <a href="https://www.linkedin.com/company/bellx-software-solution/">
              <FaLinkedinIn size={16} />
            </a>
          </div>
          <div className="bg-slate-200 rounded-full p-2 shadow-lg mx-2">
            <a href="https://t.me/bellxsoftwaresolution">
              <FaTelegram size={16} />
            </a>
          </div>
          <div className="bg-slate-200 rounded-full p-2 shadow-lg mx-2">
            <a href="https://www.instagram.com/bellx_software_solution/">
              <FaInstagram size={16} />
            </a>
          </div>
          <div className="bg-slate-200 rounded-full p-2 shadow-lg mx-2">
            <a href="#">
              <FaFacebookF size={16} />
            </a>
          </div>
          <div className="bg-slate-200 rounded-full p-2 shadow-lg mx-2">
            <a href="#">
              <FaTwitter size={16} />
            </a>
          </div>
        </div>
        <p className="text-center mt-8">
          © 2023 Copyright by BellX Software Solution. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
