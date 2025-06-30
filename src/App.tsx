import { Navbar } from './components/Navbar.tsx';
import { ExperienceSection } from './sections/ExperienceSection.tsx';
import { FeatureCards } from './sections/FeatureCards.tsx';
import { Hero } from './sections/Hero.tsx';
import { ShowcaseSection } from './sections/ShowcaseSection.tsx';
import { TechStack } from './sections/TechStack.tsx';
import { Testimonials } from './sections/Testimonials.tsx';

const App = () => {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <ShowcaseSection />
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Testimonials />
      </div>
    </main>
  );
};

export default App;
