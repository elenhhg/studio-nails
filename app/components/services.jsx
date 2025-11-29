"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

const serviceCategories = [
  {
    category: "Manicure",
    services: [
      "Basic Manicure",
      "Simple Polish",
      "Therapy Manicure",
      "Semi-Permanent Manicure",
      "Reinforced Manicure",
    ],
  },
  {
    category: "Pedicure",
    services: [
      "Basic Pedicure with Polish",
      "Men's Pedicure",
      "Therapy Pedicure",
      "Semi-Permanent Pedicure",
    ],
  },
  {
    category: "Artificial Nails",
    services: [
      "Gel Nails",
      "Acrygel Nails",
      "Nail Art",
      "Natural Nail Reinforcement",
      "Artificial Nail Maintenance & Removal",
    ],
  },
  {
    category: "Hair Removal",
    services: ["Waxing Treatments"],
  },
  {
    category: "Aesthetics",
    services: [
      "Eyebrow Shaping & Cleaning",
      "Makeup Application",
      "Lash Extensions",
      "Brow Lamination",
      "Lash Lifting",
    ],
  },
]

export default function Services3D() {
  const [openCategory, setOpenCategory] = useState(null)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      setVisible(rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`service-card-${index}`)
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const rotateX = ((y - midY) / midY) * 5
    const rotateY = ((x - midX) / midX) * 5
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
  }

  const handleMouseLeave = (index) => {
    const card = document.getElementById(`service-card-${index}`)
    if (!card) return
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)"
  }

  return (
    <section
      id="services"
      ref={sectionRef}
      className="w-full flex justify-center items-center px-4 py-16 sm:py-24 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-4xl"
      >
        {/* Title */}
        <motion.h2
          className="text-center font-extrabold font-inter mb-4 sm:mb-6 leading-snug text-[2.5rem] sm:text-[3rem] md:text-[4.5rem] px-4 sm:px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="bg-gradient-to-r from-pink-600 via-pink-400 to-pink-800 bg-clip-text text-transparent inline-block"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Our Services
          </motion.span>
        </motion.h2>

        {/* Gradient line */}
        <motion.div
          className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-600 via-pink-400 to-pink-800 mb-12"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={visible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Services list */}
        <div className="flex flex-col gap-6 sm:gap-10 md:gap-16">
          {serviceCategories.map((item, i) => {
            const isOpen = openCategory === item.category
            return (
              <div
                key={item.category}
                id={`service-card-${i}`}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => handleMouseLeave(i)}
                className={`border-b border-stone-300/40 pb-4 rounded-xl p-4 transition-shadow duration-300 ${
                  isOpen ? "shadow-2xl bg-black/20 backdrop-blur-md" : "shadow-lg bg-black/10 backdrop-blur-sm"
                }`}
              >
                {/* Header button */}
                <button
                  onClick={() => setOpenCategory(isOpen ? null : item.category)}
                  className="w-full flex justify-between items-center bg-transparent border-none cursor-pointer"
                >
                  <motion.span
  animate={{ opacity: isOpen ? 0.85 : 1, x: isOpen ? 4 : 0 }}
  transition={{ duration: 0.25 }}
  className="text-stone-400 font-extrabold font-inter text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]"
>
  {item.category}
</motion.span>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-stone-700"
                  >
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  </motion.div>
                </button>

                {/* Expandable content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden mt-3"
                    >
                      <ul className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                        {item.services.map((service, index) => (
                          <motion.li
                            key={service}
                            initial={{ opacity: 0, y: 20, rotateY: 10 }}
                            animate={{ opacity: 1, y: 0, rotateY: 0 }}
                            transition={{
                              duration: 0.35,
                              delay: index * 0.05,
                              type: "spring",
                              stiffness: 100,
                            }}
                            className="text-stone-100 font-extralight text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] leading-relaxed"
                            style={{
                              transformStyle: "preserve-3d",
                              perspective: "600px",
                              padding: "0.25rem 0.5rem",
                            }}
                          >
                            {service}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
