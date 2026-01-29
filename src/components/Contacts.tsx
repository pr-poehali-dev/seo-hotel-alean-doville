import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Как нас найти</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Адрес</p>
                        <p className="text-muted-foreground">
                          г. Анапа, Пионерский проспект, 257
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Телефон</p>
                        <a href="tel:+78612345678" className="text-primary hover:underline">
                          +7 (861) 234-56-78
                        </a>
                        <p className="text-sm text-muted-foreground">Круглосуточно</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <a href="mailto:info@alean-doville.ru" className="text-primary hover:underline">
                          info@alean-doville.ru
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                        <Icon name="Clock" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Заезд / Выезд</p>
                        <p className="text-muted-foreground">14:00 / 12:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <p className="font-medium mb-4">Как добраться:</p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start">
                      <Icon name="Plane" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                      <span>От аэропорта Анапа — 20 минут на такси</span>
                    </div>
                    <div className="flex items-start">
                      <Icon name="Train" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                      <span>От ж/д вокзала — 15 минут на такси</span>
                    </div>
                    <div className="flex items-start">
                      <Icon name="Car" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                      <span>Бесплатный трансфер от аэропорта и вокзала</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex flex-col items-center justify-center p-8">
                <Icon name="Map" size={120} className="text-primary/30 mb-6" />
                <p className="text-center text-muted-foreground mb-6">
                  Интерактивная карта с указанием местоположения отеля
                </p>
                <Button variant="outline" size="lg">
                  <Icon name="Navigation" size={18} className="mr-2" />
                  Открыть карту
                </Button>
              </div>
            </Card>
          </div>

          <Card className="mt-8 bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Готовы забронировать?</h3>
              <p className="text-lg mb-6 opacity-90">
                Свяжитесь с нами для бронирования или консультации
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 border-white/30">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
