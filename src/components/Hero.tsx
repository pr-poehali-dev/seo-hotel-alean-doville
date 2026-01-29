import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Anchor" className="text-primary" size={48} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Alean Family Resort & SPA Doville
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Семейный отдых на берегу Черного моря в солнечной Анапе
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('rooms')}>
              <Icon name="BedDouble" size={20} className="mr-2" />
              Выбрать номер
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('contacts')}>
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <Icon name="MapPin" className="text-primary" size={32} />
              <p className="text-sm font-medium">100м до моря</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Icon name="UtensilsCrossed" className="text-primary" size={32} />
              <p className="text-sm font-medium">3 ресторана</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Icon name="Waves" className="text-primary" size={32} />
              <p className="text-sm font-medium">Открытый бассейн</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Icon name="Baby" className="text-primary" size={32} />
              <p className="text-sm font-medium">Детский клуб</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default Hero;
