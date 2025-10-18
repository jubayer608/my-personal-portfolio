"use client";
import dynamic from "next/dynamic";
import RenderModel from "@/components/RenderModel";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export default function StaffClient() {
  return (
    <RenderModel>
      <Staff />
    </RenderModel>
  );
}


