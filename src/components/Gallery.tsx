import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const galleryImages = [
  { id: 1, title: 'Фасад отеля', category: 'hotel' },
  { id: 2, title: 'Пляж', category: 'beach' },
  { id: 3, title: 'Бассейн', category: 'pool' },
  { id: 4, title: 'Номер люкс', category: 'room' },
  { id: 5, title: 'Ресторан', category: 'restaurant' },
  { id: 6, title: 'SPA-центр', category: 'spa' },
  { id: 7, title: 'Детская площадка', category: 'kids' },
  { id: 8, title: 'Вид с балкона', category: 'view' }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Галерея
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Посмотрите, как выглядит наш отель и территория
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative">
                  <Icon 
                    name="Image" 
                    size={48} 
                    className="text-primary/30 group-hover:scale-110 transition-transform" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-medium">{image.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center rounded-lg">
                <Icon name="Image" size={120} className="text-primary/30" />
              </div>
              {selectedImage && (
                <p className="text-center text-lg font-medium mt-4">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </p>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
