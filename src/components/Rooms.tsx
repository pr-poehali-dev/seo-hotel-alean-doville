import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const rooms = [
  {
    title: 'Стандартный номер',
    description: 'Уютный номер с видом на город',
    size: '25 м²',
    capacity: '2 взрослых',
    price: 'от 4 500 ₽',
    features: ['Кондиционер', 'Wi-Fi', 'Телевизор', 'Холодильник']
  },
  {
    title: 'Номер с видом на море',
    description: 'Комфортный номер с панорамным видом',
    size: '30 м²',
    capacity: '2 взрослых + 1 ребенок',
    price: 'от 6 500 ₽',
    features: ['Кондиционер', 'Wi-Fi', 'Балкон', 'Сейф', 'Мини-бар']
  },
  {
    title: 'Семейный номер',
    description: 'Просторный номер для всей семьи',
    size: '40 м²',
    capacity: '2 взрослых + 2 детей',
    price: 'от 8 500 ₽',
    features: ['Кондиционер', 'Wi-Fi', '2 комнаты', 'Балкон', 'Мини-кухня']
  },
  {
    title: 'Люкс с джакузи',
    description: 'Премиальный номер с джакузи',
    size: '50 м²',
    capacity: '2 взрослых',
    price: 'от 12 000 ₽',
    features: ['Джакузи', 'Терраса', 'Мини-бар', 'Сейф', 'Халаты']
  }
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Наши номера
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите идеальный номер для вашего отдыха — от уютных стандартных до роскошных люксов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <Icon name="BedDouble" size={80} className="text-primary/30" />
                  <Badge className="absolute top-4 right-4 text-base px-3 py-1">
                    {room.price}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{room.title}</CardTitle>
                  <CardDescription className="text-base">{room.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Maximize2" size={16} className="text-muted-foreground" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} className="text-muted-foreground" />
                      <span>{room.capacity}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium text-sm">Удобства:</p>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full" size="lg">
                    <Icon name="Calendar" size={18} className="mr-2" />
                    Забронировать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
