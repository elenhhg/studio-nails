"use client"

export default function Footer() {
  return (
    <footer className="w-full  text-gray-200 py-8 font-inter relative">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/30"></div>

      <div className="max-w-7xl mx-auto px-6 text-center text-white text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Yianixaki Elena's Glow Bar . All rights reserved.
      </div>
    </footer>
  )
}
