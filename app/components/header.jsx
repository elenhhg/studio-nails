"use client"

import { motion } from "framer-motion"
import { Home, Grid, Briefcase, Mail } from "lucide-react"

export function Header({ onSectionChange, activeSection }) {
  const menuItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "gallery", icon: Grid, label: "My Work" },
    { id: "services", icon: Briefcase, label: "Services" },
    { id: "contact", icon: Mail, label: "Contact" },
  ]

  const handleClick = (id) => {
    onSectionChange(id)
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-pink-200 via-pink-200 to-pink-400 border border-pink-900 rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-md shadow-pink-100/50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-2 sm:gap-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <motion.button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="relative p-3 sm:p-4 rounded-full flex items-center justify-center overflow-hidden"
              whileHover={{
                y: -2,
                boxShadow: "0px 0px 10px rgba(219, 39, 119, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {isActive && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 bg-pink-400 rounded-full z-0"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <Icon
                className={`w-5 h-5 sm:w-6 sm:h-6 relative z-10 ${
                  isActive ? "text-white" : "text-pink-700"
                }`}
              />
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}
