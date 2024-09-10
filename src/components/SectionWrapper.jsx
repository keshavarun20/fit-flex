import React from "react";

export default function SectionWrapper(props) {
  return (
    <section id={props.id} className="min-h-screen flex flex-col gap-10">
      <div className="bg-slate-950 py-10 flex flex-col gap-4 justify-center items-center p-4">
        <p className="uppercase font-medium">{props.header}</p>
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {props.title[0]} {props.title[1]}{" "}
          <span className="text-blue-600">{props.title[2]}</span>
        </h2>
      </div>
      <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4">
        {props.children}
      </div>
    </section>
  );
}
