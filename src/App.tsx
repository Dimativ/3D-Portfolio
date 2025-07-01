import { Navbar } from './components/Navbar.tsx';
import { Contact } from './sections/Contact.tsx';
import { ExperienceSection } from './sections/ExperienceSection.tsx';
import { FeatureCards } from './sections/FeatureCards.tsx';
import { Footer } from './sections/Footer.tsx';
import { Hero } from './sections/Hero.tsx';
import { ShowcaseSection } from './sections/ShowcaseSection.tsx';
import { TechStack } from './sections/TechStack.tsx';
import { Testimonials } from './sections/Testimonials.tsx';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
