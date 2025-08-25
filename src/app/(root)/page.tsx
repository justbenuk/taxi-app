import { getAllHeros } from "@/actions/hero-actions";
import HeroSection from "@/components/hero/hero-section";
import ChooseVehicle from "./_sections/choose-vehicle";
import MakesDifference from "./_sections/make-diffrance";

export default async function Home() {
  const allHeros = await getAllHeros();

  return (
    <>
      <HeroSection heroItems={allHeros} />
      <div className="py-20">
        <MakesDifference />
      </div>
      <div className="bg-muted dark:bg-neutral-900/20 py-20">
        <ChooseVehicle />
      </div>
      <div className="py-20"></div>
    </>
  );
}
