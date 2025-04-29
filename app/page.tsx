import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Team from "@/components/team"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Pricing />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
