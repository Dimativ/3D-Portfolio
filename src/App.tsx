import { Navbar } from './components/Navbar.tsx';
import { ExperienceSection } from './sections/ExperienceSection.tsx';
import { FeatureCards } from './sections/FeatureCards.tsx';
import { Hero } from './sections/Hero.tsx';
import { ShowcaseSection } from './sections/ShowcaseSection.tsx';
import { TechStack } from './sections/TechStack.tsx';

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
      </div>
    </main>
  );
};

export default App;
