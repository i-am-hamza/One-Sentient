'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, ShieldCheck, TrendingUp } from 'lucide-react'
import { type LucideIcon } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { fadeUp } from '@/lib/motion'
import { SERVICES, type Service } from '@/lib/content'

const ICONS: Record<string, LucideIcon> = {
  BrainCircuit,
  ShieldCheck,
  TrendingUp,
}

function ServiceCard({ service }: { service: Service }) {
  const [hovered, setHovered] = useState(false)
  const Icon = ICONS[service.icon]

  return (
    <motion.div
      variants={fadeUp}
      className="bg-surface rounded-2xl p-8 cursor-default transition-all duration-300"
      style={{
        border:     `1px solid ${hovered ? `${service.glow}66` : '#1C2438'}`,
        boxShadow:  hovered ? `0 20px 40px ${service.glow}1A` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-6">
        {Icon && <Icon className="text-white w-6 h-6" />}
      </div>
      <h3 className="font-syne font-bold text-xl text-text mb-3">
        {service.title}
      </h3>
      <p className="font-dm text-muted text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-void py-24 px-6">
      <AnimatedSection className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="font-dm text-xs font-medium tracking-[0.2em] text-violet uppercase mb-3">
            WHAT WE DO
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-text mb-4">
            Three Pillars of Our Practice
          </h2>
          <p className="font-dm text-muted max-w-lg mx-auto">
            Built around the disciplines that matter most in modern software.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map(service => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
