"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Announcements() {
  return (
    <div className="min-h-screen  p-6 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Announcement Section - Full Width */}
        <AnimatedSection className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Announcements
          </h2>
          <ul className="space-y-4">
            {[
              "Announcement 1: Call for Papers",
              "Announcement 2: Registration Open",
              "Announcement 3: Keynote Speakers",
              "Announcement 4: Workshop Schedule",
            ].map((announcement, index) => (
              <motion.li
                key={index}
                className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors flex items-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                {announcement}
              </motion.li>
            ))}
          </ul>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="space-y-6 overflow-y-auto h-[150vh] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <AnimatedSection className=" p-6 rounded-2xl hover:shadow-xl transition-shadow h-full">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                Conference Leadership
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Patrons:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Prof.  Umamaheshwar Rao Karanam, Director, NIT Rourkela, India",
                      "Prof. Prerna Gaur, Chair, IEEE India Council",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Co-Patrons:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {["Prof. Suparna Kar Chowdhury","Prof. Dipankar Debnath","Prof. Subhranshu Samantray","Prof. S. M. Sameer"].map(
                      (name, index) => (
                        <motion.li
                          key={index}
                          className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {name}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Executive Steering Committee:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {["Mr. Deepak Mathur","Prof. Suresh Nair","Prof. Debabrata Das","Prof. K. V. S. Hari","Prof. Ashutosh Dutta","Prof. Celia Shahnaz"].map(
                      (name, index) => (
                        <motion.li
                          key={index}
                          className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {name}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    International Advisory Committee:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {["Prof. Sajal Das","Prof. Amit Mishra","Prof. Ranga Rao Venkatesha Prasad","Prof. Akshay Rathore ","Prof. Aryan Kaushik"].map(
                      (name, index) => (
                        <motion.li
                          key={index}
                          className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {name}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
                <div >
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    National Advisory Committee:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {["Prof. Ganpati Panda","Prof. Pradipta Kumar Nanda","Prof. Iti Saha Misra","Prof. Bansidhar Majhi","Er. Hare Krushna Rath","Prof. Anup Kumar Panda","Prof. Kamalakanta. Mahapatra","Prof.  Dipti Patra","Prof.  Kanungo Barada Mohanty","Prof.  Bibhudatta Sahoo","Prof. Sukadev Meher","Prof. Durga Prasad Mohapatra","Prof. Debiprasad Priyabrata Acharya ","Prof. Prasanna Kumar Sahu"].map(
                      (name, index) => (
                        <motion.li
                          key={index}
                          className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {name}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Honorary Chair:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {["Prof. Saswat Chakrabarti","Prof. Bhaskar Gupta","Prof. Sarat Kumar Patra","Prof. Bidyadhar Subudhi","Prof. Sukumar Mishra","Prof. Bijaya Ketan Panigrahi"].map(
                      (name, index) => (
                        <motion.li
                          key={index}
                          className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {name}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    General Chairs:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {["Prof. Poonam Singh","Prof. Susmita Das","Prof. Sudip Misra"].map(
                      (name, index) => (
                        <motion.li
                          key={index}
                          className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {name}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    TPC Chairs:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {["Prof. Ashok Kumar Turuk","Prof. Pravat Kumar Ray","Prof. Preetam Kumar","Prof. Mrinal Kanti Mandal"].map(
                      (name, index) => (
                        <motion.li
                          key={index}
                          className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {name}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    TPC Vice-Chairs:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {["Prof. Ajit Kumar Sahoo","Dr. Supratim Gupta ","Dr. Ratnakar Dash","Dr. Mahesh Mohan M R"].map(
                      (name, index) => (
                        <motion.li
                          key={index}
                          className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {name}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Organizing Secretary:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {["Prof. Ayaskanta Swain","Dr. Shrishail Hiremath","Dr. Arnab Ghosh","Dr. Tanmoy Roy Choudhury","Mr. Nandan S"].map(
                      (name, index) => (
                        <motion.li
                          key={index}
                          className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {name}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Co-Organizing Secretary:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {["Prof. Suman Kumar Dey","Prof. Sudip Kundu","Prof. Sandip Ghoshal","Prof. Pankaj Sharma"].map(
                      (name, index) => (
                        <motion.li
                          key={index}
                          className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {name}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="space-y-6 overflow-y-auto h-[150vh] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <AnimatedSection className=" p-6 rounded-2xl  ">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                Conference Tracks
              </h2>
              <p className="text-gray-600">
                Topics covered by INDISCON 2025 include, but are not limited to:
              </p>
              <ul className="space-y-4">
                {[
                  "Track 1: Artificial Intelligence and Machine Learning, Data Science",
                  "Track 2: Sensors, Instrumentation, Control and Automation",
                  "Track 3: Network and Hardware Security, Cryptography, and Block Chain Technology",
                  "Track 4: Neuromorphic, Quantum Computing, Parallel and Distributed Computing",  
                  "Track 5: Optical/RF/Microwave/Radar/Terahertz Technologies",
                  "Track 6: VLSI and Embedded Systems,Semiconductor Devices, Circuits, MEMS",
                  "Track 7: Robotics, UAV, and Autonomous Vehicle",
                  "Track 8: Signal, Image and Multimedia Processing, Digital Healthcare",
                  "Track 9: Next Generation Communication Technologies and Networks",
                  "Track 10: Power Electronics and Power Systems",
                  "Track 11: Electric Vehicles, Sustainable Technologies",
                  "Track 12: IoT, Cyber Physical Systems, and Industry 4.0",
                ].map((track, index) => (
                  <motion.li
                    key={index}
                    className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors flex items-center group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                    {track}
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          <div className="space-y-6">
            <AnimatedSection className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-full">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                Important Dates
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ["Paper Submission Starts", "19-05-2025"],
                      [
                        "Extended hard deadline: 01-08-2025",
                        "19-08-2024",
                        
                      ],
                      ["Notification of Acceptance", "10-05-2025"],
                      ["Final Paper Submission", "05-11-2025"],
                      ["Author Registration", "25-10-2025"],
                      ["Early-Bird Registration Ends", "19-08-2025"],
                    ].map(([event, date, extended], index) => (
                      <motion.tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors even:bg-gray-50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <td className="p-3 text-gray-700 font-medium">
                          {event}
                        </td>
                        <td className="p-3 text-right">
                          <div className="flex flex-col">
                            {extended ? (
                              <>
                                <span className="text-sm line-through text-gray-400">
                                  {date}
                                </span>
                                <span className="text-red-600 font-semibold">
                                  {extended}
                                </span>
                              </>
                            ) : (
                              <span className="text-gray-700">{date}</span>
                            )}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}