"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const letters = "ianixaki".split("")

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const restLettersAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 + i * 0.12,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
        >
          {/* Falling Y with pink dust */}
          <motion.div
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-playfair text-white flex relative"
            style={{ perspective: "1000px" }}
          >
            {/* Dust container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.3, 1],
                y: [20, 35, 40],
              }}
              transition={{
                delay: 0.9,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="absolute left-0 bottom-0 w-10 h-6 sm:w-14 sm:h-8 md:w-16 md:h-10 pointer-events-none"
            >
              <div className="w-full h-full rounded-full opacity-80" style={{ background: "radial-gradient(circle, rgba(255,182,193,0.9) 0%, rgba(255,105,180,0.5) 40%, rgba(255,105,180,0.15) 70%, transparent 100%)", filter: "blur(18px)" }} />
            </motion.div>

            {/* Y letter */}
            <motion.span
              initial={{ y: -300, rotate: -20, opacity: 0 }}
              animate={{
                y: [ -300, 0, -12, 0 ],
                rotate: [ -20, 0, -4, 0 ],
                opacity: 1,
                transition: {
                  duration: 1.1,
                  ease: "easeOut",
                  times: [0, 0.7, 0.9, 1],
                },
              }}
              className="inline-block"
            >
              Y
            </motion.span>

            {/* Remaining letters */}
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={restLettersAnim}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="mt-3 text-gray-300 text-xs sm:text-sm md:text-base uppercase tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            Elena’s Glow Bar
          </motion.p>

          {/* Loading Bar */}
          <motion.div className="mt-6 w-28 sm:w-40 h-1 bg-gray-700 rounded overflow-hidden relative">
            <motion.div
              className="h-full bg-pink-500"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
