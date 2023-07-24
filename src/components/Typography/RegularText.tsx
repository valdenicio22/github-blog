import { HTMLAttributes, ReactNode } from 'react'

type RegularTextProps = {
  color?: 'text' | 'subtitle' | 'span'
  size?: 'md' | 'sm'
  weight?: 'regular' | 'bold'
  as?: keyof JSX.IntrinsicElements
  children: ReactNode
} & HTMLAttributes<HTMLOrSVGElement>

export function RegularText({
  color = 'text',
  as: Tag = 'p',
  size = 'md',
  weight = 'regular',
  className,
  children,
  ...props
}: RegularTextProps) {
  const colorVariant = {
    text: 'text-base-text',
    subtitle: 'text-base-subtitle',
    span: 'text-base-span',
  }
  const sizeVariant = {
    md: 'text-text-md',
    sm: 'text-text-sm',
  }
  const weightVariant = {
    regular: 'font-normal',
    bold: 'font-bold',
  }
  const regularTextStyle = `${colorVariant[color]} ${sizeVariant[size]} ${weightVariant[weight]} }`
  return (
    <Tag className={`${className} ${regularTextStyle} `} {...props}>
      {children}
    </Tag>
  )
}
