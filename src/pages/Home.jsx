import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
// Section 1
import section1 from "../assets/section1.png";
import section1_1 from "../assets/section1_1.png";
// Section 2
import section2_1 from "../assets/section2_1.png";
import section2_2 from "../assets/section2_2.png";
import section2_3 from "../assets/section2_3.png";
// Section 3
import section3_1 from "../assets/section3_1.png";
import section3_2 from "../assets/section3_2.png";
import section3_3 from "../assets/section3_3.png";
// Section 4
import section4 from "../assets/section4.png";

function Home() {
  const images = [section1, section1_1];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <Layout>
      <div className="flex flex-col gap-4 max-w-[960px] py-2 pb-8 select-none mx-auto px-4">
        {/* Section 1 */}
        <div className="relative py-2 select-none">
          <div className="relative w-full h-[400px] overflow-hidden">
            {images.map((image, index) => (
              <img
                key={index}
                className={`rounded-md w-full h-full absolute transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                src={image}
                alt="Carousel"
              />
            ))}
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center px-4">
            <div className="flex flex-col gap-2 text-white max-w-[800px]">
              {currentIndex === 0 ? (
                <>
                  <p className="text-[24px] sm:text-[36px] md:text-[48px] font-bold">
                    Brass Co.
                  </p>
                  <p className="text-[14px] sm:text-[16px]">
                    We specialize in creating beautiful brass products for your
                    home and business. From door hardware to lighting, our team
                    of designers and craftsmen make it easy to bring the warmth
                    and elegance of brass into your space.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[24px] sm:text-[36px] md:text-[48px] font-bold">
                    Crafting the finest brass in the world
                  </p>
                  <p className="text-[14px] sm:text-[16px]">
                    Brass Co. is a leading manufacturer of high-quality brass
                    and copper products. Our passion for craftsmanship and
                    dedication to excellence has made us a trusted partner for
                    customers around the globe.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="flex flex-col gap-2">
          <p className="text-[24px] sm:text-[36px] font-bold text-black">
            Featured categories
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center">
            <div className="rounded-md cursor-pointer w-full sm:w-auto transition-all duration-200 transform hover:scale-105">
              <img src={section2_1} alt="Section 2-1" />
            </div>
            <div className="rounded-md cursor-pointer w-full sm:w-auto transition-all duration-200 transform hover:scale-105">
              <img src={section2_2} alt="Section 2-2" />
            </div>
            <div className="rounded-md cursor-pointer w-full sm:w-auto transition-all duration-200 transform hover:scale-105">
              <img src={section2_3} alt="Section 2-3" />
            </div>
          </div>
        </div>
        {/* Section 3 */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <p className="text-[24px] sm:text-[36px] font-bold text-black">
              Why choose us?
            </p>
            <p className="text-[14px] sm:text-[16px] font-medium text-black">
              With over 30 years of experience, we've earned a reputation for
              excellence. Here are a few reasons to consider us for your next
              project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center">
            <div className="rounded-md cursor-pointer w-full sm:w-auto transition-all duration-200 transform hover:scale-105">
              <img src={section3_1} alt="Section 3-1" />
            </div>
            <div className="rounded-md cursor-pointer w-full sm:w-auto transition-all duration-200 transform hover:scale-105">
              <img src={section3_2} alt="Section 3-2" />
            </div>
            <div className="rounded-md cursor-pointer w-full sm:w-auto transition-all duration-200 transform hover:scale-105">
              <img src={section3_3} alt="Section 3-3" />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="relative py-2 select-none">
          <img
            className="rounded-md h-[400px] w-full object-cover"
            src={section4}
            alt="Section 4"
          />
          <div className="absolute bottom-6 left-6 right-0 flex items-center justify-start px-4">
            <div className="flex flex-col gap-2 text-white">
              <p className="text-[24px] sm:text-[36px] md:text-[48px] font-bold">
                Our capabilities
              </p>
              <p className="text-[14px] sm:text-[16px]">
                We offer a wide range of manufacturing services to meet your
                needs.
              </p>
              <Link to="/about">
                <button className="text-[14px] sm:text-[16px] text-white bg-[#1A80E5] w-fit px-5 py-2 rounded-md">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Section 5 */}
        <div className="flex flex-col gap-2 text-black items-center justify-center py-2 text-center">
          <p className="text-[24px] sm:text-[36px] md:text-[48px] font-bold">
            Ready to get started?
          </p>
          <p className="text-[14px] sm:text-[16px]">
            Send us your design files, and we'll provide a free quote within 24
            hours.
          </p>
          <Link to="/contact-us">
            <button className="text-[14px] sm:text-[16px] text-white bg-[#1A80E5] w-fit px-5 py-2 rounded-md">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
