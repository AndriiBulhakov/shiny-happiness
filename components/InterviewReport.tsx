import Services from "./ui/Services"
import StickySection from "./ui/StickySection"
import { interviewReportContent } from "@/data"

const ResumeBuilder = () => {
  return (
    <StickySection>
      <Services
        tabsContent={interviewReportContent}
        subtitleBackgroundColor="bg-pink-primary"
        subtitleTextColor="text-gray-primary"
        subtitle="Interview Report"
        subtitleIcon="/assets/images/interview.svg"
        title="Receive comprehensive interview report after each session. Understand your performance so that you can always improve."
        buttonText="Get Interview Report  "
        buttonLink="#"
        type="horizontal"
        image="/assets/images/sticky-tabs/detailed-performance-analysis.png"
        additionalImage="/assets/images/sticky-tabs/interview-report-2.png"
      />
    </StickySection>
  )
}

export default ResumeBuilder
