import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Swoles <span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
      I hereby acknowledge that by pursuing this fitness regimen, I may become{" "}
        <span className="text-blue-400 font-medium">
          {" "}
          incredibly muscular
        </span>{" "}
        accepting all risks associated with turning into a{" "}
        <span className="text-blue-400 font-medium"> local giant </span>,
        potentially afflicted with severe body dysmorphia, and unable to fit through doors.
      </p>
      <Button func={()=>{
        window.location.href = '#generator'
      }} text = {"Accept & Begin"}/>
    </div>
  );
}

export default Hero;
