import React from "react";
import Layout from "../Layout/Layout";
//Section 1
import about_us from "../assets/about_us.png";

function AboutUs() {
  return (
    <Layout>
      <div className="flex flex-col gap-4 max-w-[960px] py-2 pb-8 px-4 md:px-8 mx-auto select-none">
        {/* section 1 */}
        <div className="relative py-2 select-none">
          <img
            className="rounded-md h-[200px] sm:h-[300px] md:h-[400px] w-full object-cover"
            src={about_us}
            alt="About Us"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center px-4">
            <div className="flex flex-col gap-2 text-white max-w-[800px]">
              <p className="text-[24px] sm:text-[36px] md:text-[48px] font-bold">
                We're Innovative Brass
              </p>
              <p className="text-[14px] sm:text-[16px]">
                A modern-day brass manufacturing company with a legacy of
                innovation and excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col gap-7">
          <p className="text-[28px] sm:text-[36px] font-bold text-black">
            Why Choose Innovative Brass?
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-[20px] sm:text-[22px] font-semibold text-black">
              Our Story
            </p>
            <p className="text-[14px] sm:text-[16px] text-black">
              Founded in 1978, Brass Co. has been producing high-quality brass
              and copper products for over 40 years. Our commitment to quality,
              innovation, and sustainability has allowed us to become a trusted
              partner for customers around the globe.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[20px] sm:text-[22px] font-semibold text-black">
              Our Mission
            </p>
            <p className="text-[14px] sm:text-[16px] text-black">
              Our mission is to provide the highest quality brass and copper
              products while minimizing our environmental impact. We are
              committed to sustainable manufacturing practices, continuous
              improvement, and customer satisfaction.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[20px] sm:text-[22px] font-semibold text-black">
              Our Vision
            </p>
            <p className="text-[14px] sm:text-[16px] text-black">
              Our vision is to be the leading manufacturer of high-quality brass
              and copper products. We will achieve this by continuously
              improving our products, processes, and services, while maintaining
              a strong focus on sustainability and customer satisfaction.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[20px] sm:text-[22px] font-bold text-black">
              Our Team
            </p>
            <div className="flex flex-wrap justify-around">
              <div className="flex flex-col items-center gap-2">
                <p className="text-[24px] font-bold text-black">100</p>
                <p className="text-[14px]">Employees</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[24px] font-bold text-black">20</p>
                <p className="text-[14px]">Years of experience</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[24px] font-bold text-black">23</p>
                <p className="text-[14px]">Countries served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
