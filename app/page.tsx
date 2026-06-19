import Navbar     from '@/components/layout/Navbar'
import Footer     from '@/components/layout/Footer'
import Hero       from '@/components/sections/Hero'
import GradientLine from '@/components/ui/GradientLine'
import Services   from '@/components/sections/Services'
import Products   from '@/components/sections/Products'
import About      from '@/components/sections/About'
import Contact    from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GradientLine />
        <Services />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
