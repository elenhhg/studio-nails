"use client"
import { useState } from "react"
import { motion } from "framer-motion"


export default function BeforeAfterNails() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX, rect) => {
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, rect)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, rect)
  }

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, rect)
  }

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-10 lg:px-20 relative">

      {/* TITLE EXACTLY LIKE “OUR SERVICES” */}
      <div className="max-w-6xl mx-auto text-center mb-12">

        <motion.h2
          className="text-center font-extrabold font-inter mb-4 sm:mb-6 leading-snug 
                     text-[2.5rem] sm:text-[3rem] md:text-[4.5rem]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.span
            className="bg-gradient-to-r from-pink-600 via-pink-400 to-pink-800 
                       bg-clip-text text-transparent inline-block"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Before – After
          </motion.span>
        </motion.h2>

        {/* UNDERLINE EXACTLY THE SAME */}
        <motion.div
          className="w-28 h-1 mx-auto rounded-full bg-gradient-to-r 
                     from-pink-600 via-pink-400 to-pink-800"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
        />

      </div>


      {/* BEFORE / AFTER SLIDER */}
      <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-2xl select-none">
        <div
          className="relative w-full h-full cursor-col-resize"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
          onClick={handleClick}
        >
          {/* After Image */}
          <div className="absolute inset-0">
            <img
              src="/images/after.png"
              alt="After"
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              After
            </div>
          </div>

          {/* Before Image */}
          <div
            className="absolute inset-0 overflow-hidden transition-all duration-75"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src="/images/before.png"
              alt="Before"
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Before
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-pink-500 cursor-col-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                            w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-full shadow-lg 
                            flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-0.5 h-4 bg-white rounded-full" />
                <div className="w-0.5 h-4 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
