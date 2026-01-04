import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Check, 
  Star, 
  MapPin, 
  MessageSquare, 
  Calendar,
  BarChart3,
  Users,
  Shield,
  Zap,
  Target,
  Lightbulb,
  Phone,
  Mail,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('agencies');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <span className="text-xl font-bold">Faro</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#product" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Product</a>
                <a href="#agencies" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">For Agencies</a>
                <a href="#smbs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">For SMBs</a>
                <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a>
                <a href="#resources" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Resources</a>
                <a href="http://localhost:3001/signin" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Sign in</a>
              </div>

              {/* CTA & Theme Toggle */}
              <div className="flex items-center space-x-4">
                <button 
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
                <a href="/demo" className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get a demo
                </a>
                <button 
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              <div className="px-4 py-4 space-y-4">
                <a href="#product" className="block text-gray-600 dark:text-gray-300">Product</a>
                <a href="#agencies" className="block text-gray-600 dark:text-gray-300">For Agencies</a>
                <a href="#smbs" className="block text-gray-600 dark:text-gray-300">For SMBs</a>
                <a href="#pricing" className="block text-gray-600 dark:text-gray-300">Pricing</a>
                <a href="#resources" className="block text-gray-600 dark:text-gray-300">Resources</a>
                <a href="http://localhost:3001/signin" className="block text-gray-600 dark:text-gray-300">Sign in</a>
                <a href="/demo" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg block text-center">Get a demo</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-transparent rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Shine a light on 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> local growth</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Faro helps agencies and SMBs win the local search moments that matter—listings, reviews, posts, and insights—managed in one place you can brand as your own.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 text-lg font-semibold">
                  <span>Start free</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a href="/demo" className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-lg">
                  Get a demo
                </a>
              </div>

              {/* Proof Bar */}
              <div className="flex flex-wrap justify-center items-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Google Business Profile</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Apple Business Connect</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Meta & Bing</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>White-label ready</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* The Story Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                From scattered to scalable
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Maya - Agency Owner */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Maya, Agency Owner</h3>
                  <p className="text-gray-600 dark:text-gray-300">Managing 20+ SMB clients</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">The Chaos</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Copy-pasting posts across multiple platforms</li>
                      <li>• Reviews going unanswered for days</li>
                      <li>• No clear ROI story for client meetings</li>
                      <li>• Team burning out on manual tasks</li>
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">The Transformation</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Publish once, sync everywhere automatically</li>
                      <li>• 24-hour review response rate</li>
                      <li>• Clear ROI reports that retain clients</li>
                      <li>• Team focuses on strategy, not busywork</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Luis - SMB Owner */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Luis, SMB Owner</h3>
                  <p className="text-gray-600 dark:text-gray-300">Running a local restaurant</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">The Chaos</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Inconsistent hours across Google and Yelp</li>
                      <li>• Mixed reviews with no response strategy</li>
                      <li>• Social feeds looking abandoned</li>
                      <li>• No idea what marketing actually works</li>
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">The Transformation</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Perfect NAP consistency everywhere</li>
                      <li>• Professional review responses in minutes</li>
                      <li>• Fresh content posted automatically</li>
                      <li>• Simple reports showing what drives calls</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Faro is your lighthouse—cutting through the chaos of scattered tools to guide your local growth with clarity and measurable results.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                See how it works
              </button>
            </div>
          </div>
        </section>

        {/* Why Faro Wins */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why teams choose Faro
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Built for Local, Not Generic</h3>
                <p className="text-gray-600 dark:text-gray-300">Purpose-built around GBP, Apple, Bing, Yelp, Meta. No bloated CRM detours.</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">White-Label in Minutes</h3>
                <p className="text-gray-600 dark:text-gray-300">Your domain, your logo, your colors. Keep your brand front and center.</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Multi-Tenant by Design</h3>
                <p className="text-gray-600 dark:text-gray-300">One login, many clients. Roles, permissions, and client workspaces out of the box.</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI that's On-Brand</h3>
                <p className="text-gray-600 dark:text-gray-300">Review replies and post drafts match each client's tone so your team ships faster without sounding robotic.</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Show the ROI</h3>
                <p className="text-gray-600 dark:text-gray-300">Simple insights that tie actions to outcomes (visibility gains, calls, directions, website taps).</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Fast Go-Live</h3>
                <p className="text-gray-600 dark:text-gray-300">Connect, sync, publish. Onboarding that takes hours, not weeks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Tour */}
        <section id="product" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Everything you need in one place
              </h2>
            </div>

            <div className="space-y-20">
              {/* Listings Sync */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <MapPin className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Consistency everywhere, automatically</h3>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Manage NAP, hours, categories, services, photos once; sync to connected networks.
                  </p>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
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
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Listings Dashboard</div>
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
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
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
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Respond in minutes, not Mondays</h3>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Aggregate reviews, AI-assist replies, escalate critical ones, track sentiment.
                  </p>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
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
                  </ul>
                </div>
                <div className="lg:order-1 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Recent Reviews</div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex items-center space-x-1">
                          {[1,2,3,4,5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-900 dark:text-white">"Great service!"</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</div>
                        </div>
                        <button className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Reply</button>
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
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Keep every profile fresh</h3>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Plan posts, promos, and updates; schedule once, publish across channels.
                  </p>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
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
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Content Calendar</div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({length: 7}).map((_, i) => (
                        <div key={i} className="aspect-square bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-xs">
                          {i + 15}
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
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Make visibility visible</h3>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Trendlines (rank/impressions/actions), UTM goals, clean client-ready reports.
                  </p>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
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
                  </ul>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What changes with Faro?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">94%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">more reviews responded within 24h</div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">12</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">hours/week saved per account</div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">28%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">lift in map pack visibility</div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">67%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">fewer cancellations thanks to proof of ROI</div>
              </div>
            </div>
          </div>
        </section>

        {/* For Agencies */}
        <section id="agencies" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Grow accounts, not workload
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Everything you need to deliver exceptional local marketing results while building your agency brand.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">White-label everything</h3>
                      <p className="text-gray-600 dark:text-gray-300">Custom domain, logo, colors. Your brand front and center.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Client workspaces</h3>
                      <p className="text-gray-600 dark:text-gray-300">Invite admins and staff with role-based permissions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Reusable templates</h3>
                      <p className="text-gray-600 dark:text-gray-300">Playbooks for posts, reviews, and onboarding that scale.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Reports clients read</h3>
                      <p className="text-gray-600 dark:text-gray-300">Clear ROI stories that justify your retainer.</p>
                    </div>
                  </div>
                </div>
                
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  See agency features
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">YourAgency Dashboard</div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">24</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Active Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">+18%</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Avg Growth</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Mario's Pizza</span>
                        <span className="text-green-600">↗ 23%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Bella Salon</span>
                        <span className="text-green-600">↗ 31%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Tech Repair Co</span>
                        <span className="text-green-600">↗ 15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For SMBs */}
        <section id="smbs" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Everything important, in one simple place
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Focus on running your business while Faro handles your local presence.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Keep listings accurate</h3>
                      <p className="text-gray-600 dark:text-gray-300">Update once, sync across Google, Apple, Bing, and Yelp.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Never miss a review</h3>
                      <p className="text-gray-600 dark:text-gray-300">Get instant alerts and AI-powered response suggestions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Stay active with scheduled posts</h3>
                      <p className="text-gray-600 dark:text-gray-300">Plan content once, publish everywhere automatically.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Know what's working</h3>
                      <p className="text-gray-600 dark:text-gray-300">Simple insights without needing a data degree.</p>
                    </div>
                  </div>
                </div>
                
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Start free
                </button>
              </div>
              
              <div className="lg:order-1 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Business Dashboard</div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">4.8</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Avg Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">+42%</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">More Calls</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Google Reviews</span>
                        <span className="text-green-600">24 new</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Map Visibility</span>
                        <span className="text-green-600">↗ Rank #2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Simple, transparent pricing
              </h2>
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

                    <a href="/demo" className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors block text-center">
                      Contact sales
                    </a>
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

                    <a href="/demo" className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors block text-center">
                      Contact sales
                    </a>
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

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xl font-bold">Faro</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Your lighthouse for local growth.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Faro. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;