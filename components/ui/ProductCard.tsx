'use client'
import { motion } from 'framer-motion'
import { scaleIn } from '@/lib/motion'
import Badge from './Badge'
import { Product } from '@/lib/content'

const GRADIENT_STYLES: Record<string, string> = {
  'from-emerald to-sky':      'linear-gradient(135deg, #10B981 0%, #38BDF8 100%)',
  'from-violet to-indigo':    'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
  'from-indigo to-violet':    'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
  'from-border to-surface-2': 'linear-gradient(135deg, #1C2438 0%, #141B26 100%)',
}

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const isExternal = product.href?.startsWith('http') ?? false
  const href = product.href ?? '#contact'

  return (
    <motion.div
      variants={scaleIn}
      className="group flex flex-col h-full cursor-default transition-transform duration-300 hover:-translate-y-1"
    >
      {/* 2px gradient top strip */}
      <div
        className="h-0.5 w-full rounded-t-2xl flex-shrink-0"
        style={{ background: GRADIENT_STYLES[product.gradient] ?? GRADIENT_STYLES['from-border to-surface-2'] }}
      />

      {/* Card body */}
      <div className="flex flex-col flex-grow bg-surface-2 border border-t-0 border-border rounded-b-2xl p-6 transition-colors duration-300 group-hover:border-border/40 group-hover:shadow-lg">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-syne font-bold text-2xl text-text">{product.name}</h3>
            <p className="font-dm text-muted text-sm mt-1">{product.subtitle}</p>
          </div>
          <div className="flex-shrink-0 mt-1">
            <Badge label={product.badge} color={product.badgeColor} />
          </div>
        </div>

        {/* Description */}
        <p className="font-dm text-muted/80 text-sm leading-relaxed flex-grow mt-4">
          {product.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {product.tags.map(tag => (
            <span
              key={tag}
              className="rounded-md bg-surface border border-border px-2 py-0.5 text-xs font-dm text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={href}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="font-dm text-sm text-violet hover:text-sky transition-colors mt-6 inline-block"
        >
          {product.cta}
        </a>
      </div>
    </motion.div>
  )
}
