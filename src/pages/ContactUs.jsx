import React from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
import Layout from "../Layout/Layout";

// Assets
import phone_icon from "../assets/phone_icon.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";

function ContactUs() {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Sardar Industries - Get in Touch</title>
        <meta
          name="description"
          content="Get in touch with Sardar Industries for all your inquiries about high-quality brass products. Contact us via phone, email, or visit us in Jamnagar, Gujarat."
        />
        <link rel="canonical" href="https://yourwebsite.com/contact-us" />
        <meta property="og:title" content="Contact Sardar Industries" />
        <meta
          property="og:description"
          content="Reach out to Sardar Industries for more information on our products and services. We're here to help with your brass product needs."
        />
        <meta property="og:url" content="https://yourwebsite.com/contact-us" />
      </Helmet>

      <div className="flex flex-col gap-4 max-w-[960px] px-4 py-2 mx-auto">
        <h1 className="text-[24px] font-bold text-center">Contact Us</h1>
        <h2 className="text-[18px] font-bold text-center">
          We're Here to Help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info Section */}
          <div className="flex gap-4 items-center">
            <div className="bg-[#F2F0E8] rounded-xl h-[48px] w-[48px] flex justify-center items-center">
              <img src={phone_icon} alt="Phone Icon - Contact us by phone" />
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
              <img src={mail_icon} alt="Mail Icon - Contact us via email" />
            </div>
            <div>
              <p className="text-[18px] font-semibold">General Inquiries</p>
              <p className="text-[14px] text-[#96874F]">
                <a
                  href="mailto:mail@sardar-brass.com"
                  className="hover:underline"
                >
                  mail@sardar-brass.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="bg-[#F2F0E8] rounded-xl h-[48px] w-[48px] flex justify-center items-center">
              <img
                src={location_icon}
                alt="Location Icon - Visit us in Jamnagar, Gujarat"
              />
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
