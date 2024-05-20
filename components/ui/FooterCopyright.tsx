const FooterCopyright = () => (
  <div className="footer-copyright flex justify-between text-gray-primary">
    <div className=" opacity-50">
      © {new Date().getFullYear()} Final Round, Inc.
    </div>
    <div>
      <span className="opacity-50">Crafted by </span>
      <a href="https://www.ozero.design/" target="_blank">
        Ozero
      </a>
    </div>

    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-red-primary;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
)

export { FooterCopyright }
