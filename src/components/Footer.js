import React from "react";
function Footer() {
  return (
    <div>
      <div className="px-5 py-24 mx-auto bg-[#292d33] text-[#8e999b]">
        <div className="flex flex-col md:flex-row justify-around flex-shrink-0 md:mx-0 mx-auto text-center ">
          <div className="flex flex-col">
            <div>
              <p className="text-[#eec853] hover:text-[#988545] transition-all duration-300 ease-in-out cursor-pointer">
                Create Your Logo
              </p>
              <p>Try Brandmark for free, no account needed</p>
            </div>
            <div className="cursor-pointer">Terms of Services</div>
          </div>
          <div>
            <div>
              <p className="text-[#e65495] hover:text-[#a64571] transition-all duration-300 ease-in-out cursor-pointer">
                Support
              </p>
              <p>Have questions or need help? Start here.</p>
            </div>
            <div className="cursor-pointer">Privacy Policy</div>
          </div>
          <div>
            <p className="text-[#7ec3a4] hover:text-[#7eb596] transition-all duration-300 ease-in-out cursor-pointer">
              Tools
            </p>
            <p>Check out our free tools for color, font and logo design</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
