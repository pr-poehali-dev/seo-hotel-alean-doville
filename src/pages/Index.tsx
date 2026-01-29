import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Services from '@/components/Services';
import Excursions from '@/components/Excursions';
import Gallery from '@/components/Gallery';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Services />
        <Excursions />
        <Gallery />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
