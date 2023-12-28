import Header from "@/Component/Header/Header"
import Hero from "@/Component/Hero/Hero"
import Feature from "@/Component/Feature_section/Feature"
import Community from "@/Component/community/Community"
import Testimonials from "@/Component/Testimonials/Testimonials"

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Feature/>
      <Community/>
      <Testimonials/>
    </div>
  )
}
