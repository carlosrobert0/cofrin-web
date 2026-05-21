import { Hero } from './_components/Hero'
import { Features } from './_components/Features'
import { Showcase } from './_components/Showcase'
import { CTA } from './_components/CTA'
import { Footer } from './_components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Features />
      <Showcase />
      <CTA />
      <Footer />
    </main>
  )
}
