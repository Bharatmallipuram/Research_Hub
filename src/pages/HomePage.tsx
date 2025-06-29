import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../components/Search/SearchBar';
import { BookOpen, Code, TrendingUp, Zap, Globe, Users } from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: 'Comprehensive Search',
      description: 'Search through millions of research papers from arXiv, Semantic Scholar, and more.'
    },
    {
      icon: <Code className="w-8 h-8 text-green-600" />,
      title: 'Code Integration',
      description: 'Find papers with associated code repositories and implementation details.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: 'Smart Recommendations',
      description: 'Get personalized paper recommendations based on your research interests.'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: 'Fast & Accurate',
      description: 'Lightning-fast search with advanced filtering and sorting capabilities.'
    }
  ];

  const stats = [
    { label: 'Research Papers', value: '2.1M+', icon: <BookOpen className="w-5 h-5" /> },
    { label: 'Code Repositories', value: '150K+', icon: <Code className="w-5 h-5" /> },
    { label: 'Research Areas', value: '50+', icon: <Globe className="w-5 h-5" /> },
    { label: 'Active Users', value: '25K+', icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Research Papers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              & Their Code
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Search through millions of research papers, find their implementations, and accelerate your research with our comprehensive academic search engine.
          </p>
          
          <div className="mb-12">
            <SearchBar 
              onSearch={handleSearch}
              placeholder="Search for machine learning, computer vision, NLP..."
              size="large"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center justify-center mb-3 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Research
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines academic search with practical implementation, making research more accessible and actionable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-200 group">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-xl mb-6 group-hover:scale-105 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-24 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Accelerate Your Research?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers who use ResearchHub to discover papers, find implementations, and advance their work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                Start Searching
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};