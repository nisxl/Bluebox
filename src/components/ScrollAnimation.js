import React, { useEffect } from "react";

function ScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidd");
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
    <div className="flex text-white flex-col justify-center items-center bg-slate-900">
      <section className="hidd">
        <h1>Hi mom</h1>
        <p>this is my website</p>
      </section>
      <section className="hidd">
        <h2>please buy my product</h2>
        <p>the things I can buy are these</p>
      </section>
    </div>
  );
}

export default ScrollAnimation;
