import { ReactNode } from 'react'
import { RegularText } from '../Typography/RegularText'

interface InfoWithIconProps {
  icon: ReactNode
  info: string
}

export function InfoWithIcon({ icon, info }: InfoWithIconProps) {
  return (
    <div className="flex gap-2">
      <span className="w-[1.125rem] h-[1.125rem] text-base-label">{icon}</span>
      <RegularText color="subtitle">{info}</RegularText>
    </div>
  )
}
