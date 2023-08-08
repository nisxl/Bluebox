import React from "react";
import { Element } from "react-scroll";

function Packages() {
  return (
    <div>
      <section class="text-gray-600">
        <div className="font-montserrat font-[550] text-lg container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-white ">
            <div class="xl:w-1/3 md:w-1/2 p-6 ">
              <div class="p-6 h-[500px] bg-[#c32126] rounded-tl-[50px]">
                <div>
                  <h2 class="text-3xl font-extrabold title-font mb-2 mt-4">
                    Startup Package
                  </h2>
                  <p class="leading-relaxed">
                    A Low Risk solution for SMM growth - perfect for Small
                    Businesses & start-ups
                  </p>
                </div>
                <img src="../images/lion.png" />
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-6 ">
              <div class=" p-6 h-[500px] bg-[#0573b6] rounded-tl-[50px]">
                <div>
                  <h2 class="text-3xl font-extrabold title-font mb-2 mt-4">
                    Business Package
                  </h2>
                  <p class="leading-relaxed">
                    Modern Cutting edge social strategies - all executed for a
                    reasonable price
                  </p>
                </div>
                <img src="../images/elephant.png" />
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-6 ">
              <div class=" p-6 h-[500px] bg-[#5f2a7c] rounded-tl-[50px]">
                <div>
                  <h2 class="text-3xl font-extrabold title-font mb-2 mt-4">
                    Corporate Package
                  </h2>
                  <p class="leading-relaxed">
                    For companies ready for an advance, wide-reaching & dominate
                    appoach to SMM
                  </p>
                </div>
                <img src="../images/fox.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Packages;
