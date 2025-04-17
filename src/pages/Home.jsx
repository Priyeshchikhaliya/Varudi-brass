import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import section1 from "../assets/section1.png";
import section1_1 from "../assets/section1_1.png";
import section2_1 from "../assets/products/transformer-fittings/Products/2.jpg";
import section2_2 from "../assets/products/brass-auto-parts/Products/8.jpg";
import section2_3 from "../assets/products/sanatory-components/Products/2.jpeg";
import section2_4 from "../assets/products/brass-auto-parts/Products/9.jpeg";
import section3_1 from "../assets/products/electrical-components/Products/3.jpg";
import section3_2 from "../assets/products/electrical-components/Products/6.jpg";
import section3_3 from "../assets/products/brass-auto-parts/Products/4.jpg";
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
        {/* Featured Categories Section */}
        <div className="w-full px-2 sm:px-4 py-12 md:py-16">
          <div className="w-full max-w-screen-2xl mx-auto">
            <h2 className="text-[28px] sm:text-[38px] font-bold text-gray-900 mb-10 px-2">
              Featured Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Category Card 1 */}
              <Link to="/products/Transformer%20fittings">
                <div className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="h-[280px] md:h-[320px] overflow-hidden">
                    <img
                      src={section2_1}
                      alt="Precision Brass Components"
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-4 py-3 bg-gray-100 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Precision Brass Components
                    </h3>
                  </div>
                </div>
              </Link>

              {/* Category Card 2 */}
              <Link to="/products/Brass%20auto%20parts">
                <div className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="h-[280px] md:h-[320px] overflow-hidden">
                    <img
                      src={section2_2}
                      alt="Premium Brass Fittings"
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-4 py-3 bg-gray-100 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Premium Brass Fittings
                    </h3>
                  </div>
                </div>
              </Link>

              {/* Category Card 3 */}
              <Link to="/products/Sanatory%20components">
                <div className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="h-[280px] md:h-[320px] overflow-hidden">
                    <img
                      src={section2_3}
                      alt="Custom Machined Parts"
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-4 py-3 bg-gray-100 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Custom Machined Parts
                    </h3>
                  </div>
                </div>
              </Link>

              {/* Category Card 4 */}
              <Link to="/products/Brass%20auto%20parts">
                <div className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="h-[280px] md:h-[320px] overflow-hidden">
                    <img
                      src={section2_4}
                      alt="Premium Brass Fittings"
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-4 py-3 bg-gray-100 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Premium Brass Auto Parts
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full px-2 sm:px-4 py-12 md:py-16">
          <div className="w-full max-w-screen-2xl mx-auto">
            <div className="px-2">
              <h2 className="text-[28px] sm:text-[38px] font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-700 mb-10 max-w-3xl">
                With over 30 years of experience, we've earned a reputation for
                excellence. Here are a few reasons to consider us for your next
                project.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Reason Card 1 */}
              <Link to="/products/Electrical%20and%20Ground%20accessories">
                <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="h-[240px] md:h-[280px] overflow-hidden">
                    <img
                      src={section3_1}
                      alt="Precision Craftsmanship"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="px-5 py-4 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Precision Craftsmanship
                    </h3>
                    <p className="text-gray-600">
                      Our skilled artisans ensure every product meets the
                      highest standards of quality and durability.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Reason Card 2 */}
              <Link to="/products/Electrical%20and%20Ground%20accessories">
                <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="h-[240px] md:h-[280px] overflow-hidden">
                    <img
                      src={section3_2}
                      alt="Custom Solutions"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="px-5 py-4 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Custom Solutions
                    </h3>
                    <p className="text-gray-600">
                      We specialize in creating bespoke brass components
                      tailored to your exact specifications.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Reason Card 3 */}
              <Link to="/products/Brass%20auto%20parts">
                <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="h-[240px] md:h-[280px] overflow-hidden">
                    <img
                      src={section3_3}
                      alt="Industry Expertise"
                      className="w-full h-full object-contain rotate-90"
                    />
                  </div>
                  <div className="px-5 py-4 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Industry Expertise
                    </h3>
                    <p className="text-gray-600">
                      Our decades of experience allow us to deliver superior
                      products across various industries.
                    </p>
                  </div>
                </div>
              </Link>
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
