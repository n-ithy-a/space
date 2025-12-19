import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Showcase } from './components/Showcase';
import { Pricing } from './components/Pricing';
import { BookingForm } from './components/BookingForm';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import {TestSupabase} from '../components/TestSupabase'


export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Testimonials />
      <Pricing />
      <BookingForm />
      <Footer />
      <TestSupabase />

    </div>
  );
}