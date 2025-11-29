"use client"

import { useEffect, useState } from "react"
import Hero from "./components/hero"
import Gallery from "./components/work"
import Modal from "./components/modal"
import images from "./components/image"
import Services3D from "./components/services"
import ContactSection from "./components/contact/page"
import { Header } from "./components/header"
import Footer from "./components/footer"
import BeforeAfterSection from "./components/beforeafter"
import MeetTheArtist from "./components/artist"
import Preloader from "./components/loading"

export default function Page() {
  const [cards, setCards] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    setCards(images.map((img, i) => ({ id: i + 1, imgSrc: img })))

    const handleScroll = () => {
      const scrollPos = window.scrollY
      const hero = document.querySelector(".hero-section")
      const features = document.querySelector(".features-section")

      if (hero) {
        hero.style.opacity = Math.max(0, 1 - scrollPos / 300)
        hero.style.transform =
          `translate(-50%, -50%) translateY(${-scrollPos * 0.5}px)`
      }

      if (features) {
        const op = Math.min(1, (scrollPos - 200) / 400)
        features.style.opacity = op
        features.style.transform =
          `translateY(${Math.max(0, 100 - scrollPos * 0.2)}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Preloader />

      <div className="animated-bg min-h-screen text-white">
        <Header onSectionChange={() => {}} activeSection={""} />
        <Hero />
        <Gallery cards={cards} onSelect={setSelectedImage} />
        <Services3D />

        {selectedImage && (
          <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}

        <BeforeAfterSection />
        <MeetTheArtist />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}
