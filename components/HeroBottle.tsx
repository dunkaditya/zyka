"use client";

import dynamic from "next/dynamic";
import Bottle from "./Bottle";

const Bottle3D = dynamic(() => import("./Bottle3D"), {
  ssr: false,
  loading: () => <Bottle className="bob w-3/4 opacity-80" />,
});

export default function HeroBottle() {
  return (
    <div className="flex h-[420px] w-full items-center justify-center sm:h-[480px] lg:h-[560px]">
      <Bottle3D className="h-full w-full" />
    </div>
  );
}
