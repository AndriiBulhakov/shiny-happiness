import BackgroundBubbles from "./ui/BackgroundBubbles"
import SectionsHeader from "./ui/SectionHeader"
import StickySection from "./ui/StickySection"
import WorkflowDivider from "./ui/WorkflowDivinder"

const Workflow = () => {
  return (
    <StickySection
      sectionClassName="lg:pb-5 xs:pb-0"
      overlayClassName="lg:p-8 xs:px-4 sm:pb-[6.69rem] xs:pb-[4.44rem] sm:pt-20 xs:pt-[5.25rem]"
    >
      <BackgroundBubbles position="absolute" className="z-[1]" />
      <SectionsHeader
        title="A suite of AI superpowers for any career case"
        subtitle="From Day One to Final Rounds"
        className="lg:max-w-[34.8125rem] xs:max-w-[27.6875rem] lg:mb-[6.87rem] xs:mb-[5.78rem] "
      />
      <div className="workflow-wrapper flex lg:flex-row xs:flex-col lg:items-start xs:items-center justify-between gap-8 relative z-10">
        <ul className="text-nowrap">
          <li>
            <h3 className="text-headlines/h3">Before Interviews</h3>
          </li>
          <li>
            <div className="workflow-badge">Resume Revision</div>
          </li>
          <li>
            <div className="workflow-badge">Cover Letter Generation</div>
          </li>
          <li>
            <div className="workflow-badge">Q&A Flashcards</div>
          </li>
          <li>
            <div className="workflow-badge">{"🧠 Mock Interview {Alpha}"}</div>
          </li>
        </ul>
        <WorkflowDivider />
        <ul className="text-nowrap">
          <li>
            <h3 className="text-headlines/h3">During Interviews</h3>
          </li>
          <li>
            <div className="workflow-badge text-red-primary">
              🚀 Interview Copilot®️
            </div>
          </li>
          <li>
            <div className="workflow-badge">Real-Time Transcription</div>
          </li>
          <li>
            <div className="workflow-badge">Personalized Support</div>
          </li>
          <li>
            <div className="workflow-badge">{"🦾 Coding Copilot {Beta}"}</div>
          </li>
        </ul>
        <WorkflowDivider />
        <ul className="text-nowrap">
          <li>
            <h3 className="text-headlines/h3">After Interviews</h3>
          </li>
          <li>
            <div className="workflow-badge">Interview Summary</div>
          </li>
          <li>
            <div className="workflow-badge text-gray-quaternary">
              {"Salary Negotiation {Q2 2024}"}
            </div>
          </li>
          <li>
            <div className="workflow-badge text-gray-quaternary">
              {"Autofollowup {Q2 2024}"}
            </div>
          </li>
        </ul>
      </div>
    </StickySection>
  )
}

export default Workflow
