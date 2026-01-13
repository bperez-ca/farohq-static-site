import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function SocialProof() {
  const { t } = useLanguage();

  const metrics = [
    {
      number: t.social.metric1.number,
      label: t.social.metric1.label,
      description: t.social.metric1.description,
      color: 'green',
    },
    {
      number: t.social.metric2.number,
      label: t.social.metric2.label,
      description: t.social.metric2.description,
      color: 'grape',
    },
    {
      number: t.social.metric3.number,
      label: t.social.metric3.label,
      description: t.social.metric3.description,
      color: 'orange',
    },
  ];

  const testimonials = [
    {
      quote: t.social.testimonial1.quote,
      name: t.social.testimonial1.name,
      role: t.social.testimonial1.role,
    },
    {
      quote: t.social.testimonial2.quote,
      name: t.social.testimonial2.name,
      role: t.social.testimonial2.role,
    },
    {
      quote: t.social.testimonial3.quote,
      name: t.social.testimonial3.name,
      role: t.social.testimonial3.role,
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-text-light mb-3">
            {t.social.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{t.social.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const colorClasses = {
              green: 'text-green',
              grape: 'text-grape',
              orange: 'text-orange',
            };
            return (
              <div key={index} className="bg-white dark:bg-navy rounded-lg p-6 border border-border-light dark:border-border-dark text-center">
                <div className={`text-4xl font-bold ${colorClasses[metric.color as keyof typeof colorClasses]} mb-2`}>
                  {metric.number}
                </div>
                <div className="text-lg font-semibold text-navy dark:text-text-light mb-2">
                  {metric.label}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-navy rounded-lg p-6 border-l-4 border-grape border-r border-t border-b border-border-light dark:border-border-dark"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-grape to-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex items-center space-x-1">
                    <div className="font-semibold text-navy dark:text-text-light text-sm">
                      {testimonial.name}
                    </div>
                    <CheckCircle className="w-4 h-4 text-green fill-current" />
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
