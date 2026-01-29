import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Waves" className="text-primary" size={32} />
                <div>
                  <h3 className="text-xl font-bold">Alean Family</h3>
                  <p className="text-sm opacity-70">Doville Hotel</p>
                </div>
              </div>
              <p className="text-sm opacity-70">
                Семейный отдых на берегу Черного моря в Анапе
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#home" className="hover:opacity-100 transition-opacity">Главная</a></li>
                <li><a href="#about" className="hover:opacity-100 transition-opacity">О отеле</a></li>
                <li><a href="#rooms" className="hover:opacity-100 transition-opacity">Номера</a></li>
                <li><a href="#services" className="hover:opacity-100 transition-opacity">Услуги</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#excursions" className="hover:opacity-100 transition-opacity">Экскурсии</a></li>
                <li><a href="#gallery" className="hover:opacity-100 transition-opacity">Галерея</a></li>
                <li><a href="#contacts" className="hover:opacity-100 transition-opacity">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm opacity-70">
                <li className="flex items-start space-x-2">
                  <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                  <span>г. Анапа, Пионерский проспект, 257</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="flex-shrink-0" />
                  <a href="tel:+78612345678" className="hover:opacity-100 transition-opacity">
                    +7 (861) 234-56-78
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} className="flex-shrink-0" />
                  <a href="mailto:info@alean-doville.ru" className="hover:opacity-100 transition-opacity">
                    info@alean-doville.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm opacity-70 mb-4 md:mb-0">
              © {currentYear} Alean Family Resort & SPA Doville. Все права защищены.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
