"use client";
import dynamic from "next/dynamic";
import RenderModel from "@/components/RenderModel";

const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function WizardClient() {
  return (
    <RenderModel>
      <Wizard />
    </RenderModel>
  );
}


