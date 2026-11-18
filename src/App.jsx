import Hero from './components/Hero.jsx';
import Milestones from './components/Milestones.jsx';
import WishPortal from './components/WishPortal.jsx';
import Letter from './components/Letter.jsx';
import Pillars from './components/Pillars.jsx';
import Proposal from './components/Proposal.jsx';
import Footer from './components/Footer.jsx';
import FloatingHearts from './components/FloatingHearts.jsx';

// Page order follows the Figma design, minus the Memories section.
export default function App() {
  return (
    <div className="page">
      <FloatingHearts />
      <main>
        <Hero />
        <Milestones />
        <WishPortal />
        <Letter />
        <Pillars />
        <Proposal />
      </main>
      <Footer />
    </div>
  );
}
