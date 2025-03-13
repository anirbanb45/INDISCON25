"use client";

import Image from "next/image";

const partners = [
  {
    name: "TechCorp",
    logo: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg",
  },
  {
    name: "InnovateCo",
    logo: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg",
  },
  {
    name: "FutureTech",
    logo: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg",
  },
  {
    name: "NextGen Systems",
    logo: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg",
  },
];

export default function Partners() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-white opacity-10 transform -skew-y-12"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-black text-center drop-shadow-lg">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6 flex flex-col items-center justify-center transform transition duration-500 hover:scale-110  hover:shadow-2xl"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={96}
                height={96}
                className="object-contain mb-4"
              />
              <h4 className="text-xl font-semibold text-black">{partner.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
