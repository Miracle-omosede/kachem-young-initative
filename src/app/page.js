import GiveScholarship from "@/components/GiveScholarship/GiveScholarship";
import Hero from "@/components/Hero/Hero";
import Mission from "@/components/Mission/Mission";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import React from "react";

export default function Home() {
  return (
    <main className="">
      <div className="relative z-50 top-0 right-0">
        <div className="absolute top-0 left-0 w-full">
          <Navbar/>
        </div>
        <div className="relative">
          <img className='absolute top-0 transition ease-in duration-200  -z-30 image w-full object-cover' width='' src="https://miracle.sirv.com/kachem-young-initiative/banner%20screen.png" alt="" />
          </div>
          <Hero/>

          <Mission/>
          <Projects/>
          <GiveScholarship/>
      </div>
    </main>
  );
}
