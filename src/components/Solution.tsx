import { MapPin, Star, MessageCircle, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Solution() {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: MapPin,
      badge: t.solution.presence.badge,
      title: t.solution.presence.title,
      description: t.solution.presence.description,
      borderColor: 'border-grape',
      bgColor: 'bg-grape/10',
      textColor: 'text-grape',
    },
    {
      icon: Star,
      badge: t.solution.reviews.badge,
      title: t.solution.reviews.title,
      description: t.solution.reviews.description,
      borderColor: 'border-green',
      bgColor: 'bg-green/10',
      textColor: 'text-green',
    },
    {
      icon: MessageCircle,
      badge: t.solution.conversations.badge,
      title: t.solution.conversations.title,
      description: t.solution.conversations.description,
      borderColor: 'border-teal',
      bgColor: 'bg-teal/10',
      textColor: 'text-teal',
    },
    {
      icon: DollarSign,
      badge: t.solution.roi.badge,
      title: t.solution.roi.title,
      description: t.solution.roi.description,
      borderColor: 'border-orange',
      bgColor: 'bg-orange/10',
      textColor: 'text-orange',
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-text-light mb-3">
            {t.solution.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{t.solution.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className={`bg-white dark:bg-navy rounded-lg p-6 border-l-4 ${solution.borderColor} border-r border-t border-b border-border-light dark:border-border-dark hover:shadow-md transition-all group`}
              >
                <div className={`w-12 h-12 ${solution.bgColor} ${solution.textColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`inline-block px-3 py-1 ${solution.bgColor} ${solution.textColor} text-xs font-semibold rounded-full mb-3`}>
                  {solution.badge}
                </div>
                <h3 className="text-lg font-semibold text-navy dark:text-text-light mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
