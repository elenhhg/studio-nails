"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full py-24 px-6 flex justify-center">
      <div className="w-full max-w-3xl">
        
        {/* Title */}
        <motion.h2
          className="text-center font-extrabold mb-3 text-[2.5rem] sm:text-[3rem] md:text-[4.5rem]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 
                       bg-clip-text text-transparent inline-block"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Contact Me
          </motion.span>
        </motion.h2>

        {/* Minimal gradient underline */}
        <motion.div
          className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 mb-10"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
        />

        <p className="text-center text-stone-300 mb-10 text-lg">
          Fill out the form below and I will get back to you soon.
        </p>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-pink-400 focus:border-pink-500 
                  text-pink-200 placeholder-pink-300 py-2 outline-none transition"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-pink-400 focus:border-pink-500 
                  text-pink-200 placeholder-pink-300 py-2 outline-none transition"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Your Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-pink-400 focus:border-pink-500 
                  text-pink-200 placeholder-pink-300 py-2 outline-none transition resize-none"
                placeholder="Write your message..."
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white 
                         rounded-xl text-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>

            {submitted && (
              <motion.p
                className="text-green-500 text-center mt-2 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                ✔ Thank you! Your message has been sent.
              </motion.p>
            )}
          </form>

          {/* Socials */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="font-medium text-white">
              Or reach me on:
            </p>

            <div className="flex gap-8">
              <a
                href="#"
                target="_blank"
                className="text-pink-500 hover:text-pink-600 transition"
              >
                <Instagram size={34} />
              </a>

              <a
                href="#"
                target="_blank"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                <Facebook size={34} />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
