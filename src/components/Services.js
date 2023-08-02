import React from "react";

function Services() {
  return (
    <div>
      <section className="flex flex-wrap ">
        <div className="w-full lg:w-1/3 lg:order-1">
          01 Branding Logo Design
        </div>
        <img
          className="w-full lg:w-1/3 lg:order-4"
          src="../images/branding.jpg"
        />

        <div className="w-full lg:w-1/3 lg:order-3">
          02 Branding Logo Design
        </div>
        <img
          className="w-full lg:w-1/3 lg:order-2"
          src="../images/social.jpg"
        />

        <div className="w-full lg:w-1/3 lg:order-5">
          03 Branding Logo Design
        </div>
        <img
          className="w-full lg:w-1/3 lg:order-6"
          src="../images/website.jpg"
        />

        <div className="w-full lg:w-1/3 lg:order-7">
          04 Branding Logo Design
        </div>
        <img
          className="w-full lg:w-1/3 lg:order-10"
          src="../images/print.jpg"
        />

        <h3 className="w-full lg:w-1/3 lg:order-9">05 Branding Logo Design</h3>
        <img className="w-full lg:w-1/3 lg:order-8" src="../images/az.jpg" />
      </section>
    </div>
  );
}

export default Services;
