import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'How to Improve Your Local SEO in 2025',
      excerpt: 'Discover the latest strategies and best practices for improving your local search visibility and ranking higher in map pack results.',
      author: 'Sarah Johnson',
      date: 'January 15, 2025',
      category: 'Local SEO',
      image: 'bg-gradient-to-br from-blue-400 to-cyan-400',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Google Business Profile Optimization',
      excerpt: 'Learn how to optimize your Google Business Profile to attract more customers and improve your online presence.',
      author: 'Michael Chen',
      date: 'January 10, 2025',
      category: 'Guides',
      image: 'bg-gradient-to-br from-purple-400 to-pink-400',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: '10 Review Response Templates That Convert',
      excerpt: 'Get proven templates for responding to customer reviews that help build trust and encourage more reviews.',
      author: 'Emily Rodriguez',
      date: 'January 5, 2025',
      category: 'Reviews',
      image: 'bg-gradient-to-br from-green-400 to-emerald-400',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Multi-Location Business Marketing: Best Practices',
      excerpt: 'Strategies for managing and marketing multiple business locations effectively using centralized tools.',
      author: 'David Kim',
      date: 'December 28, 2024',
      category: 'Marketing',
      image: 'bg-gradient-to-br from-orange-400 to-red-400',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Why White-Label Solutions Matter for Agencies',
      excerpt: 'Discover how white-label platforms can help agencies scale their services and build stronger client relationships.',
      author: 'Lisa Anderson',
      date: 'December 20, 2024',
      category: 'Agency',
      image: 'bg-gradient-to-br from-indigo-400 to-purple-400',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Measuring Local Marketing ROI: A Complete Guide',
      excerpt: 'Learn how to track and measure the return on investment of your local marketing efforts with actionable metrics.',
      author: 'James Wilson',
      date: 'December 15, 2024',
      category: 'Analytics',
      image: 'bg-gradient-to-br from-cyan-400 to-blue-400',
      readTime: '9 min read'
    }
  ];

  const categories = ['All', 'Local SEO', 'Guides', 'Reviews', 'Marketing', 'Agency', 'Analytics'];

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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Blog & Resources
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Insights, tips, and guides to help you master local visibility and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-48 ${post.image} flex items-center justify-center`}>
                  <span className="text-white text-2xl font-bold">{post.title.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <Tag className="w-4 h-4" />
                      <span>{post.category}</span>
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <a href="#">{post.title}</a>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get the latest articles and tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

