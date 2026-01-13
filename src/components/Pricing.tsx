import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SimplePricingCards } from './SimplePricingCards';

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-text-light mb-3">
            {t.pricing.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{t.pricing.subtitle}</p>
        </div>

        <SimplePricingCards />

        <div className="text-center mt-12">
          <a
            href="/pricing-v2"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-grape text-grape hover:bg-grape/5 font-semibold rounded-md transition-colors group"
          >
            {t.pricing.viewFullPricing}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
