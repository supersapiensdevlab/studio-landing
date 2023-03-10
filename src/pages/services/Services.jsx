import React from "react";
import Navbar from "../../components/navbar/Navbar";
import servicesbg from "../../assets/components/services-bg.svg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import MobileNavbar from "../../components/navbar/MobileNavbar";

const Services = () => {
  const options = ["Animation", "Illustration", "Voiceover"];
  const qualityOptions = ["HD", "Ultra HD", "4K"];
  const iterationOptions = ["1", "2", "3"];

  //   const defaultOption = options[0];

  return (
    <div className="w-full lg:flex">
      <div className="lg:block hidden">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <div className="lg:w-4/5 h-screen bg-black lg:ml-auto text-white relative font-primary">
        <img className="" src={servicesbg} alt=""></img>
        <div className="flex flex-col 2xl:w-1/2 lg:w-7/12 md:w-2/3 w-11/12 h-max absolute md:top-28 top-10 left-1/2 -translate-x-1/2 space-y-4">
          <div className="flex flex-col space-y-3 ">
            <p className="text-4xl uppercase font-head">services</p>
            <p className="font-thin md:text-base text-xs font-secondary">
              We offer a wide variety of Services with high quality outputs.{" "}
              <br />
              You can chose what you want and also get an estimate for your
              project.
            </p>
          </div>
          <div className="w-full">
            <Dropdown
              options={options}
              placeholder="Choose a Service"
              controlClassName="myControlclass"
              menuClassName="myMenuClassName"
              arrowClassName="myArrowClassName"
            />
          </div>
          <div className="w-full flex space-x-3">
            <div className="w-1/2">
              <Dropdown
                options={qualityOptions}
                placeholder="Quality"
                controlClassName="myControlclass"
                menuClassName="myMenuClassName"
                arrowClassName="myArrowClassName"
              />
            </div>
            <div className="w-1/2">
              <Dropdown
                options={iterationOptions}
                placeholder="Iterations"
                controlClassName="myControlclass"
                menuClassName="myMenuClassName"
                arrowClassName="myArrowClassName"
              />
            </div>
          </div>
          <div className="w-full">
            <input
              type="text"
              className="h-36 w-full rounded-lg bg-[#1e1e1e] md:p-6 p-4"
              placeholder="Any additional instructions"
            />
          </div>
          <div className="w-full">
            <button className="h-10 w-20 text-center bg-primary rounded-lg block ml-auto">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
