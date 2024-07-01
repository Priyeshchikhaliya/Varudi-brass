import React from "react";
import Layout from "../Layout/Layout";

//Assets
import phone_icon from "../assets/phone_icon.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";

function ContactUs() {
  return (
    <Layout>
      <div className="select-none flex flex-col gap-4 w-full max-w-[960px] py-2">
        <p className="text-[18px] font-bold">Contact us</p>
        <p className="text-[16px] font-bold">We're here to help</p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="bg-[#F2F0E8] rounded-xl h-[48px] w-[48px] flex justify-center items-center">
              <img src={phone_icon} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <p className=" text-[16px]">+91 90335 15720</p>
              <p className="text-[#96874F] text-[14px]">
                Monday - Friday: 8am - 5pm IST
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-[#F2F0E8] rounded-xl h-[48px] w-[48px] flex justify-center items-center">
              <img src={mail_icon} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <p className=" text-[16px]">General inquiries</p>
              <p className="text-[#96874F] text-[14px]">
                mail@varudi-brass.com
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-2">
            <div className="bg-[#F2F0E8] rounded-xl h-[48px] w-[48px] flex justify-center items-center">
              <img src={location_icon} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <p className=" text-[16px]">Varudi Brass</p>
              <p className="text-[#96874F] text-[14px]">Jamnagar,Gujarat</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
