import React from "react";

function Services() {
  return (
    <div>
      <section className="flex flex-wrap mt-8 bg-slate-50">
        <div className="w-full p-6 lg:w-1/3 lg:order-1">
          <div className="">
            <h1 className="font-bold ">01 </h1>
            <h2 className="text-[#6c005d] font-semibold">Branding</h2>
          </div>
          <div className="border-t-2 pt-2 border-[#0087ca] flex flex-col">
            <span>Logo design</span>
            <span>Brand guidelines</span>
            <span>Brand Identity Development</span>
            <span>Visual Identity Development</span>
            <span>Letterhead and envelope design</span>
            <span>Business card design</span>
          </div>
        </div>
        <img
          className="w-full lg:w-1/3 lg:order-4"
          src="../images/branding.jpg"
        />

        <div className="w-full lg:w-1/3 lg:order-3 p-6">
          <div className="">
            <h1 className="font-bold ">02 </h1>
            <h2 className="text-[#6c005d] font-semibold">Social Media</h2>
          </div>
          <div className="border-t-2 pt-2 border-[#0087ca] flex flex-col">
            Social Media Marketing
            <span>Social media strategy development</span>
            <span>Content creation and curation</span>
            <span>Platform management(Facebook, Instagram)</span>
            <span>Advertising campaign planning and execution </span>
          </div>
        </div>
        <img
          className="w-full lg:w-1/3 lg:order-2"
          src="../images/social.jpg"
        />

        <div className="w-full lg:w-1/3 lg:order-5 p-6">
          <div className="">
            <h1 className="font-bold ">03 </h1>
            <h2 className="text-[#6c005d] font-semibold">Website</h2>
          </div>
          <div className="border-t-2 pt-2 border-[#0087ca] flex flex-col">
            <span>Website design and development</span>
            <span>Mobile responsive design</span>
          </div>
        </div>
        <img
          className="w-full lg:w-1/3 lg:order-6"
          src="../images/website.jpg"
        />

        <div className="w-full lg:w-1/3 lg:order-7 p-6">
          <div className="">
            <h1 className="font-bold ">04 </h1>
            <h2 className="text-[#6c005d] font-semibold">Print Design</h2>
          </div>
          <div className="border-t-2 pt-2 border-[#0087ca] flex flex-col">
            <span>Brochure Design</span>
            <span>Booklet/Catalog Design</span>
            <span>Packaging Design</span>
            <span>Print Advertising Design</span>
          </div>
        </div>
        {/* <img
          className="w-full lg:w-1/3 lg:order-10"
          src="../images/print.jpg"
        /> */}

        <div className="w-full lg:w-1/3 lg:order-9 p-6">
          <div className="">
            <h1 className="font-bold ">05 </h1>
            <h2 className="text-[#6c005d] font-semibold">A-Z Printing</h2>
          </div>
          <div className="border-t-2 pt-2 border-[#0087ca] flex flex-col">
            <span>Printing everything you want</span>
            <span>Brochures, cards, pamphlets, flex, board, etc.</span>
            <span>Search engine optimization (SEO)</span>
            <span>Google Analytics setup and reporting</span>
          </div>
        </div>
        <img className="w-full lg:w-1/3 lg:order-8" src="../images/az.jpg" />
      </section>
    </div>
  );
}

export default Services;
