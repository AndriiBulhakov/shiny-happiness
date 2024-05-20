import { ReactNode } from "react"
import { FooterCopyright } from "./FooterCopyright"
import { FooterIconList } from "./FooterIconList"

type ICenteredFooterProps = {
  logo: ReactNode
  iconList: ReactNode
}

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="bg-white-background rounded-[2rem] p-12 flex justify-between flex-wrap">
    <div className="flex flex-col gap-20 max-w-[18.7rem] w-full">
      <a href="/" className="w-[18.7rem] h-11">
        {props.logo}
      </a>

      <a
        href="https://www.producthunt.com/posts/interview-copilot-by-final-round-ai"
        target="_blank"
        id="elzFsCrTr"
      >
        <img
          src="/assets/images/badge.png"
          alt="Product Hunt Badge"
          width="250"
          height="54"
        />
      </a>
    </div>

    <div className="max-w-[46.1rem] w-full">
      <nav className="flex items-start justify-between px-8">
        <ul className="flex flex-col justify-center gap-3">
          <li>Products</li>
          <li>
            <a href="/about">Interview Copilot®️</a>
          </li>
          <li>
            <a href="/about">AI Material Generator</a>
          </li>
          <li>
            <a href="/about">Mock Interview α</a>
          </li>
          <li>
            <a href="/about">Coding Copilot β</a>
          </li>
        </ul>
        <ul className="flex flex-col justify-center gap-3">
          <li>Tutorials</li>
          <li>
            <a href="/about">AI Material Generator</a>
          </li>
          <li>
            <a href="/about">Change Log</a>
          </li>
          <li>
            <a href="/about">Contact Us</a>
          </li>
        </ul>
        <ul className="flex flex-col justify-center gap-3">
          <li>Other</li>
          <li>
            <a href="/about">Affiliate Partnership</a>
          </li>
          <li>
            <a href="/about">Share Success Stories</a>
          </li>
          <li>
            <a href="/about">Privacy Policy</a>
          </li>
          <li>
            <a href="/about">Terms & Conditions</a>
          </li>
        </ul>
      </nav>

      <div className="mt-32 ml-4 mb-[-1rem]">
        <FooterIconList>{props.iconList}</FooterIconList>
      </div>
    </div>

    <div className="w-full text-body/small ">
      <FooterCopyright />
    </div>
  </div>
)

export { CenteredFooter }
