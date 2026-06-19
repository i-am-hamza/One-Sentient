import { clsx } from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  href?:      string
  variant?:   'primary' | 'ghost'
  size?:      'sm' | 'md' | 'lg'
  className?: string
  target?:    string
  rel?:       string
  onClick?:   () => void
}

const sizeClasses = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
}

const variantClasses = {
  primary: 'bg-gradient-brand text-white font-dm font-medium rounded-full hover:opacity-90 transition-opacity',
  ghost:   'border border-border text-text font-dm font-medium rounded-full hover:border-violet/50 hover:bg-surface transition-all',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  target,
  rel,
  onClick,
}: ButtonProps) {
  const classes = clsx(
    variantClasses[variant],
    sizeClasses[size],
    'inline-flex items-center justify-center gap-2',
    className,
  )

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
