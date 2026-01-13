import { Check, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getPricing } from '../utils/pricingConfig';

export function SimplePricingCards() {
  const { t, language } = useLanguage();
  const pricing = getPricing(language);

  const tiers = [
    {
      name: 'Starter',
      price: pricing.starter,
      features: t.pricing.simpleCards.starter.features,
      popular: false,
    },
    {
      name: 'Pro',
      price: pricing.pro,
      features: t.pricing.simpleCards.pro.features,
      popular: true,
    },
    {
      name: 'Scale',
      price: pricing.scale,
      features: t.pricing.simpleCards.scale.features,
      popular: false,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tiers.map((tier, index) => (
        <div
          key={index}
          className={`bg-white dark:bg-navy rounded-xl p-6 border-2 ${
            tier.popular
              ? 'border-grape shadow-lg bg-grape/5 dark:bg-grape/10'
              : 'border-border-light dark:border-border-dark'
          } transition-all hover:shadow-md relative`}
        >
          {tier.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="inline-flex items-center px-3 py-1 bg-grape text-white text-xs font-bold rounded-full shadow-md">
                <Star className="w-3 h-3 mr-1 fill-current" />
                {t.pricing.mostPopular}
              </div>
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-navy dark:text-text-light mb-2">{tier.name}</h3>
            <div className="flex items-baseline justify-center mb-1">
              <span className="text-sm text-gray-500 dark:text-gray-400 mr-1">{pricing.currencySymbol}</span>
              <span className="text-4xl font-bold text-navy dark:text-text-light">{tier.price}</span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">{pricing.interval}</span>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            {tier.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-grape mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#demo"
            className={`block text-center px-6 py-3 rounded-md font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-teal ${
              tier.popular
                ? 'bg-grape hover:bg-grape-dark text-white shadow-md'
                : 'bg-white dark:bg-surface-dark border-2 border-grape text-grape hover:bg-grape/5'
            }`}
          >
            {t.pricing.cta.replace('{tier}', tier.name)}
          </a>
        </div>
      ))}
    </div>
  );
}
