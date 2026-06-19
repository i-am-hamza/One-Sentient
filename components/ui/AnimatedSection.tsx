'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer } from '@/lib/motion'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function AnimatedSection({ children, className }: Props) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  )
}
