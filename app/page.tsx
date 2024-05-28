"use client"

// import { ReactLenis } from "@studio-freight/react-lenis"

import { Hero } from "@/components/Hero"
import BackgroundBubbles from "@/components/ui/BackgroundBubbles"
import { Navbar } from "@/components/ui/Navbar"
import Chat from "@/components/Chat"
import Companies from "@/components/Companies"
import Features from "@/components/Features"
import Workflow from "@/components/Workflow"
import ResumeBuilder from "@/components/ResumeBuilder"
import MockInterview from "@/components/MockInterview"
import QuestionBank from "@/components/QuestionBank"
import InterviewReport from "@/components/InterviewReport"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import Mentions from "@/components/Mentions"
import Tutorials from "@/components/Tutorials"
import CTA from "@/components/CTA"
import Subscription from "@/components/Subscription"
import { Footer } from "@/components/Footer"
import CookieConsentBanner from "@/components/CookieConsentBanner"
import Preloader from "@/components/ui/Preloader"

export default function Home() {
  return (
    <>
      {/* <ReactLenis root> */}
      <Preloader />
      <main>
        <BackgroundBubbles position="fixed" className="z-[-1]" />
        <Navbar />
        <Hero />
        <Chat />
        <Companies />

        <div className="relative lg:flex lg:flex-col lg:gap-[100svh]">
          <Features />
          <Workflow />
          <ResumeBuilder />
          <MockInterview />
          <QuestionBank />
          <InterviewReport />
        </div>
        <Testimonials />
        <FAQ />
        <Mentions />
        <Tutorials />
        <CTA />
        <Subscription />
        <Footer />
      </main>
      <CookieConsentBanner />
      {/* </ReactLenis> */}
    </>
  )
}
