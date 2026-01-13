import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function FinalCta() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agencySize: '',
    locations: '',
    country: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="demo" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-grape to-navy">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {t.finalCta.title}
          </h2>
          <p className="text-white/90 text-lg">
            {t.finalCta.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder={t.finalCta.nameExample}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 min-h-[48px] bg-white dark:bg-navy border border-white/20 dark:border-border-dark rounded-md text-navy dark:text-text-light placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/80 focus:border-white"
            required
          />
          <input
            type="email"
            placeholder={t.finalCta.emailExample}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 min-h-[48px] bg-white dark:bg-navy border border-white/20 dark:border-border-dark rounded-md text-navy dark:text-text-light placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/80 focus:border-white"
            required
          />
          <select
            value={formData.agencySize}
            onChange={(e) => setFormData({ ...formData, agencySize: e.target.value })}
            className="w-full px-4 py-3 bg-white dark:bg-navy border border-white/20 dark:border-border-dark rounded-md text-navy dark:text-text-light focus:outline-none focus:ring-3 focus:ring-navy/30"
            required
          >
            <option value="">{t.finalCta.agencySize}</option>
            <option value="1-5">{t.finalCta.sizeOption1}</option>
            <option value="5-10">{t.finalCta.sizeOption2}</option>
            <option value="10-25">{t.finalCta.sizeOption3}</option>
            <option value="25-50">{t.finalCta.sizeOption4}</option>
            <option value="50+">{t.finalCta.sizeOption5}</option>
          </select>
          <input
            type="text"
            placeholder={t.finalCta.locationsExample}
            value={formData.locations}
            onChange={(e) => setFormData({ ...formData, locations: e.target.value })}
            className="w-full px-4 py-3 min-h-[48px] bg-white dark:bg-navy border border-white/20 dark:border-border-dark rounded-md text-navy dark:text-text-light placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/80 focus:border-white"
          />
          <select
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-4 py-3 bg-white dark:bg-navy border border-white/20 dark:border-border-dark rounded-md text-navy dark:text-text-light focus:outline-none focus:ring-3 focus:ring-navy/30"
            required
          >
            <option value="">{t.finalCta.countryLabel}</option>
            <option value="CO">{t.finalCta.countryOption1}</option>
            <option value="MX">{t.finalCta.countryOption2}</option>
            <option value="BR">{t.finalCta.countryOption3}</option>
            <option value="other">{t.finalCta.countryOption4}</option>
          </select>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-4 min-h-[48px] bg-grape hover:bg-grape-dark text-white font-semibold rounded-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal group"
          >
            {t.finalCta.submit}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
}
