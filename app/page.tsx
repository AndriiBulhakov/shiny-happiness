"use client"

import { ReactLenis } from "@studio-freight/react-lenis"

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

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <main>
          <BackgroundBubbles position="fixed" className="z-[-1]" />
          <Navbar />
          <Hero />
          <Chat />
          <Companies />
          <Features />
          <div className="relative flex flex-col gap-[100svh]">
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
      </ReactLenis>
    </>
  )
}
