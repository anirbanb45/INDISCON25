import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

type Member = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
};

type Committee = {
  title: string;
  members: Member[];
};

const committees: Committee[] = [
  {
    title: 'Organizing Committee',
    members: [
      {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Chairperson',
        imageUrl: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg',
        socials: {}
      },
      {
        id: 2,
        name: 'Michael Chen',
        role: 'Event Coordinator',
        imageUrl: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg',
        socials: {
        }
      }
    ]
  },
  {
    title: 'Technical Committee',
    members: [
      {
        id: 3,
        name: 'Emma Wilson',
        role: 'Lead Developer',
        imageUrl: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg',
        socials: {
        }
      },
      {
        id: 4,
        name: 'David Kim',
        role: 'Systems Architect',
        imageUrl: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg',
        socials: {
        }
      }
    ]
  }
];

export default function Committee() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900">
          Our Committees
        </h2>
        {committees.map((committee) => (
          <div key={committee.title} className="mb-16 w-full flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-8 text-gray-800 border-b-4 border-blue-500 pb-2">
              {committee.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {committee.members.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center w-80 h-[250px] justify-between"
                >
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="rounded-full object-cover border-4 border-gray-200"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-2 text-gray-800">{member.name}</h4>
                    <p className="text-gray-600 mb-4 font-medium">{member.role}</p>
                    <div className="flex justify-center space-x-4">
                      {Object.entries(member.socials).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
                        >
                          {platform === 'twitter' && <FaTwitter className="text-blue-500 w-6 h-6" />}
                          {platform === 'linkedin' && <FaLinkedin className="text-blue-700 w-6 h-6" />}
                          {platform === 'github' && <FaGithub className="text-gray-800 w-6 h-6" />}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
