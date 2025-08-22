import { ReactNode } from "react"

export type RootLayoutProps = {
  children: ReactNode
}

export type PageLayoutProps = {
  children: ReactNode
  className?: string
}

export type TemplateLayoutProps = {
  children: ReactNode
}
