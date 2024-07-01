import React from "react";
import Layout from "../Layout/Layout";
//Section 1
import section1 from "../assets/section1.png";
//Section 2
import section2_1 from "../assets/section2_1.png";
import section2_2 from "../assets/section2_2.png";
import section2_3 from "../assets/section2_3.png";
//Section 3
import section3_1 from "../assets/section3_1.png";
import section3_2 from "../assets/section3_2.png";
import section3_3 from "../assets/section3_3.png";
//Section 4
import section4 from "../assets/section4.png";

function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-4 max-w-[960px] py-2 pb-8">
        {/* section 1 */}
        <div className="relative py-2 select-none">
          <img className="rounded-md" src={section1} />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center">
            <div className="flex flex-col gap-2 text-white">
              <p className="text-[48px] text font-bold	">Brass Co.</p>
              <p className="text-[16px]">
                We specialize in creating beautiful brass products for your home
                and business. From door hardware to lighting, our team of
                designers and craftsmen make it easy to bring the warmth and
                elegance of brass into your space.
              </p>
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="felx flex-col gap-2">
          <p className="text-[36px] font-bold	text-black">Featured categories</p>
          <div className="flex gap-2">
            {" "}
            <img className="rounded-md cursor-pointer" src={section2_1} />
            <img className="rounded-md cursor-pointer" src={section2_2} />
            <img className="rounded-md cursor-pointer" src={section2_3} />
          </div>
        </div>
        {/* Section 3 */}
        <div className="felx flex-col gap-3">
          <div className="flex flex-col gap-2">
            <p className="text-[36px] font-bold	text-black">Why choose us?</p>
            <p className="text-[16px] font-medium	text-black">
              With over 30 years of experience, we've earned a reputation for
              excellence. Here are a few reasons to consider us for your next
              project.
            </p>
          </div>
          <div className="flex gap-2">
            {" "}
            <img className="rounded-md cursor-pointer" src={section3_1} />
            <img className="rounded-md cursor-pointer" src={section3_2} />
            <img className="rounded-md cursor-pointer" src={section3_3} />
          </div>
        </div>
        {/* section 4*/}
        <div className="relative py-2 select-none">
          <img className="rounded-md" src={section4} />
          <div className="absolute bottom-6 left-6 right-0 flex items-center justify-start">
            <div className="flex flex-col gap-2 text-white">
              <p className="text-[48px] text font-bold	">Our capabilities</p>
              <p className="text-[16px]">
                We offer a wide range of manufacturing services to meet your
                needs.
              </p>
              <button className="text-[16px] text-white bg-[#1A80E5] w-fit px-5 py-2 rounded-md">
                Learn more
              </button>
            </div>
          </div>
        </div>
        {/* section 5*/}
        <div className="flex flex-col gap-2 text-black items-center justify-center py-2 text-center">
          <p className="text-[48px] text font-bold	">Ready to get started?</p>
          <p className="text-[16px]">
            Send us your design files, and we'll provide a free quote within 24
            hours.
          </p>
          <button className="text-[16px] text-white bg-[#1A80E5] w-fit px-5 py-2 rounded-md">
            Contact Us{" "}
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
