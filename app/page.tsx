import { Delivery } from "./components/delivery";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { PlantCare } from "./components/plant-care";
import { PlantStock } from "./components/plant-stock";
import { Visit } from "./components/visit";
import { Welcome } from "./components/welcome";
import { Workshops } from "./components/workshops";

export default function Home() {
  return (
    <>
      <a href="#main" className="fixed top-[-5rem] left-4 z-50 bg-cream px-4 py-3 font-bold text-forest focus:top-4">Skip to main content</a>
      <Header />
      <main id="main">
        <Hero />
        <Welcome />
        <PlantStock />
        <PlantCare />
        <Workshops />
        <Delivery />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
