import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Packages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div>
      <section className="text-gray-600">
        <div className="font-montserrat font-[550] text-lg container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-white ">
            <div className="xl:w-1/3 md:w-1/2 p-6 ">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="p-6 h-[500px] bg-[#c32126] rounded-tl-[50px]"
              >
                <div>
                  <h2 className="text-3xl font-extrabold title-font mb-2 mt-4">
                    Startup Package
                  </h2>
                  <p className="leading-relaxed">
                    A Low Risk solution for SMM growth - perfect for Small
                    Businesses & start-ups
                  </p>
                </div>
                <img src="../images/lion.png" alt="package1" />
              </motion.div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-6 ">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: 0.45 }}
                className=" p-6 h-[500px] bg-[#0573b6] rounded-tl-[50px]"
              >
                <div>
                  <h2 className="text-3xl font-extrabold title-font mb-2 mt-4">
                    Business Package
                  </h2>
                  <p className="leading-relaxed">
                    Modern Cutting edge social strategies - all executed for a
                    reasonable price
                  </p>
                </div>
                <img src="../images/elephant.png" alt="packag21" />
              </motion.div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-6 ">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: 0.45 }}
                className=" p-6 h-[500px] bg-[#5f2a7c] rounded-tl-[50px]"
              >
                <div>
                  <h2 className="text-3xl font-extrabold title-font mb-2 mt-4">
                    Corporate Package
                  </h2>
                  <p className="leading-relaxed">
                    For companies ready for an advance, wide-reaching & dominate
                    appoach to SMM
                  </p>
                </div>
                <img src="../images/fox.png" alt="package3" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Packages;
