"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Great_Vibes } from "next/font/google"

// Google Font
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" })

export default function MeetTheArtist() {
  const artist = {
    name: "Elena Gianyxaki",
    role: "Master Nail Artist",
    image: "/images/artist.png",
    description: `Elena is a master nail artist with years of experience in creative designs and professional nail care. 
She specializes in manicure, pedicure, gel & acrylic nails, and artistic nail decorations. 
Her passion for nail artistry shines through every creation, delivering personalized, high-quality results. 
Clients appreciate her attention to detail, creativity, and ability to bring each vision to life. 
Beyond nails, she shares tips on nail health and maintenance to ensure your nails look perfect long after your appointment.`,
  }

  return (
    <section id="artist" className="relative py-24 px-4 sm:px-10 lg:px-20">

      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
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
            Meet the Artist
          </motion.span>
        </motion.h2>

        <motion.div
          className="w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-600 via-pink-400 to-pink-800"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
        />
      </div>

      {/* Content */}
      <div className="container flex flex-col items-center gap-12 mx-auto lg:flex-row">
        {/* Image */}
        <motion.div
          className="relative w-full lg:w-1/2 before:content-[''] before:absolute before:inset-0 
                     before:rounded-full before:blur-3xl before:bg-pink-700 before:animate-pulseGlow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={artist.image}
            alt={artist.name}
            width={700}
            height={700}
            className="relative z-10 object-cover rounded-full shadow-2xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full space-y-6 text-center lg:w-1/2 lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Name with cursive font + soft pink text-shadow */}
          <h2
            className={`${greatVibes.className} text-4xl sm:text-5xl text-stone-600 dark:text-white leading-relaxed`}
            style={{ textShadow: "2px 2px 6px rgba(255, 182, 193, 0.5)" }}
          >
            {artist.name}
          </h2>

          <p className="text-stone-400 dark:text-stone-300 text-lg leading-relaxed">
            {artist.role}
          </p>

          <p className="max-w-xl text-stone-300 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
            {artist.description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
