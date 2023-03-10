import React from "react";
import Navbar from "../../components/navbar/Navbar";
import contactbg from "../../assets/components/contact-bg.svg";
import mail from "../../assets/icons/mail.svg";
import contact from "../../assets/icons/contact.svg";
import website from "../../assets/icons/website.svg";
import MobileNavbar from "../../components/navbar/MobileNavbar";

const Contact = () => {
  return (
    <div className="w-full lg:flex overflow-y-hidden">
      <div className="lg:block hidden">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <div className="lg:w-4/5 h-screen bg-black lg:ml-auto text-white relative font-tertiary">
        <img className="absolute right-0" src={contactbg} alt=""></img>
        <div className="flex flex-col 2xl:w-1/2 lg:w-7/12 md:w-2/3 w-11/12 h-max absolute md:top-28 top-10 left-1/2 -translate-x-1/2  xl:space-y-5 lg:space-y-6 space-y-5">
          <div className="flex -space-x-6">
            <img src={mail} alt="" className="z-10"></img>
            <div className="relative bg-[#1e1e1e] w-full  lg:h-28 h-24 flex flex-col justify-center p-5 md:px-10 px-8 rounded-lg  font-thin underline md:text-base text-sm">
              <p>Taher@postofficestudios.com</p>
              <p>takemymoney@postofficestudios.com</p>
            </div>
          </div>
          <div className="flex -space-x-6">
            <img src={contact} alt="" className="z-10"></img>
            <div className="relative bg-[#1e1e1e] w-full  lg:h-28 h-24 flex flex-col justify-center p-5 md:px-10 px-8 rounded-lg  font-thin md:text-base text-sm">
              <p>+91 9876543210</p>
              <p>022 25869746</p>
            </div>
          </div>
          <div className="flex -space-x-6">
            <img src={website} alt="" className="z-10"></img>
            <div className="relative bg-[#1e1e1e] w-full  lg:h-28 h-24 flex flex-col justify-center p-5 md:px-10 px-8 rounded-lg  font-thin md:text-base text-sm ">
              <p>
                11th Floor, Discovery of India Building, Nehru Centre, Dr Annie
                Besant Rd, Worli, Mumbai, Maharashtra 400018
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
