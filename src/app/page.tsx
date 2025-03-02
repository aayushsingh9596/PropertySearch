import FeaturedProperties from "@/components/FeaturedProperties"
import Hero from "@/components/Hero"
import HomeProperties from "@/components/HomeProperties"
import InfoBoxes from "@/components/InfoBoxes"
import Link from "next/link"

const page = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
      <FeaturedProperties/>
    </>
  )
}

export default page