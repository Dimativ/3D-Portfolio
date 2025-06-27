import { Navbar } from './components/Navbar.tsx';
import { ExperienceSection } from './sections/ExperienceSection.tsx';
import { FeatureCards } from './sections/FeatureCards.tsx';
import { Hero } from './sections/Hero.tsx';
import { ShowcaseSection } from './sections/ShowcaseSection.tsx';

const App = () => {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <ShowcaseSection />
        <FeatureCards />
        <ExperienceSection />
      </div>
    </main>
  );
};

export default App;
