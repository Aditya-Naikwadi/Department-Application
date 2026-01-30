import Hero from "@/components/Hero";
import ProgramsGrid from "@/components/ProgramsGrid";
import InfoCards from "@/components/InfoCards";
import StatsBanner from "@/components/StatsBanner";
import FacultyList from "@/components/FacultyList";
import ELibrary from "@/components/ELibrary";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ProgramsGrid />
      <InfoCards />
      <StatsBanner />
      <FacultyList />
      <ELibrary />
      <Gallery />
    </main>
  );
}
