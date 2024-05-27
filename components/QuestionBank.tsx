import Services from "./ui/Services"
import StickySection from "./ui/StickySection"
import { questionBankContent } from "@/data"

const ResumeBuilder = () => {
  return (
    <StickySection sectionClassName="lg:pb-5 xs:pb-0" id="question-bank">
      <Services
        tabsContent={questionBankContent}
        subtitleBackgroundColor="bg-orange-primary"
        subtitleTextColor="text-gray-primary"
        subtitle="Question Bank"
        subtitleIcon="/assets/images/question-bank.png"
        title="Review top interview questions and learn AI-empowered answers to optimize your preparation."
        buttonText="Launch Mock Interview"
        buttonLink="#"
        type="vertical"
        image="/assets/images/sticky-tabs/fr-intcop 5.png"
        additionalImage="/assets/images/sticky-tabs/fr-incop 6.png"
      />
    </StickySection>
  )
}

export default ResumeBuilder
