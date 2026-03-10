
import Hero from './components/Hero';
import TrustRow from './components/TrustRow';
import ProductShowcase from './components/ProductShowcase';
import DeveloperSection from './components/DeveloperSection';
import UseCases from './components/UseCases';
import SocialProof from './components/SocialProof';
import PricingPreview from './components/PricingPreview';
import FinalCTA from './components/FinalCTA';
import ContactForm from './components/ContactForm';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TrustRow />
      <ProductShowcase />
      <DeveloperSection />
      <UseCases />
      <SocialProof />
      <PricingPreview />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </div>
  );
}
