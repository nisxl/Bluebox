import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  const instagramProfileUrl = "https://www.instagram.com/bluebox__co/";
  const facebookProfileUrl = "https://www.facebook.com/your_username/";
  const linkedInProfileUrl = "https://www.linkedin.com/in/your_username/";

  return (
    <div>
      <div className="bg-black pb-20 pt-10 text-white flex flex-col">
        <div className="self-center text-5xl md:text-9xl font-extrabold m-4 ">
          Bluebox
        </div>

        <div className="flex flex-col md:flex-row mx-20 border-t-2 border-[#4a4a4a] pt-10">
          <div className="flex flex-1 gap-2">
            <ion-icon name="logo-facebook"></ion-icon>

            <a
              href={instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
          <div className="flex flex-1 gap-3 justify-self-center">
            <Link className="no-underline text-inherit" to={"/"}>
              <span>About</span>
            </Link>
            <Link className="no-underline text-inherit" to={"/contact"}>
              <span>Contact</span>
            </Link>
            <span>Case Studies</span>
            <span>Blog</span>
          </div>
          <div className="  text-[12px] ">
            Proudly created in Nepal. <br />
            All Right Reserved, All Wrong Reversed.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
