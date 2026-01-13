import { Smartphone, DollarSign, Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function LatamWedge() {
  const { t } = useLanguage();

  const columns = [
    {
      icon: Smartphone,
      title: t.latam.col1.title,
      description: t.latam.col1.description,
    },
    {
      icon: DollarSign,
      title: t.latam.col2.title,
      description: t.latam.col2.description,
    },
    {
      icon: Building2,
      title: t.latam.col3.title,
      description: t.latam.col3.description,
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-8 bg-gradient-to-r from-grape to-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t.latam.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((col, index) => {
            const Icon = col.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{col.title}</h3>
                <p className="text-white/90">{col.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
