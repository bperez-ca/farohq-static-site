import { Check, X, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getPricing } from '../utils/pricingConfig';

export function PricingComparisonTable() {
  const { t, language } = useLanguage();
  const pricing = getPricing(language);

  const tiers = ['starter', 'pro', 'scale', 'enterprise'] as const;
  const prices = [pricing.starter, pricing.pro, pricing.scale, pricing.enterprise];

  const table = t.pricing.comparisonTable;

  const coreFeatures = [
    { label: table.bestFor, key: 'idealFor' as const },
    { label: table.clientExperience, key: 'clientExperience' as const },
    { label: table.agencySeats, key: 'agencySeats' as const },
    { label: table.smbsManaged, key: 'smbsManaged' as const },
    { label: table.locationsManaged, key: 'locationsManaged' as const },
  ];

  const advancedFeatures = [
    { label: table.clientSeats, key: 'clientSeats' as const },
    { label: table.unifiedInbox, key: 'unifiedInbox' as const },
    { label: table.igFbEmail, key: 'igFbEmail' as const },
    { label: table.reviews, key: 'reviews' as const },
    { label: table.gbpManagement, key: 'gbpManagement' as const },
    { label: table.listingsSync, key: 'listingsSync' as const },
    { label: table.aiCredits, key: 'aiCredits' as const },
    { label: table.snapshotReports, key: 'snapshotReports' as const },
    { label: table.dashboards, key: 'dashboards' as const },
    { label: table.branding, key: 'branding' as const },
    { label: table.customDomain, key: 'customDomain' as const },
    { label: table.removeBranding, key: 'removeBranding' as const },
    { label: table.rbac, key: 'rbac' as const },
    { label: table.approvals, key: 'approvals' as const },
    { label: table.activityLogs, key: 'activityLogs' as const },
    { label: table.integrations, key: 'integrations' as const },
    { label: table.support, key: 'support' as const },
    { label: table.onboarding, key: 'onboarding' as const },
  ];

  const tierNames = {
    starter: 'Starter',
    pro: 'Pro',
    scale: 'Scale',
    enterprise: 'Enterprise',
  };

  return (
    <div>
      <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-6 italic">
        {table.pricingNote}
      </p>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border border-border-light dark:border-border-dark rounded-lg">
            <table className="min-w-full divide-y divide-border-light dark:divide-border-dark">
              <thead className="bg-surface-light dark:bg-surface-dark">
                <tr>
                  <th className="px-4 py-4 text-left text-sm font-bold text-navy dark:text-text-light">
                  </th>
                  {tiers.map((tier, index) => (
                    <th
                      key={tier}
                      className={`px-4 py-4 text-center ${
                        tier === 'pro' ? 'bg-grape/5 dark:bg-grape/10 scale-105' : ''
                      }`}
                    >
                      <div className="relative">
                        {tier === 'pro' && (
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                            <div className="inline-flex items-center px-3 py-1 bg-grape text-white text-xs font-bold rounded-full shadow-lg">
                              <Star className="w-3 h-3 mr-1 fill-current" />
                              {t.pricing.mostPopular}
                            </div>
                          </div>
                        )}
                        <div className="mt-4">
                          <div className={`font-bold text-navy dark:text-text-light ${tier === 'pro' ? 'text-2xl' : 'text-lg'}`}>
                            {tierNames[tier]}
                          </div>
                          <div className="mt-2">
                            {prices[index] !== null ? (
                              <div className="flex items-baseline justify-center">
                                <span className={`text-gray-500 dark:text-gray-400 ${tier === 'pro' ? 'text-base' : 'text-sm'}`}>
                                  {pricing.currencySymbol}
                                </span>
                                <span className={`font-bold text-navy dark:text-text-light ${tier === 'pro' ? 'text-4xl' : 'text-3xl'}`}>
                                  {prices[index]}
                                </span>
                                <span className={`text-gray-500 dark:text-gray-400 ml-1 ${tier === 'pro' ? 'text-base' : 'text-sm'}`}>
                                  {pricing.interval}
                                </span>
                              </div>
                            ) : (
                              <div className="text-sm font-semibold text-grape">
                                {t.pricing.contactSales}
                              </div>
                            )}
                          </div>
                          <div className={`mt-3 text-gray-600 dark:text-gray-400 ${tier === 'pro' ? 'text-sm font-medium' : 'text-xs'}`}>
                            {t.pricing[tier].blurb}
                          </div>
                          <div className="mt-4">
                            <a
                              href={tier === 'enterprise' ? '#contact' : '#demo'}
                              className={`inline-block px-4 py-2 rounded-md font-semibold text-sm transition-all ${
                                tier === 'pro'
                                  ? 'bg-grape hover:bg-grape-dark text-white shadow-md hover:shadow-lg'
                                  : 'bg-white dark:bg-navy border-2 border-grape text-grape hover:bg-grape/5'
                              }`}
                            >
                              {tier === 'enterprise'
                                ? t.pricing.contactSales
                                : t.pricing.cta.replace('{tier}', tierNames[tier])}
                            </a>
                          </div>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-navy divide-y divide-border-light dark:divide-border-dark">
                {coreFeatures.map((feature, rowIndex) => (
                  <tr key={feature.key} className={rowIndex === 0 ? 'bg-surface-light/50 dark:bg-surface-dark/50' : ''}>
                    <td className="px-4 py-3 text-sm font-semibold text-navy dark:text-text-light">
                      {feature.label}
                    </td>
                    {tiers.map((tier) => {
                      const value = table[tier][feature.key];
                      return (
                        <td
                          key={tier}
                          className={`px-4 py-3 text-center text-sm ${
                            tier === 'pro' ? 'bg-grape/5 dark:bg-grape/10' : ''
                          }`}
                        >
                          {value === '✅' ? (
                            <div className="flex justify-center">
                              <Check className="w-5 h-5 text-grape" />
                            </div>
                          ) : value === '—' ? (
                            <div className="flex justify-center">
                              <X className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                            </div>
                          ) : (
                            <span className={`text-gray-700 dark:text-gray-300 ${rowIndex === 0 || rowIndex === 1 ? 'font-semibold' : ''}`}>
                              {value}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr className="bg-surface-light dark:bg-surface-dark">
                  <td colSpan={5} className="px-4 py-3 text-sm font-bold text-navy dark:text-text-light">
                    {table.advancedFeatures}
                  </td>
                </tr>
                {advancedFeatures.map((feature) => (
                  <tr key={feature.key}>
                    <td className="px-4 py-3 text-sm font-semibold text-navy dark:text-text-light">
                      {feature.label}
                    </td>
                    {tiers.map((tier) => {
                      const value = table[tier][feature.key];
                      return (
                        <td
                          key={tier}
                          className={`px-4 py-3 text-center text-sm ${
                            tier === 'pro' ? 'bg-grape/5 dark:bg-grape/10' : ''
                          }`}
                        >
                          {value === '✅' ? (
                            <div className="flex justify-center">
                              <Check className="w-5 h-5 text-grape" />
                            </div>
                          ) : value === '—' ? (
                            <div className="flex justify-center">
                              <X className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                            </div>
                          ) : (
                            <span className="text-gray-700 dark:text-gray-300">
                              {value}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
