import { useState } from 'react';
import { Check } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProfitCalculator } from '../components/ProfitCalculator';
import { useLanguage } from '../contexts/LanguageContext';

export function PricingPageV2() {
  const { t, language } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<'latam' | 'na'>(
    language === 'en' ? 'na' : 'latam'
  );

  const v2 = t.pricing.v2;
  const isLatam = selectedRegion === 'latam';

  return (
    <div className="min-h-screen flex flex-col bg-surface-light dark:bg-surface-dark">
      <Header />

      <main className="flex-1 pt-20">
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-text-light mb-6">
              {v2.hero.title}
            </h1>
            <p className="text-xl text-grape font-semibold mb-6">
              {v2.hero.subtitle}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {v2.hero.description}
            </p>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-8 bg-white dark:bg-navy">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-navy dark:text-text-light mb-4 text-center">
              {v2.platformLicense.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12 text-center max-w-3xl mx-auto">
              {v2.platformLicense.description}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {['starter', 'growth', 'scale'].map((tier) => {
                const tierData = v2.platformLicense[tier as 'starter' | 'growth' | 'scale'];
                const isGrowth = tier === 'growth';

                return (
                  <div
                    key={tier}
                    className={`rounded-lg p-8 border-2 ${
                      isGrowth
                        ? 'border-grape bg-grape/5 dark:bg-grape/10 transform scale-105'
                        : 'border-border-light dark:border-border-dark bg-white dark:bg-surface-dark'
                    }`}
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-navy dark:text-text-light mb-2">
                        {tierData.name}
                      </h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-4xl font-bold text-grape">{tierData.price}</span>
                        <span className="text-gray-500 dark:text-gray-400 ml-1">{tierData.interval}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{tierData.bestFor}</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start text-sm">
                        <Check className="w-5 h-5 text-grape mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{tierData.seats}</span>
                      </div>
                      <div className="flex items-start text-sm">
                        <Check className="w-5 h-5 text-grape mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{tierData.smbSlots}</span>
                      </div>
                      <div className="flex items-start text-sm">
                        <Check className="w-5 h-5 text-grape mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{tierData.branding}</span>
                      </div>
                      <div className="flex items-start text-sm">
                        <Check className="w-5 h-5 text-grape mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {language === 'es' ? 'Dominio personalizado' : language === 'pt' ? 'Domínio personalizado' : 'Custom domain'}: {tierData.customDomain}
                        </span>
                      </div>
                      <div className="flex items-start text-sm">
                        <Check className="w-5 h-5 text-grape mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {language === 'es' ? 'Integraciones' : language === 'pt' ? 'Integrações' : 'Integrations'}: {tierData.integrations}
                        </span>
                      </div>
                    </div>

                    <button className={`w-full py-3 px-6 rounded-md font-semibold transition-all ${
                      isGrowth
                        ? 'bg-grape hover:bg-grape-dark text-white shadow-md hover:shadow-lg'
                        : 'bg-white dark:bg-navy border-2 border-grape text-grape hover:bg-grape/5'
                    }`}>
                      {tierData.cta}
                    </button>
                  </div>
                );
              })}
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 text-center italic">
              {v2.platformLicense.slotsNote}
            </p>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-navy dark:text-text-light mb-4 text-center">
              {v2.wholesalePricing.title}
            </h2>

            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md border border-border-light dark:border-border-dark bg-white dark:bg-navy p-1">
                <button
                  onClick={() => setSelectedRegion('latam')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all ${
                    isLatam
                      ? 'bg-grape text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  {v2.wholesalePricing.latam}
                </button>
                <button
                  onClick={() => setSelectedRegion('na')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all ${
                    !isLatam
                      ? 'bg-grape text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  {v2.wholesalePricing.northAmerica}
                </button>
              </div>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white dark:bg-navy rounded-lg border border-border-light dark:border-border-dark">
                <thead>
                  <tr className="border-b border-border-light dark:border-border-dark">
                    <th className="px-6 py-4 text-left text-sm font-bold text-navy dark:text-text-light">
                      Tier
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-navy dark:text-text-light">
                      {language === 'es' ? 'Precio/ubicación/mes' : language === 'pt' ? 'Preço/localização/mês' : 'Price/location/month'}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-navy dark:text-text-light">
                      {language === 'es' ? 'Incluido' : language === 'pt' ? 'Incluído' : 'Included'}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-navy dark:text-text-light">
                      {language === 'es' ? 'Mejor para' : language === 'pt' ? 'Melhor para' : 'Best for'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light dark:divide-border-dark">
                  {['basic', 'plus', 'pro', 'elite'].map((tier) => {
                    const tierData = v2.wholesalePricing[tier as 'basic' | 'plus' | 'pro' | 'elite'];
                    const price = isLatam ? tierData.price : tierData.priceNA;

                    return (
                      <tr key={tier}>
                        <td className="px-6 py-4">
                          <span className="font-semibold text-navy dark:text-text-light">{tierData.name}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-2xl font-bold text-grape">{price}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm space-y-1">
                            <div className="text-gray-700 dark:text-gray-300">
                              {isLatam ? tierData.includedConvos : tierData.includedSMS}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {isLatam ? tierData.overageRate : tierData.overageRateSMS}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                              {tierData.features}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{tierData.bestFor}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 text-center italic">
              {v2.wholesalePricing.note}
            </p>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-8 bg-white dark:bg-navy">
          <ProfitCalculator />
        </section>

        <section className="py-20 px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-navy dark:text-text-light mb-12 text-center">
              {v2.smbExperience.title}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {['basic', 'plus', 'pro', 'elite'].map((tier) => {
                const tierData = v2.smbExperience[tier as 'basic' | 'plus' | 'pro' | 'elite'];

                return (
                  <div
                    key={tier}
                    className="bg-white dark:bg-navy rounded-lg p-6 border border-border-light dark:border-border-dark"
                  >
                    <h3 className="text-lg font-bold text-navy dark:text-text-light mb-4">
                      {tierData.title}
                    </h3>
                    <ul className="space-y-2 mb-4">
                      {Object.keys(tierData)
                        .filter((key) => key.startsWith('feature'))
                        .map((key) => (
                          <li key={key} className="flex items-start text-sm">
                            <Check className="w-4 h-4 text-grape mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {tierData[key as keyof typeof tierData]}
                            </span>
                          </li>
                        ))}
                    </ul>
                    <p className="text-xs text-grape font-semibold">{tierData.bestFor}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-grape/10 dark:bg-grape/20 rounded-lg p-6 border border-grape">
              <p className="text-center text-gray-700 dark:text-gray-300">
                <strong>{language === 'es' ? 'Insight clave' : language === 'pt' ? 'Insight chave' : 'Key insight'}:</strong> {v2.smbExperience.insight}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-8 bg-white dark:bg-navy">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-navy dark:text-text-light mb-4 text-center">
              {v2.usageWallet.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12 text-center max-w-3xl mx-auto">
              {v2.usageWallet.description}
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-surface-light dark:bg-surface-dark rounded-lg">
                <thead>
                  <tr className="border-b border-border-light dark:border-border-dark">
                    <th className="px-6 py-4 text-left text-sm font-bold text-navy dark:text-text-light">
                      {v2.usageWallet.whatIsUsed}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-navy dark:text-text-light">
                      {v2.usageWallet.faroCost}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-navy dark:text-text-light">
                      {v2.usageWallet.youCharge}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-green-600 dark:text-green-400">
                      {v2.usageWallet.yourProfit}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light dark:divide-border-dark">
                  <tr>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{v2.usageWallet.whatsappConvo}</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">$0.0085</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">$0.015–$0.02</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600 dark:text-green-400">76–135%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{v2.usageWallet.smsMessage}</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">$0.015</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">$0.03–$0.05</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600 dark:text-green-400">100–233%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{v2.usageWallet.aiCredits}</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">$0.015</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">$0.03–$0.05</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600 dark:text-green-400">100–233%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{v2.usageWallet.snapshotReports}</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">{v2.usageWallet.free}</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">$2–$5</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600 dark:text-green-400">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 text-center italic">
              {v2.usageWallet.markupNote}
            </p>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-navy dark:text-text-light mb-12 text-center">
              {v2.comparison.title}
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white dark:bg-navy rounded-lg border border-border-light dark:border-border-dark">
                <thead>
                  <tr className="border-b border-border-light dark:border-border-dark">
                    <th className="px-6 py-4 text-left text-sm font-bold text-navy dark:text-text-light">
                      {v2.comparison.platform}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-navy dark:text-text-light">
                      {v2.comparison.vendasta}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-navy dark:text-text-light">
                      {v2.comparison.birdeye}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-grape">
                      {v2.comparison.faro}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light dark:divide-border-dark">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">{v2.comparison.baseCost}</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">$99</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">$0</td>
                    <td className="px-6 py-4 text-center font-bold text-grape">$79–$249</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">{v2.comparison.perLocationCost}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700 dark:text-gray-300">{v2.comparison.vendastaDetails}</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">$299</td>
                    <td className="px-6 py-4 text-center font-bold text-grape">$25–$75</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">{v2.comparison.totalPerSMB}</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">$164</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">$299</td>
                    <td className="px-6 py-4 text-center font-bold text-grape">$49–$99</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">{v2.comparison.typicalMargin}</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">40–50%</td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">20–30%</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600 dark:text-green-400">50–70%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-grape text-white rounded-lg p-6 text-center">
              <p className="text-lg font-semibold">{v2.comparison.conclusion}</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-8 bg-white dark:bg-navy">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy dark:text-text-light mb-12 text-center">
              {v2.faq.title}
            </h2>

            <div className="space-y-6">
              {['q1', 'q2', 'q3', 'q4', 'q5', 'q6'].map((q) => {
                const faq = v2.faq[q as 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6'];
                return (
                  <div
                    key={q}
                    className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark"
                  >
                    <h3 className="text-lg font-semibold text-navy dark:text-text-light mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-8 bg-grape text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{v2.finalCta.title}</h2>
            <p className="text-xl mb-8 text-white/90">{v2.finalCta.subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="px-8 py-4 bg-white text-grape font-semibold rounded-md hover:bg-gray-100 transition-colors shadow-lg"
              >
                {v2.finalCta.primaryCta}
              </a>
              <a
                href="#docs"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                {v2.finalCta.secondaryCta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
