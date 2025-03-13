import React from 'react';
import Image from 'next/image';

type Speaker = {
  id: number;
  name: string;
  imageUrl: string;
  introduction: string;
};

const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Dr. Jane Smith',
    imageUrl: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg',
    introduction: 'Dr. Jane Smith is a renowned AI researcher with over 20 years of experience in machine learning and robotics.'
  },
  {
    id: 2,
    name: 'Prof. John Doe',
    imageUrl: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg',
    introduction: 'Prof. John Doe is a cybersecurity expert specializing in ethical hacking and digital forensics.'
  }
];

export default function Speakers() {
  return (
    <section className="relative py-20  overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
          Our Speakers
        </h2>
        
        {speakers.map((speaker, index) => (
          <div 
            key={speaker.id} 
            className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="w-full md:w-1/3 flex-shrink-0 overflow-hidden">
              <Image
                src={speaker.imageUrl}
                alt={speaker.name}
                width={400}
                height={250}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3 md:px-8 text-center md:text-left">
              <h4 className="text-3xl font-bold text-gray-800">{speaker.name}</h4>
              <p className="text-lg text-slate-900 mt-4 font-semibold leading-relaxed">{speaker.introduction}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}