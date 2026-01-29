import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              О нашем отеле
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Место, где сбываются мечты о идеальном семейном отдыхе на море
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                Alean Family Resort & SPA Doville — это современный четырехзвездочный отель, расположенный 
                в самом сердце курортной Анапы, всего в 100 метрах от пляжа Черного моря.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Мы создали пространство, где каждая деталь продумана для комфорта и удовольствия наших гостей. 
                Просторные номера с видом на море, разнообразное питание, современный SPA-центр и множество 
                развлечений для детей и взрослых.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Наша команда профессионалов работает круглосуточно, чтобы ваш отдых был незабываемым.
              </p>
            </div>

            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-xl flex items-center justify-center">
              <Icon name="Hotel" size={120} className="text-primary/30" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Icon name="Award" size={40} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">15 лет опыта</h3>
              <p className="text-muted-foreground">
                Более 15 лет мы принимаем гостей и создаем незабываемые впечатления
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Icon name="Users" size={40} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">50 000+ гостей</h3>
              <p className="text-muted-foreground">
                Тысячи семей выбирают наш отель для своего отдыха год за годом
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Icon name="Star" size={40} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">4.8 рейтинг</h3>
              <p className="text-muted-foreground">
                Высочайшие оценки от наших гостей на всех платформах бронирования
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
