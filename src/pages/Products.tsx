import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageSquare, Calendar, BarChart3, Check, ArrowRight } from 'lucide-react';

export default function Products() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navigation */}
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

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything you need in one place
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Manage listings, reviews, posts, and insights from a single platform built for local growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Listings Sync */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Listings Sync</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Manage NAP, hours, categories, services, photos once; sync to connected networks.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Update once, sync everywhere</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Photo management across all platforms</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Hours and category optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Google Business Profile integration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Apple Business Connect support</span>
                  </li>
                </ul>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <span>Learn more</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Connected Platforms</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Google Business Profile</span>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Apple Business Connect</span>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Bing Places</span>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Yelp</span>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Inbox */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-purple-600" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Reviews Inbox</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Aggregate reviews, AI-assist replies, escalate critical ones, track sentiment.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>AI-powered response suggestions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Sentiment tracking and alerts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Team workflow and escalation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Multi-platform review aggregation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Response templates library</span>
                  </li>
                </ul>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
                  <span>Learn more</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="lg:order-1 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Review Sources</div>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Google</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">4.8 avg rating</div>
                      </div>
                      <span className="text-sm text-green-600">+12 this week</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Yelp</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">4.6 avg rating</div>
                      </div>
                      <span className="text-sm text-green-600">+5 this week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts & Offers */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-8 h-8 text-green-600" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Posts & Offers</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Plan posts, promos, and updates; schedule once, publish across channels.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Content calendar with templates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Multi-platform publishing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Automated seasonal campaigns</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Image library and optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Bulk scheduling and queues</span>
                  </li>
                </ul>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                  <span>Learn more</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Content Calendar</div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span className="text-sm">Post {i}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Scheduled</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Insights & ROI */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center space-x-3 mb-6">
                  <BarChart3 className="w-8 h-8 text-cyan-600" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Insights & ROI</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Trendlines (rank/impressions/actions), UTM goals, clean client-ready reports.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Map pack ranking trends</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Call and direction tracking</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>White-label reporting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Custom dashboard views</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Export to PDF/Excel</span>
                  </li>
                </ul>
                <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors flex items-center space-x-2">
                  <span>Learn more</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="lg:order-1 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Growth Overview</div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Map Pack Visibility</span>
                      <span className="text-sm font-semibold text-green-600">+23%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Phone Calls</span>
                      <span className="text-sm font-semibold text-green-600">+18%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Website Clicks</span>
                      <span className="text-sm font-semibold text-green-600">+31%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Direction Requests</span>
                      <span className="text-sm font-semibold text-green-600">+15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 text-blue-100">Start your free trial today. No credit card required.</p>
          <Link to="/pricing" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 font-semibold">
            <span>View Pricing</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

