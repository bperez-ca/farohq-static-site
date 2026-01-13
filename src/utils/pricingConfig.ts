export const pricingConfig = {
  latam: {
    starter: 49,
    pro: 100,
    scale: 199,
    enterprise: null,
    currencySymbol: '$',
    intervalEs: '/mes',
    intervalPt: '/mês',
  },
  na: {
    starter: 79,
    pro: 149,
    scale: 299,
    enterprise: null,
    currencySymbol: '$',
    intervalEn: '/month',
  },
};

export function getRegionFromLang(lang: 'es' | 'pt' | 'en'): 'latam' | 'na' {
  if (lang === 'en') return 'na';
  return 'latam';
}

export function getPricing(lang: 'es' | 'pt' | 'en') {
  const region = getRegionFromLang(lang);
  const config = pricingConfig[region];

  let interval = '/month';
  if (lang === 'es') interval = config.intervalEs || '/mes';
  else if (lang === 'pt') interval = config.intervalPt || '/mês';
  else interval = config.intervalEn || '/month';

  return {
    starter: config.starter,
    pro: config.pro,
    scale: config.scale,
    currencySymbol: config.currencySymbol,
    interval,
    region,
  };
}
