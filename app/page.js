import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloadingNavbar";

export default function Home() {
  return (
    <main
      id="#home"
      className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto  sm:px-10 "
    >
      <div className="max-w-7xl w-full">
        <Hero />
        <FloatingNav />
        <Grid />
        <Experience />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
