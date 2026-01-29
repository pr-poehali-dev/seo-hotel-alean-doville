import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'UtensilsCrossed',
    title: 'Рестораны и бары',
    description: 'Главный ресторан с системой "всё включено", ресторан a la carte, лобби-бар и пляжный бар'
  },
  {
    icon: 'Sparkles',
    title: 'SPA-центр',
    description: 'Профессиональный массаж, косметология, хаммам, сауна и широкий спектр оздоровительных процедур'
  },
  {
    icon: 'Waves',
    title: 'Бассейны',
    description: 'Открытый бассейн с подогревом, детский бассейн с горками и крытый бассейн для круглогодичного отдыха'
  },
  {
    icon: 'Baby',
    title: 'Детский клуб',
    description: 'Анимация, игровые комнаты, детская площадка и профессиональные воспитатели'
  },
  {
    icon: 'Dumbbell',
    title: 'Фитнес-центр',
    description: 'Современный тренажерный зал, групповые занятия йогой, аквааэробика и персональный тренер'
  },
  {
    icon: 'Music',
    title: 'Развлечения',
    description: 'Вечерние шоу-программы, живая музыка, дискотека и караоке-бар'
  },
  {
    icon: 'Wifi',
    title: 'Wi-Fi',
    description: 'Бесплатный высокоскоростной интернет на всей территории отеля'
  },
  {
    icon: 'ParkingCircle',
    title: 'Парковка',
    description: 'Бесплатная охраняемая парковка для гостей отеля'
  },
  {
    icon: 'Shield',
    title: 'Безопасность',
    description: 'Круглосуточная охрана, видеонаблюдение и медицинский пункт'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Услуги и удобства
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Всё необходимое для комфортного и незабываемого отдыха
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon name={service.icon} size={36} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
