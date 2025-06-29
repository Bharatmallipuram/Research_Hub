import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  ExternalLink, 
  Github, 
  Star, 
  GitFork, 
  FileText, 
  Quote,
  Share2,
  Bookmark,
  Copy,
  Check
} from 'lucide-react';
import { searchService } from '../services/searchService';
import { Paper } from '../types/Paper';

export const PaperDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [paper, setPaper] = useState<Paper | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchPaper = async () => {
      if (!id) return;

      try {
        const result = await searchService.getPaperById(id);
        setPaper(result);
      } catch (err) {
        setError('Failed to load paper details.');
      } finally {
        setLoading(false);
      }
    };

    fetchPaper();
  }, [id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading paper details...</p>
        </div>
      </div>
    );
  }

  if (error || !paper) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md">
            <h3 className="text-red-800 font-medium mb-2">Paper Not Found</h3>
            <p className="text-red-600 text-sm mb-4">
              {error || 'The requested paper could not be found.'}
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Search
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/search"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Search Results
        </Link>

        {/* Paper Content */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {paper.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{paper.authors.map(author => author.name).join(', ')}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{formatDate(paper.publicationDate)}</span>
                  </div>
                  {paper.venue && (
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      <span>{paper.venue}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Quote className="w-4 h-4 mr-1" />
                    <span>{formatNumber(paper.citationCount)} citations</span>
                  </div>
                  {paper.arxivId && (
                    <div>
                      <span className="font-medium">arXiv:</span> {paper.arxivId}
                    </div>
                  )}
                  {paper.doi && (
                    <div>
                      <span className="font-medium">DOI:</span> {paper.doi}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-6">
                <button
                  onClick={handleCopyUrl}
                  className="flex items-center px-3 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <button className="flex items-center px-3 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                  <Bookmark className="w-4 h-4" />
                </button>
                <button className="flex items-center px-3 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-6">
              {paper.categories.map(category => (
                <span
                  key={category}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={paper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                <FileText className="w-5 h-5 mr-2" />
                Read Paper
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              
              {paper.codeRepositories.map(repo => (
                <a
                  key={repo.id}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              ))}
            </div>
          </div>

          {/* Abstract */}
          <div className="p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Abstract</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {paper.abstract}
            </p>
          </div>

          {/* Code Repositories */}
          {paper.codeRepositories.length > 0 && (
            <div className="p-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Code Repositories</h2>
              <div className="space-y-4">
                {paper.codeRepositories.map(repo => (
                  <div key={repo.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <Github className="w-5 h-5 text-gray-700" />
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium text-blue-600 hover:text-blue-700"
                          >
                            {repo.url.split('/').slice(-2).join('/')}
                          </a>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="capitalize">{repo.platform}</span>
                          <span>{repo.language}</span>
                          <span>Updated {new Date(repo.lastUpdated).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                      >
                        View Repository
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        <span>{formatNumber(repo.stars)} stars</span>
                      </div>
                      <div className="flex items-center">
                        <GitFork className="w-4 h-4 mr-1" />
                        <span>{formatNumber(repo.forks)} forks</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Authors */}
          <div className="p-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Authors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paper.authors.map(author => (
                <div key={author.id} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{author.name}</div>
                    {author.affiliation && (
                      <div className="text-sm text-gray-600">{author.affiliation}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};