import Image from "next/image";
// import ProjectList from "@/components/projects";
// import { projectsData } from "../../data";
import Projects from "@/components/Projects";
import StaffClient from "@/components/models/StaffClient";

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <Image
        src="/background/projects-background.png"
        fill
        alt="Next.js Portfolio website's about page background image"
        className="object-cover object-center opacity-60"
        priority
        sizes="100vw"
      />
      </div>

      {/* <ProjectList projects={projectsData} /> */}
      <div className="w-full">
         <Projects></Projects>
      </div>

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <StaffClient />
      </div>
    </>
  );
}
