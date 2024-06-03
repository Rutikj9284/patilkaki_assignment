import './App.css';
import CTA from './components/CTA';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import KeyMetrics from './components/KeyMetrics';
import KeyProblemsSolved from './components/KeyProblemsSolved';
import ProblemTarget from './components/ProblemTarget';
import Reviews from './components/Reviews';
function App() {
  return (
    <div>
      <HeroSection />
      <KeyProblemsSolved />
      <KeyMetrics />
      <Reviews />
      <ProblemTarget />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
