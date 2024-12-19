"use client";

import { MissionValues } from "@/components/sections/mission-values";
import { TeamSection } from "@/components/sections/team-section";
import { Credentials } from "@/components/sections/credentials";
import { Experience } from "@/components/sections/experience";
import { Awards } from "@/components/sections/awards";

export default function AboutPage() {
  return (
    <main>
      <MissionValues />
      <TeamSection />
      <Credentials />
      <Experience />
      <Awards />
    </main>
  );
}
