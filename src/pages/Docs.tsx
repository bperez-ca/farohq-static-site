import React from 'react';
import { Link } from 'react-router-dom';
import { Book, FileText, Video, Code, HelpCircle, ArrowRight, Search } from 'lucide-react';

export default function Docs() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const categories = [
    {
      title: 'Getting Started',
      icon: Book,
      color: 'blue',
      articles: [
        'Quick Start Guide',
        'Setting Up Your Account',
        'Connecting Your First Location',
        'Understanding the Dashboard'
      ]
    },
    {
      title: 'Listings Management',
      icon: FileText,
      color: 'green',
      articles: [
        'Syncing Listings',
        'Managing Business Information',
        'Photo Management',
        'Hours & Categories'
      ]
    },
    {
      title: 'Reviews',
      icon: FileText,
      color: 'purple',
      articles: [
        'Review Monitoring',
        'AI Response Suggestions',
        'Response Templates',
        'Review Analytics'
      ]
    },
    {
      title: 'Posts & Content',
      icon: Video,
      color: 'orange',
      articles: [
        'Creating Posts',
        'Scheduling Content',
        'Multi-Platform Publishing',
        'Content Calendar'
      ]
    },
    {
      title: 'Analytics & Reports',
      icon: Code,
      color: 'cyan',
      articles: [
        'Understanding Metrics',
        'Custom Reports',
        'Exporting Data',
        'White-Label Reports'
      ]
    },
    {
      title: 'API & Integrations',
      icon: Code,
      color: 'indigo',
      articles: [
        'API Overview',
        'Authentication',
        'Webhooks',
        'Third-Party Integrations'
      ]
    }
  ];

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
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Home
              </Link>
              <a href="https://app.farohq.com/signin" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Everything you need to get started with Faro and make the most of our platform.
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const colorClasses = {
                blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
                green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
                purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
                orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
                cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
                indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
              };

              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 ${colorClasses[category.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <a
                          href="#"
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm flex items-center space-x-2"
                        >
                          <span>{article}</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Need Help?</h2>
            <p className="text-gray-600 dark:text-gray-300">We're here to help you succeed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center">
              <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Help Center</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Browse our knowledge base</p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                Visit Help Center →
              </a>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center">
              <Video className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Video Tutorials</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Watch step-by-step guides</p>
              <a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium">
                Watch Videos →
              </a>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center">
              <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Contact Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Get help from our team</p>
              <a href="#" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium">
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

