// import React, { useState, useEffect } from "react";
// import { BiSolidQuoteAltLeft } from "react-icons/bi";
// import { ImQuotesRight } from "react-icons/im";

// function Testimonials() {
//   const [slideIndex, setSlideIndex] = useState(1);

//   const plusSlides = (n) => {
//     showSlides(slideIndex + n);
//   };

//   const currentSlide = (n) => {
//     showSlides(n);
//   };

//   useEffect(() => {
//     showSlides(slideIndex);
//   }, []);

//   const showSlides = (n) => {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {
//       n = 1;
//     }
//     if (n < 1) {
//       n = slides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[n - 1].style.display = "block";
//     dots[n - 1].className += " active";
//     setSlideIndex(n);
//   };

//   return (
//     <div className="h-[400px] flex flex-col pb-4">
//       <div className="slideshow-container">
//         <div className={`mySlides fade ${slideIndex === 1 ? "show" : ""}`}>
//           <div className="flex flex-col items-center">
//             <p className="flex gap-8 items-center text-[20px] text-white font-medium">
//               <span className="text-[#FBEDCD] text-[40px] ">
//                 <BiSolidQuoteAltLeft />{" "}
//               </span>
//               <span className="text-white">op bhai op</span>
//               <span className="text-[#FBEDCD] text-[40px] ">
//                 <ImQuotesRight />
//               </span>
//             </p>

//             <img src="../../images/gril.png" className="w-8 h-8" />
//             <div className="text-[#4A1D1F] font-semibold text-[16px] dark:text-[#FBEDCD]">
//               doramone
//             </div>
//           </div>
//         </div>

//         <div className={`mySlides fade ${slideIndex === 2 ? "show" : ""}`}>
//           <div className="flex flex-col items-center">
//             <p className="flex gap-8 items-center text-[20px] text-[#656562] font-medium">
//               <span className="text-[#FBEDCD] text-[40px] ">
//                 <BiSolidQuoteAltLeft />{" "}
//               </span>
//               nice one broooooooooooooooo
//               <span className="text-[#FBEDCD] text-[40px] ">
//                 <ImQuotesRight />
//               </span>
//             </p>

//             <img src="../../images/gril.png" className="w-8 h-8" />
//             <div className="text-[#4A1D1F] font-semibold text-[16px] dark:text-[#FBEDCD]">
//               doramone
//             </div>
//           </div>
//         </div>

//         <div className={`mySlides fade ${slideIndex === 3 ? "show" : ""}`}>
//           <div className="flex flex-col items-center">
//             <p className="flex gap-8 items-center text-[20px] text-[#656562] font-medium">
//               <span className="text-[#FBEDCD] text-[40px] ">
//                 <BiSolidQuoteAltLeft />{" "}
//               </span>
//               op bhai op
//               <span className="text-[#FBEDCD] text-[40px] ">
//                 <ImQuotesRight />
//               </span>
//             </p>

//             <img src="../../images/gril.png" className="w-8 h-8" />
//             <div className="text-[#4A1D1F] font-semibold text-[16px] dark:text-[#FBEDCD]">
//               doramone
//             </div>
//           </div>
//         </div>

//         <a className="prev" onClick={() => plusSlides(-1)}>
//           &#10094;
//         </a>
//         <a className="next" onClick={() => plusSlides(1)}>
//           &#10095;
//         </a>
//       </div>
//       <br />

//       <div style={{ textAlign: "center" }}>
//         <span
//           className={`dot ${slideIndex === 1 ? "active" : ""}`}
//           onClick={() => currentSlide(1)}
//         ></span>
//         <span
//           className={`dot ${slideIndex === 2 ? "active" : ""}`}
//           onClick={() => currentSlide(2)}
//         ></span>
//         <span
//           className={`dot ${slideIndex === 3 ? "active" : ""}`}
//           onClick={() => currentSlide(3)}
//         ></span>
//       </div>
//     </div>
//   );
// }

// export default Testimonials;
