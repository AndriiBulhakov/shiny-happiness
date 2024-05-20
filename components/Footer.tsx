import { CenteredFooter } from "./ui/CenteredFooter"
import { Logo } from "./ui/Logo"

const Footer = () => (
  <footer className="p-5">
    <CenteredFooter
      logo={<Logo type="footer" />}
      iconList={
        <>
          <a href="/" className="w-[8.5rem]">
            <img src="/assets/images/socials/Social.png" alt="X" />
          </a>

          <a href="/" className="w-[8.5rem]">
            <img src="/assets/images/socials/Social2.png" alt="Youtube" />
          </a>

          <a href="/" className="w-[8.5rem]">
            <img src="/assets/images/socials/Social3.png" alt="Youtube" />
          </a>

          <a href="/" className="w-[8.5rem]">
            <img src="/assets/images/socials/Social4.png" alt="Youtube" />
          </a>
        </>
      }
    ></CenteredFooter>
  </footer>
)

export { Footer }
