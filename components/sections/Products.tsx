'use client'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ProductCard from '@/components/ui/ProductCard'
import { fadeUp } from '@/lib/motion'
import { PRODUCTS } from '@/lib/content'

export default function Products() {
  return (
    <section id="products" className="bg-surface py-24 px-6">
      <AnimatedSection className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="font-dm text-xs font-medium tracking-[0.2em] text-violet uppercase mb-3">
            WHAT WE&rsquo;VE BUILT
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-text mb-4">
            From Idea to Production
          </h2>
          <p className="font-dm text-muted max-w-lg mx-auto">
            Products we&rsquo;ve designed, built, and shipped — spanning finance, productivity, and research.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
