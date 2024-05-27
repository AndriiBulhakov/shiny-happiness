"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface PreloaderProps {
  loaded: () => void
}

const Preloader: React.FC<PreloaderProps> = ({ loaded }) => {
  const preloaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const preloaderElement = preloaderRef.current

    gsap.to(preloaderElement, {
      y: "-100%",
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out",
      onComplete: () => {
        preloaderElement?.remove()
        loaded()
      },
    })
  }, [])

  return (
    <div
      ref={preloaderRef}
      className="fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-red-primary preloader flex justify-center items-center"
    ></div>
  )
}

export default Preloader
