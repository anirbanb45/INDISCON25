"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, MapPin,  Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Committee", href: "/committee" },
  { title: "Speakers", href: "/speakers" },
  { title: "Call For Papers", href: "/callforpapers" },
]

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/IEEE.org/?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=sm-facebook", icon: Facebook },
  { name: "X", href: "https://x.com/IEEEorg?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=sm-twitter&mx=2", icon: Twitter },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/ieee/posts/?feedView=all", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/ieeeorg/?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=sm-youtube", icon: Instagram },
]

const MotionLink = motion(Link)

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-[#2f24c1] to-[#3f8dd1] text-white w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center mb-6">
              <Image src="https://res.cloudinary.com/dk6m1qejk/image/upload/v1739561164/IEEE/bpxhcknsvtilxcaycrie.svg" alt="TechCorp Logo" width={200} height={100} className="mr-3" />
            </Link>
            <p className="text-blue-100 mb-4">
            IEEE INDISCON-2025 is the 6th edition of the international conference series INDISCON to be organized by the National Institute of Technology Rourkela.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-blue-500">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MotionLink
                    href={link.href}
                    className="group flex items-center hover:text-blue-200 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.title}
                  </MotionLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-blue-500">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-300" />
                NIT ROURKELA, Rourkela, Odisha, India, 769008
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-300" />
                ieeeindiscon2025@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-blue-500 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} IEEE Rourkela Subsection. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

