import { MessageSquare, Star, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Problem() {
  const { t } = useLanguage();

  const problems = [
    {
      icon: MessageSquare,
      title: t.problem.pain1.title,
      description: t.problem.pain1.description,
      color: 'teal',
    },
    {
      icon: Star,
      title: t.problem.pain2.title,
      description: t.problem.pain2.description,
      color: 'green',
    },
    {
      icon: TrendingUp,
      title: t.problem.pain3.title,
      description: t.problem.pain3.description,
      color: 'orange',
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-text-light mb-3">
            {t.problem.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{t.problem.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const colorClasses = {
              teal: 'bg-teal/10 text-teal',
              green: 'bg-green/10 text-green',
              orange: 'bg-orange/10 text-orange',
            };
            return (
              <div
                key={index}
                className="bg-white dark:bg-navy rounded-lg p-6 border border-border-light dark:border-border-dark hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 ${colorClasses[problem.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-navy dark:text-text-light mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
