"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import ImageModal from "./modal"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const images = ["nails1","nails2","nails3","nails4","nails5","nails6"]

  return (
    <section id="gallery" ref={sectionRef} className="py-16 px-5 relative z-10">

      {/* Animated Title */}
      <motion.h2
        className="text-center font-extrabold font-inter mb-4 sm:mb-6 leading-snug
                   text-[2.5rem] sm:text-[3rem] md:text-[4.5rem] px-4 sm:px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.span
          className="bg-gradient-to-r from-pink-600 via-pink-400 to-pink-800 
                     bg-clip-text text-transparent inline-block"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        >
          My Work
        </motion.span>
      </motion.h2>

      {/* Gradient underline */}
      <motion.div
        className="w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-600 via-pink-400 to-pink-800 mb-12"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={visible ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.8 }}
        style={{ transformOrigin: "center" }}
      />

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer 
                       transform transition duration-300 hover:scale-105 hover:shadow-2xl hover-glow"
            onClick={() => setSelectedImage(`/images/${img}.png`)}
            initial={{ opacity: 0, y: 40 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
          >
            <img
              src={`/images/${img}.png`}
              alt={`Nail art ${i + 1}`}
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  )
}
