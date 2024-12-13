import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import section1 from "../assets/section1.png";
import section1_1 from "../assets/section1_1.png";
import section2_1 from "../assets/section2_1.png";
import section2_2 from "../assets/section2_2.png";
import section2_3 from "../assets/section2_3.png";
import section3_1 from "../assets/section3_1.png";
import section3_2 from "../assets/section3_2.png";
import section3_3 from "../assets/section3_3.png";
import section4 from "../assets/section4.png";

function Home() {
  const images = [section1, section1_1];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Layout>
      <Helmet>
        <title>
          Home | Sardar Industries - Leading Brass Products Manufacturer
        </title>
        <meta
          name="description"
          content="Welcome to Sardar Industries, your trusted partner in high-quality brass and copper products. Explore our wide range of brass fittings, hardware, and custom solutions."
        />
        <link rel="canonical" href="https://yourwebsite.com/home" />
        <meta
          property="og:title"
          content="Sardar Industries - Leading Brass Products Manufacturer"
        />
        <meta
          property="og:description"
          content="Discover our high-quality brass products and custom manufacturing services. Contact us to learn more."
        />
        <meta property="og:image" content={section1} />
        <meta property="og:url" content="https://yourwebsite.com/home" />
      </Helmet>

      <div className="flex flex-col w-full select-none">
        {/* Section 1 */}
        <div className="relative h-screen w-full">
          <div className="absolute inset-0">
            {images.map((image, index) => (
              <img
                key={index}
                className={`w-full h-full object-cover absolute transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                src={image}
                alt={`Carousel Image ${index + 1}`}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4 bg-black/30">
            <div className="flex flex-col gap-2 text-white max-w-[1200px]">
              {currentIndex === 0 ? (
                <>
                  <p className="text-[28px] sm:text-[42px] md:text-[56px] font-bold">
                    Brass Co.
                  </p>
                  <p className="text-[16px] sm:text-[18px] md:text-[20px] max-w-[800px] mx-auto">
                    We specialize in creating beautiful brass products for your
                    home and business. From door hardware to lighting, our team
                    of designers and craftsmen make it easy to bring the warmth
                    and elegance of brass into your space.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[28px] sm:text-[42px] md:text-[56px] font-bold">
                    Crafting the finest brass in the world
                  </p>
                  <p className="text-[16px] sm:text-[18px] md:text-[20px] max-w-[800px] mx-auto">
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
        <div className="w-full flex flex-col justify-center bg-white px-4 md:px-8 lg:px-16 py-16">
          <h2 className="text-[28px] sm:text-[42px] font-bold text-black mb-8">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            <div className="w-full h-[300px] md:h-[400px] cursor-pointer transition-all duration-200 transform hover:scale-105">
              <img
                src={section2_1}
                alt="High-quality Brass Products"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[300px] md:h-[400px] cursor-pointer transition-all duration-200 transform hover:scale-105">
              <img
                src={section2_2}
                alt="Custom Brass Fittings"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[300px] md:h-[400px] cursor-pointer transition-all duration-200 transform hover:scale-105">
              <img
                src={section2_3}
                alt="Decorative Brass Hardware"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-full flex flex-col justify-center bg-gray-50 px-4 md:px-8 lg:px-16 py-16">
          <h2 className="text-[28px] sm:text-[42px] font-bold text-black mb-4">
            Why Choose Us?
          </h2>
          <p className="text-[16px] sm:text-[18px] font-medium text-black max-w-[800px] mb-8">
            With over 30 years of experience, we&apos;ve earned a reputation for
            excellence. Here are a few reasons to consider us for your next
            project.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            <div className="w-full h-[300px] md:h-[400px] cursor-pointer transition-all duration-200 transform hover:scale-105">
              <img
                src={section3_1}
                alt="Quality Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[300px] md:h-[400px] cursor-pointer transition-all duration-200 transform hover:scale-105">
              <img
                src={section3_2}
                alt="Expert Design Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[300px] md:h-[400px] cursor-pointer transition-all duration-200 transform hover:scale-105">
              <img
                src={section3_3}
                alt="Trusted Global Partner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="relative h-screen w-full">
          <img
            className="w-full h-full object-cover"
            src={section4}
            alt="Our Manufacturing Capabilities"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-4 md:px-8 lg:px-16">
            <h2 className="text-[28px] sm:text-[42px] md:text-[56px] font-bold text-white mb-4">
              Our Capabilities
            </h2>
            <p className="text-[16px] sm:text-[18px] text-white mb-6 max-w-[600px]">
              We offer a wide range of manufacturing services to meet your
              needs.
            </p>
            <Link to="/about">
              <button className="text-[16px] sm:text-[18px] text-white bg-[#1A80E5] px-6 py-3 hover:bg-[#1666B8] transition-colors">
                Learn more
              </button>
            </Link>
          </div>
        </div>

        {/* Section 5 */}
        <div className="w-full flex flex-col items-center justify-center bg-white text-center px-4 py-16">
          <h2 className="text-[28px] sm:text-[42px] md:text-[56px] font-bold text-black mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[16px] sm:text-[18px] text-black max-w-[600px] mb-8">
            Send us your design files, and we&apos;ll provide a free quote
            within 24 hours.
          </p>
          <Link to="/contact-us">
            <button className="text-[16px] sm:text-[18px] text-white bg-[#1A80E5] px-6 py-3 hover:bg-[#1666B8] transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
