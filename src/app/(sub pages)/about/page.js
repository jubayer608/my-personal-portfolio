import Image from "next/image";
import AboutDetails from "@/components/about";
import HatClient from "@/components/models/HatClient";
import bg from "../../../../public/background/about-background.png";

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      {/* ✅ Background image fixed full screen */}
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <Image
          src={bg}
          alt="About page background image"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
      </div>

      {/* ✅ Scrollable main content */}
      <main className="relative z-10 flex flex-col items-center justify-center">
        {/* ===== Hero Section ===== */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4">
          {/* 🎩 Hat (large, same as before but text closer) */}
          <div className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] flex items-end justify-center">
            <HatClient />
          </div>

          {/* 🔤 Heading & Intro Text — directly below hat */}
          <div className="-mt-4 flex flex-col items-center space-y-1 sm:space-y-2">
            <h1 className="font-extrabold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent drop-shadow-lg tracking-tight">
              JUBAYER
            </h1>
            <p className="max-w-2xl text-center font-light text-foreground/90 text-base sm:text-lg">
              Passionate{" "}
              <span className="font-medium text-accent">
                Front-End Developer
              </span>{" "}
              from Bangladesh — building elegant, interactive web experiences
              with
              <span className="font-medium text-accent"> React</span>,
              <span className="font-medium text-accent"> Next.js</span> &
              <span className="font-medium text-accent"> Three.js</span>.
            </p>
          </div>
        </section>

        {/* ===== About Details Section ===== */}
        <section className="w-full">
          <AboutDetails />
        </section>
      </main>
    </>
  );
}
