'use client'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import { fadeUp } from '@/lib/motion'
import { STATS } from '@/lib/content'

export default function About() {
  return (
    <section id="about" className="bg-void py-24 px-6">
      <AnimatedSection className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-16 items-center">
          {/* Left — copy */}
          <motion.div variants={fadeUp} className="md:col-span-3">
            <p className="font-dm text-xs font-medium tracking-[0.2em] text-violet uppercase mb-3">
              ABOUT ONE SENTIENT
            </p>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-text mb-6">
              A Studio Built for the Long Game
            </h2>
            <p className="font-dm text-muted leading-relaxed mb-4">
              One Sentient is a solo-founded tech studio run by Abraham, a Computer Science Engineer.
              We operate at the intersection of AI, security, and fintech — with a bias toward
              shipping production-ready software over theoretical perfection.
            </p>
            <p className="font-dm text-muted leading-relaxed">
              Every system we build is designed to be fast, private, and purposeful. Lucent Labs
              is our experimental arm — where we explore without shipping pressure.
            </p>
            <div className="mt-8">
              <Button href="#contact" variant="ghost" size="md">
                Get in Touch →
              </Button>
            </div>
          </motion.div>

          {/* Right — stat cards */}
          <motion.div variants={fadeUp} className="md:col-span-2 flex flex-col gap-4">
            {STATS.map(stat => (
              <div
                key={stat.label}
                className="bg-surface border border-border rounded-2xl p-6"
              >
                <div className="font-syne font-extrabold text-4xl text-text">
                  {stat.value}
                </div>
                <div className="font-dm text-sm text-muted mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  )
}
