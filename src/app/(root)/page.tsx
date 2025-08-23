import { getAllHeros } from "@/actions/hero-actions";
import HeroSection from "@/components/hero/hero-section";

export default async function Home() {

  const allHeros = await getAllHeros()

  return (
    <>
      <HeroSection heroItems={allHeros} />
    </>
  )
}
