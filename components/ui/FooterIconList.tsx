import type { ReactNode } from "react"

type IFooterIconListProps = {
  children: ReactNode
}

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="footer-icon-list flex justify-start items-start gap-1">
    {props.children}
  </div>
)

export { FooterIconList }
