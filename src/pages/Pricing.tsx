import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [activeTab, setActiveTab] = React.useState('agencies');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navigation - Simplified for standalone page */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold">Faro</span>
            </Link>
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business. All plans include our core features with no hidden fees.
            </p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'agencies'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setActiveTab('agencies')}
              >
                For Agencies
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'smbs'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setActiveTab('smbs')}
              >
                For SMBs
              </button>
            </div>
          </div>

          {/* Agency Pricing */}
          {activeTab === 'agencies' && (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 relative">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Starter</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Perfect for getting started</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">$49</span>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Up to 5 clients</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">White-label platform</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Listings management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Review monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Basic reporting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Email support</span>
                  </li>
                </ul>

                <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                  Start free trial
                </button>
              </div>

              {/* Professional Plan */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 relative border-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Professional</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">For growing agencies</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">$149</span>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Up to 25 clients</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Everything in Starter</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">AI-powered review responses</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Social media scheduling</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Advanced analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Team collaboration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Priority support</span>
                  </li>
                </ul>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Start free trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 relative">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">For large agencies</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">$399</span>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Unlimited clients</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Everything in Professional</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">API access</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Custom reporting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">24/7 phone support</span>
                  </li>
                </ul>

                <Link to="/demo" className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors block text-center">
                  Contact sales
                </Link>
              </div>
            </div>
          )}

          {/* SMB Pricing */}
          {activeTab === 'smbs' && (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 relative">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Basic</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Essential local presence</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">1 business location</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Google Business Profile sync</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Review monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Basic posts scheduling</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Monthly reports</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Email support</span>
                  </li>
                </ul>

                <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                  Start free trial
                </button>
              </div>

              {/* Growth Plan */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 relative border-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Recommended</span>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Growth</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Complete local marketing</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">$79</span>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Up to 3 locations</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Everything in Basic</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Multi-platform sync</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">AI review responses</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Advanced scheduling</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Competitor insights</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Priority support</span>
                  </li>
                </ul>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Start free trial
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 relative">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pro</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Multi-location businesses</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">$149</span>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Up to 10 locations</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Everything in Growth</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Advanced analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Custom reporting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Team management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">API access</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Phone support</span>
                  </li>
                </ul>

                <Link to="/demo" className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors block text-center">
                  Contact sales
                </Link>
              </div>
            </div>
          )}

          {/* FAQ Section */}
          <div className="mt-20 pt-16 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently asked questions</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Can I switch plans anytime?</h4>
                <p className="text-gray-600 dark:text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Is there a free trial?</h4>
                <p className="text-gray-600 dark:text-gray-300">All plans come with a 14-day free trial. No credit card required to get started.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What platforms do you sync with?</h4>
                <p className="text-gray-600 dark:text-gray-300">Google Business Profile, Apple Business Connect, Bing Places, Yelp, Facebook, and more.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Do you offer custom pricing?</h4>
                <p className="text-gray-600 dark:text-gray-300">Yes, we offer custom pricing for large agencies and enterprise customers. Contact our sales team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

