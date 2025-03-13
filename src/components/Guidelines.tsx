"use client"

import Image from "next/image"
import { useState } from "react"

export default function PaperSubmissionGuidelines() {
  const [activeTab, setActiveTab] = useState<"paper" | "special">("paper")

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
        Paper Submission Guidelines - INDISCON 2025
      </h1>

      {/* Tab navigation - moved to upper section */}
      <div className="flex justify-center border-b border-gray-200 mb-6">
        <button
          className={`py-3 px-6 font-medium ${
            activeTab === "paper" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("paper")}
        >
          Paper Submission
        </button>
        <button
          className={`py-3 px-6 font-medium ${
            activeTab === "special"
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("special")}
        >
          Special Session Proposal
        </button>
      </div>

      {/* Header with logos - changes based on active tab */}
      <div className="mb-8">
        {activeTab === "paper" ? (
          <Image
            src="https://res.cloudinary.com/dk6m1qejk/image/upload/v1741770571/IEEE/rj7opdxgp33bmbigosww.png"
            alt="INDISCON 2025 Conference Call for Papers"
            width={1000}
            height={1200}
            className="w-full h-auto rounded-lg shadow-md"
          />
        ) : (
          <Image
            src="https://res.cloudinary.com/dk6m1qejk/image/upload/v1741770487/IEEE/cd5bacpbuz6r8botpswd.png"
            alt="INDISCON 2025 Special Session Proposal"
            width={1000}
            height={300}
            className="w-full h-auto rounded-lg shadow-md"
          />
        )}
      </div>

      {/* Paper Submission Guidelines */}
      {activeTab === "paper" && (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Conference Overview</h2>
            <p className="mb-4">
              INDISCON is the flagship annual international conference of the IEEE India Council, organized by an IEEE
              Subsection in India. The 6th IEEE India Council International Subsection Conference (INDISCON 2025) is
              proudly hosted by the IEEE Rourkela Subsection in collaboration with the IEEE India Council from 21-23,
              August 2025, at the prestigious National Institute of Technology Rourkela.
            </p>
            <p>
              With a focus on &quot;Smart and Sustainable Technologies for Society,&quot; INDISCON 2025 aims to bring together
              leading academicians, researchers, industry experts, and scholars to exchange insights, share
              breakthroughs, and foster collaborations in pioneering technological advancements.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Technical Tracks</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Track 1:</strong> AI & ML, Data Science
                  </li>
                  <li>
                    <strong>Track 2:</strong> Sensors, Instrumentation, Control and Automation
                  </li>
                  <li>
                    <strong>Track 3:</strong> Network and Hardware Security, Cryptography, and Block chain Technology
                  </li>
                  <li>
                    <strong>Track 4:</strong> Neuromorphic, Quantum Computing, Parallel and Distributed computing and
                    Sustainable Computing
                  </li>
                  <li>
                    <strong>Track 5:</strong> Optical/RF/Microwave/Radar/Terahertz Technologies
                  </li>
                  <li>
                    <strong>Track 6:</strong> VLSI and Embedded Systems, Semiconductor Devices, Circuits, MEMS
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Track 7:</strong> Robotics, UAV, and Autonomous Vehicle
                  </li>
                  <li>
                    <strong>Track 8:</strong> Signal, Image and Multimedia Processing, Digital Healthcare
                  </li>
                  <li>
                    <strong>Track 9:</strong> Next Generation Communication Technologies and Networks
                  </li>
                  <li>
                    <strong>Track 10:</strong> Power Electronics and Power Systems
                  </li>
                  <li>
                    <strong>Track 11:</strong> Electric Vehicles, Sustainable Technologies
                  </li>
                  <li>
                    <strong>Track 12:</strong> IoT, Cyber Physical Systems, and Industry4.0
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Important Dates</h2>
            <ul className="space-y-2">
              <li>
                <strong>Paper Submission Starts:</strong> 01-12-2024
              </li>
              <li>
                <strong>Paper Submission Ends:</strong> 30-04-2025
              </li>
              <li>
                <strong>Notification of Acceptance:</strong> 31-05-2025
              </li>
              <li>
                <strong>Camera-ready Submission:</strong> 20-06-2025
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Submission Guidelines</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Prospective authors are invited to submit their original research articles to any of the technical
                tracks.
              </li>
              <li>All papers must be submitted via Microsoft CMT.</li>
              <li>
                Accepted and presented papers will be submitted to IEEE Xplore for possible publication, ensuring global
                visibility and recognition.
              </li>
              <li>Papers should follow the IEEE conference format.</li>
              <li>
                The paper should present original work not previously published or currently under review elsewhere.
              </li>
            </ul>
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors text-lg"
              onClick={() => window.open("https://cmt3.research.microsoft.com/INDISCON2025/Submission/Index", "_blank")}
            >
              Submit Paper
            </button>
          </div>
        </div>
      )}

      {/* Special Session Proposal Guidelines */}
      {activeTab === "special" && (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Call for Special Session Proposal</h2>
            <p className="mb-4">
              INDISCON 2025 will consider proposals for special sessions, Industry Sessions, panels, and pre-conference
              workshops/tutorials.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Proposal Submission Instructions</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Please submit your proposal in the form of a single PDF file to the &quot;special session track&quot; and
                &quot;workshop/tutorials&quot; on the Microsoft CMT submission site.
              </li>
              <li>To be eligible for review, your proposal must be submitted by Mar 20, 2025.</li>
              <li>Notification of acceptance/rejection will be sent by Mar 25, 2025.</li>
              <li>
                Prepare a single PDF not exceeding three pages and submit the file to the &quot;special session track&quot;.
              </li>
              <li>Describe the session topic, format, and intended audience.</li>
              <li>Include a list of prospective reviewers, their affiliation, and email ID.</li>
              <li>Include the details of Organizers (preferably not all from the same institute).</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Important Dates for Special Sessions</h2>
            <ul className="space-y-2">
              <li>
                <strong>Proposal Submission Deadline:</strong> 20 Mar 2025
              </li>
              <li>
                <strong>Notification of Acceptance/Rejection:</strong> 25 March 2025
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Contact Information</h2>
            <p>
              For any queries, please send email to:{" "}
              <a href="mailto:ieeindiscon2025@gmail.com" className="text-indigo-600 hover:underline">
                ieeindiscon2025@gmail.com
              </a>
            </p>
            <p className="mt-2">
              For more details regarding instructions for special session organization, please visit our website:{" "}
              <a href="https://www.ieeindiscon.org" className="text-indigo-600 hover:underline">
                https://www.ieeindiscon.org
              </a>
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors text-lg"
              onClick={() => window.open("https://cmt3.research.microsoft.com/INDISCON2025/Submission/Index", "_blank")}
            >
              Submit Special Session Proposal
            </button>
          </div>
        </div>
      )}

      {/* Conference Highlights */}
      <div className="mt-12 p-6 bg-indigo-50 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-indigo-800 mb-4">Conference Highlights</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Best Paper Awards</li>
              <li>Special Sessions/Tutorials/Workshops</li>
              <li>Industry Sessions</li>
              <li>Women in Engineering Session</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Organized by:</p>
            <p>IEEE Rourkela Subsection and IEEE India Council</p>
            <p className="mt-2">Venue: National Institute of Technology Rourkela, India</p>
            <p className="mt-2">Conference Dates: 21-23 August 2025</p>
            <p className="mt-2">Theme: Smart and Sustainable Technologies for Society</p>
          </div>
        </div>
      </div>
    </div>
  )
}

