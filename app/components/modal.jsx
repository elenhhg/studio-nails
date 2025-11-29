"use client"

export default function ImageModal({ selectedImage, onClose }) {
  if (!selectedImage) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000] p-5" onClick={onClose}>
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 w-10 h-10 border-0 bg-white/90 rounded-full cursor-pointer flex items-center justify-center text-2xl text-gray-800 transition-colors hover:bg-white z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <img
          src={selectedImage || "/placeholder.svg"}
          alt="Nail art detail"
          className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-xl"
        />
      </div>
    </div>
  )
}
