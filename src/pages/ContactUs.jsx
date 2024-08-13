import React from "react";
import Layout from "../Layout/Layout";

// Assets
import phone_icon from "../assets/phone_icon.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";

function ContactUs() {
  return (
    <Layout>
      <div className="flex flex-col gap-4 max-w-[960px] px-4 py-2 mx-auto">
        <p className="text-[24px] font-bold text-center">Contact Us</p>
        <p className="text-[18px] font-bold text-center">We're here to help</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info Section */}
          <div className="flex gap-4 items-center">
            <div className="bg-[#F2F0E8] rounded-xl h-[48px] w-[48px] flex justify-center items-center">
              <img src={phone_icon} alt="Phone Icon" />
            </div>
            <div>
              <p className="text-[18px] font-semibold">+91 90335 15720</p>
              <p className="text-[14px] text-[#96874F]">
                Monday - Friday: 8am - 5pm IST
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="bg-[#F2F0E8] rounded-xl h-[48px] w-[48px] flex justify-center items-center">
              <img src={mail_icon} alt="Mail Icon" />
            </div>
            <div>
              <p className="text-[18px] font-semibold">General inquiries</p>
              <p className="text-[14px] text-[#96874F]">
                mail@sardar-brass.com
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="bg-[#F2F0E8] rounded-xl h-[48px] w-[48px] flex justify-center items-center">
              <img src={location_icon} alt="Location Icon" />
            </div>
            <div>
              <p className="text-[18px] font-semibold">Sardar Brass</p>
              <p className="text-[14px] text-[#96874F]">Jamnagar, Gujarat</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
