"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.15])

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ scale }}>
        <img
          src="images/studio.png"
          alt="Nail Studio Background"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Hero Title with styled Y */}
        <h1 className="text-7xl sm:text-9xl md:text-[7rem] lg:text-[8rem] font-playfair font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
          <span className="font-greatvibes mr-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600">
            Y
          </span>
          <span>ianixaki</span>
        </h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-3xl sm:text-4xl font-greatvibes text-pink-300 tracking-wide">
          Elena’s Glow Bar
        </h2>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex gap-4 relative z-10 flex-wrap justify-center">
        <button
          className="px-8 py-3 bg-pink-500 text-white rounded-full text-lg font-semibold hover:bg-pink-600 transition"
          onClick={() => {
            const contactSection = document.getElementById('contact')
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          Book Appointment
        </button>

        <button
          className="px-8 py-3 border border-white/40 text-white rounded-full text-lg font-medium backdrop-blur-sm hover:bg-white/10 transition"
          onClick={() => {
            const servicesSection = document.getElementById('services')
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          View Services
        </button>
      </div>
    </section>
  )
}