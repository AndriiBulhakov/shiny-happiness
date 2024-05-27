"use client"

import BackgroundBubbles from "@/components/ui/BackgroundBubbles"
import { Navbar } from "@/components/ui/Navbar"
import Link from "next/link"

const notFound = () => {
  return (
    <>
      <main>
        <BackgroundBubbles position="fixed" className="z-[-1]" />
        <Navbar />
        <section className="min-h-[100dvh] flex items-center justify-center sm:px-5 xs:px-4">
          <div className="flex flex-col items-center text-lg font-medium tracking-tight leading-6 max-w-[44.8rem]">
            <div className="text-center text-body/large text-gray-tetriary mb-12">
              404 Error
            </div>
            <h1 className="text-headlines/h2 text-center text-gray-primary max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Oops! It’s an error. But don’t worry, we are here to help you
            </h1>
            <div className="mt-10 mb-16 text-body/large text-gray-tetriary text-center max-w-[28.0625rem] max-md:mt-10 max-md:max-w-full">
              The page you are looking for doesn’t exist or another error
              occurred. Please, go to Home or Back.
            </div>
            <Link href="/" className="without-underline">
              <span className=" btn btn-primary">Go Home</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default notFound
