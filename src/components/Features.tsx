import { Inbox, Settings, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Inbox,
      title: t.features.feature1.title,
      description: t.features.feature1.description,
      color: 'grape',
    },
    {
      icon: Settings,
      title: t.features.feature2.title,
      description: t.features.feature2.description,
      color: 'green',
    },
    {
      icon: FileText,
      title: t.features.feature3.title,
      description: t.features.feature3.description,
      color: 'orange',
    },
  ];

  return (
    <section id="features" className="py-20 px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-text-light mb-4">
            {t.features.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              grape: 'bg-grape text-white',
              green: 'bg-green text-white',
              orange: 'bg-orange text-white',
            };
            return (
              <div
                key={index}
                className="bg-white dark:bg-navy rounded-lg p-8 border border-border-light dark:border-border-dark"
              >
                <div className={`w-16 h-16 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy dark:text-text-light mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
