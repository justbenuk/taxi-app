import { getAllHeros } from "@/actions/hero-actions";
import HeroSection from "@/components/hero/hero-section";
import ChooseVehicle from "./_sections/choose-vehicle";
import MakesDifference from "./_sections/make-diffrance";
import WorkForUs from "./_sections/work-for-us";
import CommunitySection from "./_sections/community";
import { Suspense } from "react";
import HeroSkeleton from "@/components/skeletons/hero-skeleton";
import FrontContact from "./_sections/front-contact";

export default async function Home() {
  const allHeros = await getAllHeros();

  return (
    <>
      <HeroSection heroItems={allHeros} />
      <div className="py-20">
        <Suspense fallback={<HeroSkeleton />}>
          <MakesDifference />
        </Suspense>
      </div>
      <div className="bg-muted dark:bg-neutral-900/20 py-20">
        <ChooseVehicle />
      </div>
      <div className="py-20">
        <CommunitySection />
        <WorkForUs />
      </div>
      <FrontContact />
    </>
  );
}
