"use client";
import { Typewriter } from "react-simple-typewriter";
import { FiFacebook } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const socialLinks = [
    { icon: <FaWhatsapp />, href: "https://wa.me/94759920388" },

    { icon: <FaGithub />, href: "https://github.com/Supanusan" },
    {
      icon: <FaLinkedin />,
      href: "https://lk.linkedin.com/in/supanu-supanusan-a96942297",
    },
  ];

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 px-4 w-full max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold relative overflow-hidden cursor-default group">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-all duration-1000 ease-in-out pointer-events-none"></span>
          Thiru Supanusan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300/90 h-8">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Mobile App Developer",
              "Problem Solver",
              "Tech Enthusiast",
            ]}
            loop
            cursor
            cursorStyle="_"
            cursorBlinking
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center items-center gap-5 md:gap-6 text-xl md:text-2xl my-2">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Social Link"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors duration-300">
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-full max-w-xs mt-4">
          <Link href="#projects">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl py-3 px-8 w-full font-semibold overflow-hidden group">
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
