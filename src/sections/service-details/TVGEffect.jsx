import React from "react";

const stats = [
  { value: ">1M", label: "Every brand starts" },
  { value: "60%", label: "Every brand starts" },
  { value: "77%", label: "Every brand starts" },
];

export default function TVGEffect({ data }) {
  const { title, pera, impactStats } = data;
  return (
    <section className="flex justify-center items-center py-20 px-4 bg-white">
      <div
        className="rounded-full bg-white shadow-xl flex flex-col justify-center items-center text-center p-10 md:p-20 relative overflow-hidden w-[700px] h-[700px]"
        style={{
          boxShadow: "0 0 120px 20px rgba(0, 204, 255, 0.2)",
          borderRadius: "9999px",
        }}
      >
        <h2 className="font-parkinsans text-h1 font-medium mb-4">
          {title}
        </h2>
        <p className="font- max-w-xl mx-auto mb-10 text-sm md:text-base">
         {pera}
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {impactStats.map((item, index) => (
            <div key={index} className="text-center">
              <div
                className="text-h1 font-parkinsans font-medium text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(101.12deg, #48CAE4 0%, #0070FF 176.3%)",
                }}
              >
                {item.number}
              </div>
              <div className="text-sm md:text-base font-manrope text-[#000000A1] mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
