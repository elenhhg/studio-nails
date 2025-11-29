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
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl sm:text-7xl font-playfair font-bold text-white tracking-tight">Gianyxaki</h1>

        <h2 className="mt-2 text-3xl sm:text-4xl font-greatvibes text-pink-300 tracking-wide">Elena’s Glow Bar</h2>
      </motion.div>

      <motion.p
        className="mt-6 text-xl sm:text-2xl font-playfair text-white/90 max-w-2xl leading-relaxed relative z-10"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
      >
        Elevating nail artistry with elegance, precision, and a touch of modern luxury.
      </motion.p>

      <motion.div
        className="mt-10 flex gap-4 relative z-10 flex-wrap justify-center"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
      >
        <button className="px-8 py-3 bg-pink-500 text-white rounded-full text-lg font-semibold hover:bg-pink-600 transition">
          Book Appointment
        </button>

        <button className="px-8 py-3 border border-white/40 text-white rounded-full text-lg font-medium backdrop-blur-sm hover:bg-white/10 transition">
          View Services
        </button>
      </motion.div>
    </section>
  )
}
