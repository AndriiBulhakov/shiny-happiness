const FooterCopyright = () => (
  <div className="footer-copyright lg:flex justify-between items-end text-gray-primary">
    <div className="opacity-50 lg:mb-0 xs:mb-4">
      © {new Date().getFullYear()} Final Round, Inc. <br />
      Pump Labs Inc, 456 University Ave, Palo Alto, CA 94301
    </div>
    <div>
      <span className="opacity-50">Crafted by </span>
      <a
        href="https://www.ozero.design/"
        className="text-red-primary"
        target="_blank"
      >
        Ozero
      </a>
    </div>
  </div>
)

export { FooterCopyright }
