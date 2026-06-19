'use client'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { fadeUp } from '@/lib/motion'

const SOCIALS = [
  { icon: Github,   label: 'GitHub'      },
  { icon: Linkedin, label: 'LinkedIn'    },
  { icon: Twitter,  label: 'X / Twitter' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-surface-2 py-24 px-6">
      <AnimatedSection className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <motion.div variants={fadeUp}>
          <p className="font-dm text-xs font-medium tracking-[0.2em] text-violet uppercase mb-3">
            GET IN TOUCH
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-text mb-4">
            Let&rsquo;s Build Something Together
          </h2>
          <p className="font-dm text-muted">
            Have a project in mind? We&rsquo;d love to hear it. Reach out and let&rsquo;s talk scope, timeline, and fit.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div variants={fadeUp} className="mt-10">
          <a
            href="mailto:hello@one-sentient.one"
            className="inline-flex items-center gap-3 rounded-2xl bg-surface border border-border px-8 py-5 font-dm text-xl text-text hover:border-violet/50 transition-all group"
          >
            <Mail className="w-5 h-5 text-violet flex-shrink-0" />
            <span>hello@one-sentient.one</span>
            <ArrowRight className="w-4 h-4 text-muted group-hover:text-violet group-hover:translate-x-1 transition-all flex-shrink-0" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={fadeUp} className="flex gap-4 justify-center mt-8">
          {SOCIALS.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted hover:text-text hover:border-violet/40 transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>

        {/* Response note */}
        <motion.p variants={fadeUp} className="font-dm text-xs text-muted mt-6">
          Usually respond within 24 hours.
        </motion.p>
      </AnimatedSection>
    </section>
  )
}
