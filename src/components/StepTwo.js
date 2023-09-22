import React from "react";

function StepTwo() {
  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row text-xl font-semibold  ">
        <div className="z-1 flex items-center justify-center text-[1.125em] font-bold text-white bg-blue-400 border-0 h-[50px] md:h-[180px] w-[180px] focus:outline-none rounded-md md:rounded-full text-lg">
          Create My Logo
        </div>
        <div className="flex min-h-[120px] gap-3 md:gap-14 px-10 flex-col items-center md:flex-row md:ml-[-25px] z-0 shadow">
          <div className="flex flex-col gap-[10px] items-center">
            <img src="../images/Steps/idea.png" className="h-10 w-10" />
            <span>Ideas</span>
          </div>
          <div>
            <img
              src="../images/arrow3.png"
              className="hidden md:inline h-10 "
            />
          </div>
          <div className="flex flex-col gap-[10px] items-center">
            <img src="../images/Steps/plan.png" className="h-10 w-10" />
            <span>Planning</span>
          </div>
          <div>
            <img
              src="../images/arrow3.png"
              className="hidden md:inline h-10 w-10"
            />
          </div>
          <div className="flex flex-col gap-[10px] items-center">
            <img src="../images/Steps/process.png" className="h-10 w-10" />
            <span>Execution</span>
          </div>
          <div>
            <img src="../images/arrow3.png" className="hidden md:inline h-10" />
          </div>
          <div className="flex flex-col gap-[10px] items-center">
            <img src="../images/Steps/revision.png" className="h-10 w-10" />
            <span>Revise</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
