import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Promo from '@/components/Promo'
import WhatsAppButton from '@/components/WhatsAppButton'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Promo />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
