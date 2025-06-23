import { Navbar } from './components/Navbar.tsx';
import { Hero } from './sections/Hero.tsx';
import { ShowcaseSection } from './sections/ShowcaseSection.tsx';

const App = () => {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <ShowcaseSection />
      </div>
    </main>
  );
};

export default App;
