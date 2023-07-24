import { HTMLAttributes, ReactNode } from 'react'

type TitleTextProps = {
  color?: 'title' | 'subtitle'
  size?: 'lg' | 'md' | 'sm'
  as?: keyof JSX.IntrinsicElements
  children: ReactNode
} & HTMLAttributes<HTMLOrSVGElement>

export function TitleText({
  color = 'title',
  as: Tag = 'h1',
  size = 'lg',
  className,
  children,
  ...props
}: TitleTextProps) {
  const colorVariant = {
    title: 'text-base-title',
    subtitle: 'text-base-subtitle',
  }
  const sizeVariant = {
    lg: 'text-title-lg',
    md: 'text-title-md',
    sm: 'text-title-sm',
  }
  const titleTextStyle = `${colorVariant[color]} ${sizeVariant[size]} font-bold`
  return (
    <Tag className={`${className} ${titleTextStyle}`} {...props}>
      {children}
    </Tag>
  )
}
