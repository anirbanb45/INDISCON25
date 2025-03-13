"use client"

import { motion } from "framer-motion"
import { type FC } from "react"
import Image from "next/image"

interface Section {
  title: string
  content: string
  image: string
}

const AboutUs: FC = () => {
  const sections: Section[] = [
    {
      title: "About IEEE INDISCON",
      content:
        `The theme of IEEE INDISCON 2025 is Smart and Sustainable Technologies for Society. The theme focuses on the integration of innovative technological solutions aimed at addressing global challenges while promoting environmental, economic, and social sustainability. It emphasizes the development and implementation of intelligent systems, such as IoT, AI, and smart grids, that optimize resource usage, reduce waste, and improve efficiency across various sectors like energy, transportation, healthcare, and agriculture. These technologies are designed not only to enhance quality of life but also to contribute to a more sustainable future by fostering green energy solutions, reducing carbon footprints, and ensuring equitable access to essential services. Ultimately, this theme explores the intersection of cutting-edge innovation with long-term societal well-being. IEEE INDISCON 2025 will be held at NIT Rourkela, Odisha, India. The theme of the conference will foster an environment for deliberating on different research aspects on the said topic.`,
      image:
        "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg",
    },
    {
      title: "About the Theme",
      content:
        "IEEE INDISCON 2025, held at NIT Rourkela, India, focuses on smart technology for next-generation connectivity, covering advancements in communications, signal processing, and microwave engineering for applications like IoT, healthcare, industry, and transportation. Key areas include devices, sensors, networking, data processing, energy efficiency, security, and biomedical signal processing. The three-day event features keynote speeches, technical sessions, panels, workshops, tutorials, exhibits, and networking opportunities. Authors are invited to submit short (4 pages) and regular (max 6 pages) papers with original, unpublished research.",
      image:
        "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg",
    },
    {
      title: "About NIT ROURKELA",
      content:
        `National Institute of Technology (NIT), Rourkela was founded as Regional Engineering College, Rourkela in 1961. It is a prestigious Institute with a reputation for excellence at both undergraduate and postgraduate levels, fostering the spirit of national integration among the students, a close interaction with industry and a strong emphasis on research, both basic and applied.
For more details visit www.nitrkl.ac.in`,
      image:
        "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg",
    },
    {
      title: "About IEEE India Council",
      content:
        "IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE highly cited publications, conferences, technology standards, and professional and educational activities. IEEE India Council is the umbrella organisation which coordinates IEEE activities in India. Its primary aim is to assist and coordinate the activities of local Sections, in order to benefit mutually, and avoid duplication of effort and resources. IEEE India Council was established on 20th May 1976 and is one of the five councils in the Asia Pacific Region (Region #10 of IEEE).For more details visit: https://ieeeindiacouncil.org/",
      image:
        "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg",
    },
    {
      title: "About IEEE Rourkela Subsection",
      content:
        "IEEE Rourkela Subsection was established on 10th December 2020, under the umbrella of IEEE India Council with GEO code R0013703. Its aim is to promote the technical, scholastic and student events such as seminars, conferences, exhibitions, workshops, short-term courses, etc. in its geographic leadership.",
      image:
        "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const imageVariants = {
    hover: { scale: 1.03 },
    rest: { scale: 1 }
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 ">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About INDISCON 2025
      </motion.h2>

      <div className="max-w-6xl mx-auto space-y-24">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.div
              className="relative w-full lg:w-1/2 overflow-hidden rounded-xl shadow-lg"
              variants={imageVariants}
              whileHover="hover"
              initial="rest"
              transition={{ duration: 0.3 }}
            >
              <Image
                src={section.image}
                alt={section.title}
                width={800}
                height={450}
                className="w-full h-64 object-cover"
                priority={index < 2}
              />
            </motion.div>

            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-6' : 'lg:pr-6'}`}>
              <h3 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4">
                {section.title}
              </h3>
              <p className="text-slate-900 font-semibold leading-relaxed text-justify">
                {section.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AboutUs