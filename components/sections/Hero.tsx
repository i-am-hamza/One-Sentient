'use client'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-void overflow-hidden relative">
      {/* Background: dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #1C2438 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Background: violet blob */}
      <div className="absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full bg-violet/20 blur-[120px] pointer-events-none" />

      {/* Background: indigo blob */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-indigo/15 blur-[100px] pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center px-6 py-32"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-4 py-1.5 text-sm font-dm text-violet">
            ⚡ Freelance Studio · Product Builder
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeUp}
          className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text leading-[0.95] tracking-tight mb-6"
        >
          We Build What
          <br />
          The Future
          <br />
          <span className="bg-gradient-brand bg-clip-text text-transparent">
            Runs On.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="font-dm text-lg text-muted max-w-xl mx-auto mb-10"
        >
          AI systems. Cybersecurity solutions. Fintech products. We turn complex engineering problems into fast, private, production-ready software.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
          <Button href="#products" variant="primary" size="lg">
            Explore Our Products →
          </Button>
          <Button href="#contact" variant="ghost" size="lg">
            Hire Us
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-wrap gap-8 justify-center items-center"
        >
          <div className="text-center">
            <span className="font-syne font-bold text-2xl text-text block">4+</span>
            <span className="font-dm text-xs text-muted">Projects Shipped</span>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <span className="font-syne font-bold text-2xl text-text block">3</span>
            <span className="font-dm text-xs text-muted">Verticals</span>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <span className="font-syne font-bold text-2xl text-text block">2025</span>
            <span className="font-dm text-xs text-muted">Shipped In</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
