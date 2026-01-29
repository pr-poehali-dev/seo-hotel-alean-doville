import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const excursions = [
  {
    title: 'Обзорная экскурсия по Анапе',
    description: 'Знакомство с главными достопримечательностями города',
    duration: '3 часа',
    price: '1 200 ₽',
    schedule: ['Пн, Ср, Пт', '10:00'],
    highlights: ['Набережная', 'Маяк', 'Археологический музей']
  },
  {
    title: 'Винный тур в Абрау-Дюрсо',
    description: 'Дегустация вин на знаменитом заводе шампанских вин',
    duration: '6 часов',
    price: '2 800 ₽',
    schedule: ['Вт, Чт, Сб', '09:00'],
    highlights: ['Завод "Абрау-Дюрсо"', 'Дегустация', 'Озеро Абрау']
  },
  {
    title: 'Утришский дельфинарий',
    description: 'Незабываемое шоу с дельфинами и морскими котиками',
    duration: '4 часа',
    price: '1 800 ₽',
    schedule: ['Ежедневно', '11:00, 15:00'],
    highlights: ['Шоу дельфинов', 'Фото с животными', 'Заповедник']
  },
  {
    title: 'Долина лотосов',
    description: 'Прогулка на катере по цветущим лотосам',
    duration: '5 часов',
    price: '2 200 ₽',
    schedule: ['Пн, Ср, Пт, Вс', '08:00'],
    highlights: ['Катер', 'Лотосы', 'Природа']
  },
  {
    title: 'Грязевые вулканы Тамани',
    description: 'Оздоровительные процедуры на природных вулканах',
    duration: '7 часов',
    price: '2 500 ₽',
    schedule: ['Вт, Чт, Сб', '08:30'],
    highlights: ['Вулканы', 'Грязевые ванны', 'Пляж']
  },
  {
    title: 'Конные прогулки',
    description: 'Верховая езда по живописным местам',
    duration: '2 часа',
    price: '1 500 ₽',
    schedule: ['Ежедневно', '09:00, 17:00'],
    highlights: ['Лошади', 'Инструктор', 'Природа']
  }
];

const Excursions = () => {
  return (
    <section id="excursions" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Экскурсии
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя красоты Анапы и окрестностей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {excursions.map((excursion, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{excursion.title}</CardTitle>
                      <CardDescription className="text-base">{excursion.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-lg px-3 py-1 ml-2">
                      {excursion.price}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span>{excursion.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <Icon name="Calendar" size={16} className="text-muted-foreground mt-1" />
                      <div>
                        <p className="font-medium text-sm">{excursion.schedule[0]}</p>
                        <p className="text-sm text-muted-foreground">{excursion.schedule[1]}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium text-sm flex items-center">
                      <Icon name="MapPin" size={16} className="mr-2 text-muted-foreground" />
                      Программа:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {excursion.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    <Icon name="Ticket" size={18} className="mr-2" />
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                  <Icon name="Info" size={24} className="text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Информация для гостей</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Check" size={18} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>Запись на экскурсии — на стойке регистрации или по телефону</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={18} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>Трансфер от отеля включен в стоимость</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={18} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>Для детей до 5 лет — скидка 50%</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={18} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>Возможна индивидуальная программа по запросу</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Excursions;
