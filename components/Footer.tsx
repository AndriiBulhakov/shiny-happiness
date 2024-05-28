import { CenteredFooter } from "./ui/CenteredFooter"
import { Logo } from "./ui/Logo"
import { footerSocials } from "@/data"
import Image from "next/image"

const Footer = () => (
  <footer className="sm:px-5 sm:pb-5 xs:px-4 xs:pb-4">
    <CenteredFooter
      logo={<Logo type="footer" />}
      iconList={
        <>
          {footerSocials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              className="w-[8.5rem] without-underline"
              target="_blank"
            >
              <Image
                src={social.icon}
                loading="lazy"
                alt={social.name}
                width={136}
                height={136}
              />
            </a>
          ))}
        </>
      }
    ></CenteredFooter>
  </footer>
)

export { Footer }
