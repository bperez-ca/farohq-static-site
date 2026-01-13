import { Sun, Moon, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../i18n/translations';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-navy/90 backdrop-blur-md border-b border-border-light dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-navy dark:text-text-light">FARO</span>
            <span className="inline-flex items-center px-2 py-0.5 bg-grape text-white text-xs font-bold rounded">
              HQ
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-grape transition-colors">
              {t.nav.products}
            </a>
            <a href="#pricing" className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-grape transition-colors">
              {t.nav.pricing}
            </a>
            <a href="#recursos" className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-grape transition-colors">
              {t.nav.recursos}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-border-light dark:border-border-dark rounded-md overflow-hidden">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                    language === lang.code
                      ? 'bg-grape text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-surface-light dark:hover:bg-surface-dark'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-border-light dark:border-border-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            <a
              href="#demo"
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-grape hover:bg-grape-dark text-white font-semibold rounded-md transition-colors shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
