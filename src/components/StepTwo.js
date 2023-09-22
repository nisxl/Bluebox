import React from "react";

function StepTwo() {
  return (
    <div className="my-10">
      <div className="flex items-center">
        <div className="z-1 flex items-center justify-center text-[1.125em] font-bold text-white bg-blue-400 border-0 h-[160px] w-[160px] focus:outline-none rounded-full text-lg">
          Create My Logo
        </div>
        <div className="flex h-28 gap-10 px-10 flex-col items-center md:flex-row ml-[-25px] z-0 shadow">
          <div className="flex flex-col gap-2 items-center">
            <img src="../images/Steps/idea.png" className="h-10 w-10" />
            <span>Ideas</span>
          </div>
          <div>
            <img src="../images/arrow3.png" className="h-10 " />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src="../images/Steps/plan.png" className="h-10 w-10" />
            <span>Planning</span>
          </div>
          <div>
            <img src="../images/arrow3.png" className="h-10 w-10" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src="../images/Steps/process.png" className="h-10 w-10" />
            <span>Execution</span>
          </div>
          <div>
            <img src="../images/arrow3.png" className="h-10" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src="../images/Steps/revision.png" className="h-10 w-10" />
            <span>Revise</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
