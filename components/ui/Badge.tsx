import { clsx } from 'clsx'
import { BadgeColor } from '@/lib/content'

interface BadgeProps {
  label: string
  color: BadgeColor
}

const colorClasses: Record<BadgeColor, string> = {
  emerald: 'bg-emerald/10 text-emerald border-emerald/20',
  violet:  'bg-violet/10  text-violet  border-violet/20',
  indigo:  'bg-indigo/10  text-indigo  border-indigo/20',
  muted:   'bg-muted/10   text-muted   border-muted/20',
}

export default function Badge({ label, color }: BadgeProps) {
  return (
    <span
      className={clsx(
        'text-xs font-dm font-medium tracking-wide rounded-full px-2.5 py-0.5 border',
        colorClasses[color],
      )}
    >
      {label}
    </span>
  )
}
