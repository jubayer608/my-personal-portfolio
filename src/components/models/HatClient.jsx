"use client";
import dynamic from "next/dynamic";
import RenderModel from "@/components/RenderModel";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export default function HatClient() {
  return (
    <RenderModel>
      <HatModel />
    </RenderModel>
  );
}


