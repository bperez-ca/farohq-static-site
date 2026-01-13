import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type LocationTier = 'basic' | 'plus' | 'pro' | 'elite';
type AgencyPlan = 'starter' | 'growth' | 'scale';

interface CalculatorResult {
  faroCost: number;
  agencyPlanCost: number;
  locationCost: number;
  usageCost: number;
  clientRevenue: number;
  profit: number;
  marginPercent: number;
}

export function ProfitCalculator() {
  const { t, language } = useLanguage();
  const isLatam = language === 'es' || language === 'pt';

  const [numLocations, setNumLocations] = useState(3);
  const [locationTier, setLocationTier] = useState<LocationTier>('plus');
  const [numClients, setNumClients] = useState(1);
  const [agencyPlan, setAgencyPlan] = useState<AgencyPlan>('starter');
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const tierPrices = {
    latam: {
      basic: 35,
      plus: 45,
      pro: 65,
      elite: 85,
    },
    na: {
      basic: 55,
      plus: 75,
      pro: 110,
      elite: 150,
    },
  };

  const agencyPlanPrices = {
    starter: 79,
    growth: 249,
    scale: 499,
  };

  const typicalRetainerPerLocation = {
    latam: {
      basic: 90,
      plus: 120,
      pro: 160,
      elite: 200,
    },
    na: {
      basic: 140,
      plus: 180,
      pro: 250,
      elite: 350,
    },
  };

  useEffect(() => {
    calculateProfit();
  }, [numLocations, locationTier, numClients, agencyPlan, isLatam]);

  const calculateProfit = () => {
    const region = isLatam ? 'latam' : 'na';
    const locationPrice = tierPrices[region][locationTier];
    const agencyPlanCost = agencyPlanPrices[agencyPlan];
    const locationCost = locationPrice * numLocations * numClients;
    const usageCost = Math.round(numLocations * numClients * 12);
    const faroCost = agencyPlanCost + locationCost + usageCost;

    const retainerPerLocation = typicalRetainerPerLocation[region][locationTier];
    const clientRevenue = retainerPerLocation * numLocations * numClients;

    const profit = clientRevenue - faroCost;
    const marginPercent = Math.round((profit / clientRevenue) * 100);

    setResult({
      faroCost,
      agencyPlanCost,
      locationCost,
      usageCost,
      clientRevenue,
      profit,
      marginPercent,
    });
  };

  const calc = t.pricing.v2.calculator;

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-navy dark:text-text-light mb-4 text-center">
        {calc.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-3xl mx-auto">
        {calc.description}
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-navy rounded-lg p-6 border border-border-light dark:border-border-dark">
          <h3 className="text-lg font-semibold text-navy dark:text-text-light mb-6">
            Configuración
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {calc.numLocations}
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={numLocations}
                onChange={(e) => setNumLocations(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-grape"
              />
              <div className="text-right mt-1">
                <span className="text-2xl font-bold text-grape">{numLocations}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {calc.selectTier}
              </label>
              <select
                value={locationTier}
                onChange={(e) => setLocationTier(e.target.value as LocationTier)}
                className="w-full px-4 py-2 border border-border-light dark:border-border-dark rounded-md bg-white dark:bg-surface-dark text-navy dark:text-text-light focus:outline-none focus:ring-2 focus:ring-grape"
              >
                <option value="basic">{t.pricing.v2.wholesalePricing.basic.name}</option>
                <option value="plus">{t.pricing.v2.wholesalePricing.plus.name}</option>
                <option value="pro">{t.pricing.v2.wholesalePricing.pro.name}</option>
                <option value="elite">{t.pricing.v2.wholesalePricing.elite.name}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {calc.numClients}
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={numClients}
                onChange={(e) => setNumClients(Number(e.target.value))}
                className="w-full px-4 py-2 border border-border-light dark:border-border-dark rounded-md bg-white dark:bg-surface-dark text-navy dark:text-text-light focus:outline-none focus:ring-2 focus:ring-grape"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Plan de agencia
              </label>
              <select
                value={agencyPlan}
                onChange={(e) => setAgencyPlan(e.target.value as AgencyPlan)}
                className="w-full px-4 py-2 border border-border-light dark:border-border-dark rounded-md bg-white dark:bg-surface-dark text-navy dark:text-text-light focus:outline-none focus:ring-2 focus:ring-grape"
              >
                <option value="starter">Starter - $79</option>
                <option value="growth">Growth - $249</option>
                <option value="scale">Scale - $499</option>
              </select>
            </div>
          </div>
        </div>

        {result && (
          <div className="space-y-4">
            <div className="bg-white dark:bg-navy rounded-lg p-6 border border-border-light dark:border-border-dark">
              <h3 className="text-lg font-semibold text-navy dark:text-text-light mb-4">
                {calc.yourCost}
              </h3>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>{calc.agencyPlan}:</span>
                  <span className="font-semibold">${result.agencyPlanCost}</span>
                </div>
                <div className="flex justify-between">
                  <span>{numLocations * numClients} {calc.locations}:</span>
                  <span className="font-semibold">${result.locationCost}</span>
                </div>
                <div className="flex justify-between">
                  <span>{calc.typicalUsage}:</span>
                  <span className="font-semibold">${result.usageCost}</span>
                </div>
                <div className="border-t border-border-light dark:border-border-dark pt-2 mt-2">
                  <div className="flex justify-between text-base font-bold text-navy dark:text-text-light">
                    <span>{calc.total}:</span>
                    <span>${result.faroCost}{calc.perMonth}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-navy rounded-lg p-6 border border-border-light dark:border-border-dark">
              <h3 className="text-lg font-semibold text-navy dark:text-text-light mb-4">
                {calc.youCharge}
              </h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy dark:text-text-light">
                  ${result.clientRevenue}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {calc.typicalRetainer}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6 border-2 border-green-500">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                {calc.yourProfit}
              </h3>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600 dark:text-green-400">
                  ${result.profit}
                </div>
                <div className="text-lg text-green-700 dark:text-green-300 mt-2">
                  {result.marginPercent}% {calc.margin}
                </div>
              </div>
            </div>

            <div className="bg-grape/10 dark:bg-grape/20 rounded-lg p-4 border border-grape">
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                {calc.recoverNote}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
