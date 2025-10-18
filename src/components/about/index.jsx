import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="absolute inset-0 -z-20" />
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        {/* About Me */}
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-accent  text-left w-full capitalize">
            About Me
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            I’m <span className="text-accent">Jubayer Hossan</span>, a student and front‑end developer from Bangladesh. My programming
            journey began with curiosity about how the web works and grew into a passion for
            building fast, beautiful, and accessible interfaces. I enjoy working with React,
            Next.js, Tailwind CSS, and I’m currently learning Three.js to bring interactive 3D
            experiences to the web.
            <br />
            <br />
            I love crafting smooth user experiences, clean component architectures, and pixel‑perfect
            designs. Outside of programming, <span className="text-accent">I enjoy exploring new tech, watching football</span>, and
            spending time sketching ideas for future projects.
          </p>
        </ItemLayout>

        {/* Experience (beside About Me on large screens) */}
        <ItemLayout
          className={
            "col-span-full lg:col-span-4 row-span-2 flex-col items-start text-center lg:text-left"
          }
        >
          <h2 className="text-xl md:text-2xl text-accent w-full capitalize">Experience</h2>
          <div className="w-full flex flex-col items-center lg:items-start">
            <p className="text-7xl font-bold text-accent leading-none">1+</p>
            <p className="text-sm text-foreground/70">years of hands‑on practice</p>
          </div>
          <p className="font-light text-xs sm:text-sm md:text-base mt-3">
            Building responsive UI, components and animations while learning by doing. Projects
            span personal, academic and small freelance work focused on React, Next.js, Tailwind
            and Three.js basics.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-md border border-accent/40">React</span>
            <span className="px-3 py-1 rounded-md border border-accent/40">Next.js</span>
            <span className="px-3 py-1 rounded-md border border-accent/40">Tailwind CSS</span>
            <span className="px-3 py-1 rounded-md border border-accent/40">Three.js</span>
          </div>
        </ItemLayout>

        {/* My Skills - Section Title */}
        <ItemLayout className={"col-span-full"}>
          <h2 className="text-xl md:text-2xl w-full text-accent  capitalize text-center">My Skills</h2>
        </ItemLayout>

        {/* Skills - Frontend */}
        <ItemLayout className={"col-span-full md:col-span-4"}>
          <div className="w-full">
            <h3 className="text-lg md:text-xl mb-3 text-accent">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md border border-accent/40">HTML</span>
              <span className="px-3 py-1 rounded-md border border-accent/40">CSS</span>
              <span className="px-3 py-1 rounded-md border border-accent/40">JavaScript</span>
              <span className="px-3 py-1 rounded-md border border-accent/40">React</span>
              <span className="px-3 py-1 rounded-md border border-accent/40">Next.js</span>
              <span className="px-3 py-1 rounded-md border border-accent/40">Tailwind CSS</span>
              <span className="px-3 py-1 rounded-md border border-accent/40">Three.js (learning)</span>
            </div>
          </div>
        </ItemLayout>

        {/* Skills - Backend */}
        <ItemLayout className={"col-span-full md:col-span-4"}>
          <div className="w-full">
            <h3 className="text-lg md:text-xl mb-3 text-accent">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md border border-accent/40">Node.js</span>
              <span className="px-3 py-1 rounded-md border border-accent/40">Express.js</span>
              <span className="px-3 py-1 rounded-md border border-accent/40">MongoDB</span>
              <span className="px-3 py-1 rounded-md border border-accent/40">Firebase</span>
            </div>
          </div>
        </ItemLayout>

        {/* Skills - Tools */}
        <ItemLayout className={"col-span-full md:col-span-4"}>
          <div className="w-full">
            <h3 className="text-lg md:text-xl mb-3 text-accent">Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md border border-accent/40">Git & GitHub</span>
               <span className="px-3 py-1 rounded-md border border-accent/40">Postman</span>
                <span className="px-3 py-1 rounded-md border border-accent/40">Netlify</span>
                 <span className="px-3 py-1 rounded-md border border-accent/40">DaisyUI</span>
                 <span className="px-3 py-1 rounded-md border border-accent/40">Mamba UI</span>

              <span className="px-3 py-1 rounded-md border border-accent/40">Figma</span>
              <span className="px-3 py-1 rounded-md border border-accent/40">VS Code</span>
            </div>
          </div>
        </ItemLayout>

        {/* Optional skill icons row */}
        <ItemLayout className={"col-span-full !p-0"}>
          <img
            className="w-full p-6 h-auto"
            src={`https://skillicons.dev/icons?i=html,css,js,react,nextjs,threejs,tailwind,git,github,figma`}
            alt="Skills"
            loading="lazy"
          />
        </ItemLayout>

        {/* GitHub Stats */}
        <ItemLayout className={"col-span-full"}>
          <h2 className="text-xl md:text-2xl w-full text-accent capitalize text-center">⚡ GitHub Stats ⚡</h2>
        </ItemLayout>
        <ItemLayout className={"col-span-full !p-0"}>
          <div className="w-full flex flex-wrap items-center justify-center gap-4 p-4">
            <img
              width="390"
              className="h-auto"
              src="https://streak-stats.demolab.com?user=jubayer608&theme=react&hide_border=false"
              alt="GitHub Streak"
              loading="lazy"
            />
            <img
              width="390"
              className="h-auto"
              src="https://github-readme-stats.vercel.app/api?username=jubayer608&show_icons=true&theme=react&rank_icon=github&border_radius=10"
              alt="GitHub Stats"
              loading="lazy"
            />
            <img
              width="325"
              className="h-auto"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=jubayer608&layout=compact&theme=react&border_radius=10"
              alt="Top Languages"
              loading="lazy"
            />
          </div>
        </ItemLayout>


 {/* Education*/}
        <ItemLayout className={"col-span-full"}>
          <h2 className="text-xl md:text-2xl w-full text-accent capitalize text-center">Educational Qualification</h2>
        </ItemLayout>
        {/* Education */}
        <ItemLayout className={"col-span-full"}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="custom-bg w-full p-5 rounded-lg border border-accent/30 hover:shadow-glass-sm transition-shadow">
              <p className="text-accent font-semibold text-lg">Bachelor of Science in Physics</p>
              <p className="text-sm">Government Titumir College (3rd Year)</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2 py-1 rounded-md border border-accent/40">2021 - Present</span>
                <span className="px-2 py-1 rounded-md border border-accent/40">Dhaka University (Affiliated)</span>
              </div>
              <p className="mt-2 text-foreground/70 text-sm">Currently pursuing B.Sc with strong focus on problem solving and core science.</p>
            </div>

            <div className="custom-bg w-full p-5 rounded-lg border border-accent/30 hover:shadow-glass-sm transition-shadow">
              <p className="text-accent font-semibold text-lg">Higher Secondary Certificate (HSC)</p>
              <p className="text-sm">BCIC College, Dhaka</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2 py-1 rounded-md border border-accent/40">2020</span>
                <span className="px-2 py-1 rounded-md border border-accent/40">Science</span>
                <span className="px-2 py-1 rounded-md border border-accent/40">GPA 5.00</span>
              </div>
              <p className="mt-2 text-foreground/70 text-sm">Completed with distinction; strengthened foundation in Physics, Chemistry, and Math.</p>
            </div>

            <div className="custom-bg w-full p-5 rounded-lg border border-accent/30 hover:shadow-glass-sm transition-shadow">
              <p className="text-accent font-semibold text-lg">Secondary School Certificate (SSC)</p>
              <p className="text-sm">Talimnogor SM High School, Pabna</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2 py-1 rounded-md border border-accent/40">2018</span>
                <span className="px-2 py-1 rounded-md border border-accent/40">Science</span>
                <span className="px-2 py-1 rounded-md border border-accent/40">GPA 5.00</span>
              </div>
              <p className="mt-2 text-foreground/70 text-sm">Strong base in Mathematics and General Science; active in co‑curriculars.</p>
            </div>
          </div>
        </ItemLayout>

        {/* Highlighted note */}
        <ItemLayout className={"col-span-full md:col-span-6"}>
          <p className="text-sm text-foreground/80">
            I’m actively building projects to sharpen my skills in React, Next.js, and Three.js.
            Check back soon for featured work and live demos.
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6"}>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-md border border-accent/40">Responsive UI</span>
            <span className="px-3 py-1 rounded-md border border-accent/40">Accessibility</span>
            <span className="px-3 py-1 rounded-md border border-accent/40">Performance</span>
            <span className="px-3 py-1 rounded-md border border-accent/40">Animations</span>
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
