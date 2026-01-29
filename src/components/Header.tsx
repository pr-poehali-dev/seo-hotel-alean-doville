import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Icon name="Waves" className="text-primary" size={32} />
            <div>
              <h1 className="text-2xl font-bold text-primary">Alean Family</h1>
              <p className="text-xs text-muted-foreground">Doville Hotel</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" onClick={() => scrollToSection('home')}>
              Главная
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('about')}>
              О отеле
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('rooms')}>
              Номера
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('services')}>
              Услуги
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('excursions')}>
              Экскурсии
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('gallery')}>
              Галерея
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contacts')}>
              Контакты
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            <Button variant="ghost" onClick={() => scrollToSection('home')} className="justify-start">
              Главная
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('about')} className="justify-start">
              О отеле
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('rooms')} className="justify-start">
              Номера
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('services')} className="justify-start">
              Услуги
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('excursions')} className="justify-start">
              Экскурсии
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('gallery')} className="justify-start">
              Галерея
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contacts')} className="justify-start">
              Контакты
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
