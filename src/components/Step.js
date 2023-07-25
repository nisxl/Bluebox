import React, { useEffect, useRef } from "react";

function Step() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex flex-col items-center w-full md:w-[50%] justify-center">
          <span className="text-gradient-to-r from-[#0057FF] to-[#AA00FF] w-[510px]">
            WE IDEATE AND ESCORT
          </span>
          <h1 className="w-[510px]">
            Endeavor through simple yet smarter system
          </h1>
          <steps className="w-[510px] flex flex-col gap-4">
            <div className="flex gap-4 hide step">
              <div className="flex flex-col">
                <button className="w-[50px] h-[50px] border-1 border-[#353c44] text-white bg-slate-800 focus:outline-none transition-all duration-500 ease-in-out rounded-full text-lg hover:bg-white hover:text-[#292e34] hover:scale-105 transform">
                  1{" "}
                </button>
                <div className="flex justify-center grow">
                  <div className="self-center mt-4 border-r-2 border-[#c0bcbc] h-16">
                    &nbsp;
                  </div>
                </div>
              </div>
              <div>
                <h2>Creative Campaigns</h2>
                <span>
                  Delivering highly successful campaigns among our business
                  customers.
                </span>
              </div>
            </div>

            <div className="flex gap-4 hide step">
              <div className="flex flex-col">
                <button className="w-[50px] h-[50px] border-1 border-[#353c44] text-white bg-slate-800 focus:outline-none transition-all duration-500 ease-in-out rounded-full text-lg hover:bg-white hover:text-[#292e34] hover:scale-105 transform">
                  2{" "}
                </button>
                <div className="flex justify-center grow">
                  <div className="self-center mt-4 border-r-2 border-[#c0bcbc] h-16">
                    &nbsp;
                  </div>
                </div>
              </div>
              <div>
                <h2>Research Facilitation</h2>
                <span>
                  Delivering highly successful campaigns among our business
                  customers.
                </span>
              </div>
            </div>

            <div className="flex gap-4 hide step">
              <div className="flex flex-col">
                <button className="w-[50px] h-[50px] border-1 border-[#353c44] text-white bg-slate-800 focus:outline-none transition-all duration-500 ease-in-out rounded-full text-lg hover:bg-white hover:text-[#292e34] hover:scale-105 transform">
                  3{" "}
                </button>
                <div className="flex justify-center grow"></div>
              </div>
              <div>
                <h2>Tech-based Solution</h2>
                <span>
                  Digitization based best solution for your product/service
                  portfolio.
                </span>
              </div>
            </div>
          </steps>
        </div>
        <div className="w-full md:w-[50%] object-fill">
          <img src="../images/iphone.png" alt="iPhone" />
        </div>
        <div className="logos ">
          <div className="logo hide">
            <img src="../images/iphone.png" alt="iPhone" />
          </div>

          <div className="logo hide">
            <img src="../images/iphone.png" alt="iPhone" />
          </div>

          <div className="logo hide">
            <img src="../images/iphone.png" alt="iPhone" />
          </div>

          <div className="logo hide">
            <img src="../images/iphone.png" alt="iPhone" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Step;
