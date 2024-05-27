import Services from "./ui/Services"
import StickySection from "./ui/StickySection"
import { mockInterviewContent } from "@/data"

const ResumeBuilder = () => {
  return (
    <StickySection sectionClassName="lg:pb-5 xs:pb-0">
      <Services
        tabsContent={mockInterviewContent}
        subtitleBackgroundColor="bg-blue-primary"
        subtitleTextColor="text-gray-primary"
        subtitle="AI Mock Interview"
        subtitleIcon="/assets/images/ai-mock-interview.svg"
        title="Prepare your session with the most  immersive mock interview powered by AI"
        buttonText="Launch Mock Interview"
        buttonLink="#"
        type="vertical"
        image="/assets/images/sticky-tabs/fr-intcop 3.png"
        additionalImage="/assets/images/sticky-tabs/fr-intcop 4.png"
      />
    </StickySection>
  )
}

export default ResumeBuilder
