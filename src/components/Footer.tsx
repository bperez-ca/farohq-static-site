import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t.footer.product,
      links: [
        { label: t.footer.features, href: '#features' },
        { label: t.footer.pricing, href: '#pricing' },
        { label: t.footer.recursos, href: '#recursos' },
      ],
    },
    {
      title: t.footer.company,
      links: [
        { label: t.footer.about, href: '#about' },
        { label: t.footer.blog, href: '#blog' },
        { label: t.footer.contact, href: '#demo' },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { label: t.footer.terms, href: '#terms' },
        { label: t.footer.privacy, href: '#privacy' },
        { label: t.footer.dpa, href: '#dpa' },
      ],
    },
  ];

  return (
    <footer className="bg-navy border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-text-light">FARO</span>
              <span className="inline-flex items-center px-2 py-0.5 bg-grape text-white text-xs font-bold rounded">
                HQ
              </span>
            </div>
            <p className="text-sm text-gray-400">
              {t.footer.tagline}
            </p>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-text-light mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-grape transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border-dark flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            {t.footer.copyright}
          </p>
          <div className="text-sm text-gray-400">
            {t.footer.language}
          </div>
        </div>
      </div>
    </footer>
  );
}
