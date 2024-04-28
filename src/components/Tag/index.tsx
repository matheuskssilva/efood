import { ReactNode } from "react"
import { TagContainer } from "./styles"

export type Props = {
    size?: 'small' | 'big' 
    children: ReactNode
}

export const Tag = ({ size, children }:Props) => {
  return (
    <TagContainer size={size}>{children}</TagContainer>
  )
}
