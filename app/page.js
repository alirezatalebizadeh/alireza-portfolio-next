import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloadingNavbar";
import ThemeToggle from "@/components/ui/ThemeToggle";

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
        
      </div>
    </main>
  );
}
