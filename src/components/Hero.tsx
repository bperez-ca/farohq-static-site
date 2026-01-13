import { ArrowRight, Play, MapPin, Star, MessageCircle, TrendingUp, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-white to-surface-light dark:from-navy dark:to-surface-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-grape/10 dark:bg-grape/20 rounded-full border border-grape/30">
              <span className="text-xs font-semibold text-grape-dark dark:text-grape">
                {t.hero.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy dark:text-text-light leading-tight">
              {t.hero.headline}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-6 py-3 bg-grape hover:bg-grape-dark text-white font-semibold rounded-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal group"
              >
                {t.hero.primaryCta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-surface-dark border-2 border-grape text-grape font-semibold rounded-md hover:bg-grape/5 transition-all group"
              >
                <Play className="mr-2 w-5 h-5" />
                {t.hero.secondaryCta}
              </a>
            </div>

            <div className="flex items-center space-x-3 pt-4">
              <div className="flex -space-x-2">
                {['MG', 'CM', 'AS'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-grape to-green flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-navy"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{t.hero.socialProof}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-grape/20 to-green/20 blur-3xl opacity-30 rounded-2xl"></div>
            <div className="relative bg-white dark:bg-surface-dark rounded-xl shadow-2xl border-2 border-border-light dark:border-border-dark overflow-hidden">
              <div className="bg-surface-light dark:bg-navy px-4 py-3 border-b-2 border-border-light dark:border-border-dark flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-mono font-semibold">dashboard.faro.app</div>
                <div className="w-16"></div>
              </div>

              <div className="bg-white dark:bg-surface-dark border-b-2 border-border-light dark:border-border-dark px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    <button className="inline-flex items-center px-3 py-1.5 bg-grape text-white text-xs font-semibold rounded-md shadow-sm">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      {t.hero.mockup.presence}
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 bg-white dark:bg-navy border border-border-light dark:border-border-dark text-green text-xs font-semibold rounded-md">
                      <Star className="w-3.5 h-3.5 mr-1" />
                      {t.hero.mockup.reviews}
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 bg-white dark:bg-navy border border-border-light dark:border-border-dark text-teal text-xs font-semibold rounded-md">
                      <MessageCircle className="w-3.5 h-3.5 mr-1" />
                      {t.hero.mockup.chats}
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 bg-white dark:bg-navy border border-border-light dark:border-border-dark text-gray-600 dark:text-gray-400 text-xs font-semibold rounded-md">
                      <TrendingUp className="w-3.5 h-3.5 mr-1" />
                      {t.hero.mockup.roi}
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1"></div>
                  <div className="bg-green/5 dark:bg-green/10 border border-green/20 rounded-lg px-3 py-2">
                    <div className="flex items-center space-x-1">
                      <Check className="w-3 h-3 text-green" />
                      <div className="text-xs font-semibold text-green">{t.hero.mockup.gbpStatus}</div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t.hero.mockup.lastSynced}</div>
                  </div>
                </div>

                <div className="bg-surface-light dark:bg-navy rounded-xl p-5 space-y-4 border border-border-light dark:border-border-dark">
                  <div className="flex items-start space-x-2">
                    <div className="w-7 h-7 rounded-full bg-gray-400 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                      C
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl rounded-tl-none px-4 py-3 max-w-[75%]">
                      <p className="text-sm text-gray-900 dark:text-gray-100 font-medium">{t.hero.mockup.customerMessage}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 justify-end">
                    <div className="bg-teal rounded-2xl rounded-tr-none px-4 py-3 max-w-[75%] shadow-md">
                      <p className="text-sm text-white font-medium">{t.hero.mockup.autoReply}</p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-teal flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                      F
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 justify-end">
                    <div className="bg-navy dark:bg-teal rounded-2xl rounded-tr-none px-4 py-3 max-w-[75%] shadow-md">
                      <p className="text-sm text-white font-medium">{t.hero.mockup.agentReply}</p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-navy dark:bg-teal flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                      A
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-green/5 dark:bg-green/10 rounded-lg p-3 border border-green/30">
                    <div className="text-green text-xs font-bold leading-tight">{t.hero.mockup.newReviews}</div>
                  </div>
                  <div className="bg-orange/5 dark:bg-orange/10 rounded-lg p-3 border border-orange/30">
                    <div className="text-orange text-xs font-bold leading-tight">{t.hero.mockup.fasterResponse}</div>
                  </div>
                  <div className="bg-grape/5 dark:bg-grape/10 rounded-lg p-3 border border-grape/30">
                    <div className="text-grape text-xs font-bold leading-tight">{t.hero.mockup.roiMetric}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
