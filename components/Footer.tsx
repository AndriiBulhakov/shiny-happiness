import { CenteredFooter } from "./ui/CenteredFooter"
import { Logo } from "./ui/Logo"

const Footer = () => (
  <footer className="sm:px-5 sm:pb-5 xs:px-4 xs:pb-4">
    <CenteredFooter
      logo={<Logo type="footer" />}
      iconList={
        <>
          <a href="/" className="w-[8.5rem] without-underline">
            <img
              src="/assets/images/socials/Social.png"
              loading="lazy"
              alt="X"
            />
          </a>

          <a href="/" className="w-[8.5rem] without-underline">
            <img
              src="/assets/images/socials/Social2.png"
              loading="lazy"
              alt="Youtube"
            />
          </a>

          <a href="/" className="w-[8.5rem] without-underline">
            <img
              src="/assets/images/socials/Social3.png"
              loading="lazy"
              alt="Youtube"
            />
          </a>

          <a href="/" className="w-[8.5rem] without-underline">
            <img
              src="/assets/images/socials/Social4.png"
              loading="lazy"
              alt="Youtube"
            />
          </a>
        </>
      }
    ></CenteredFooter>
  </footer>
)

export { Footer }
