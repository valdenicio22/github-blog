import { AnchorHTMLAttributes, ReactNode } from 'react'

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  text: string
  icon?: ReactNode
  leftIcon?: boolean
}
export function ExternalLink({
  text,
  icon,
  leftIcon,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      className={`flex items-center gap-2 text-components-link text-brand-blue font-bold uppercase 
      hover:underline-offset-1 cursor-pointer
      ${leftIcon && `flex-row-reverse`}`}
      {...rest}
    >
      {text}
      <span className="flex items-center h-3 w-3">{icon}</span>
    </a>
  )
}
