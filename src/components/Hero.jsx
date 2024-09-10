import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO RISE UP</p>
        <h1 className="font-semibold text-4xl sm:text-5xl ms:text-6xl lg:text-7xl ">
          FIT<span className="text-blue-600">FLEX</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that by joining{" "}
        <span className="text-blue-600 font-medium">Fit Flex</span>, I am fully
        committed to becoming the{" "}
        <span className="text-blue-600 font-medium">
          best version of myself
        </span>
        . I accept all risks associated with achieving a{" "}
        <span className="text-blue-600 font-medium">rock-hard body</span>,
        increased energy, and an undeniable sense of accomplishment. I
        understand that side effects may include{" "}
        <span className="text-blue-600 font-medium">excessive confidence</span>,
        a sudden urge to{" "}
        <span className="text-blue-600 font-medium">flex in mirrors</span>, and
        unsolicited advice on how to achieve a great physique. With great gains
        come great responsibilities!
      </p>
      <button
        onClick={() => {
          window.location.href = "#generate";
        }}
        className="px-8 py-4 rounded-md border-[2px] bg-blue-950 border-blue-600 border-solid text-white tealShadow duration-200"
      >
        <p>Accept & Begin</p>
      </button>
    </div>
  );
}
