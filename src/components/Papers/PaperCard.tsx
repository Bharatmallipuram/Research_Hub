import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, ExternalLink, Github, Star, GitFork, FileText, Code } from 'lucide-react';
import { Paper } from '../../types/Paper';

interface PaperCardProps {
  paper: Paper;
}

export const PaperCard: React.FC<PaperCardProps> = ({ paper }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200 group">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <Link
              to={`/paper/${paper.id}`}
              className="block group-hover:text-blue-600 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
                {paper.title}
              </h3>
            </Link>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{paper.authors.slice(0, 3).map(author => author.name).join(', ')}</span>
                {paper.authors.length > 3 && <span> et al.</span>}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{formatDate(paper.publicationDate)}</span>
              </div>
            </div>
          </div>
          {paper.hasCode && (
            <div className="flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium ml-4">
              <Code className="w-3 h-3 mr-1" />
              Code
            </div>
          )}
        </div>

        {/* Abstract */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
          {paper.abstractSnippet}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {paper.categories.slice(0, 3).map(category => (
            <span
              key={category}
              className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{formatNumber(paper.citationCount)} citations</span>
            </div>
            {paper.venue && (
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-1" />
                <span>{paper.venue}</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={paper.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              <FileText className="w-4 h-4 mr-1" />
              PDF
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            
            {paper.codeRepositories.length > 0 && (
              <a
                href={paper.codeRepositories[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-1.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors duration-200"
              >
                <Github className="w-4 h-4 mr-1" />
                Code
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            )}
          </div>
        </div>

        {/* Code Repository Stats */}
        {paper.codeRepositories.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            {paper.codeRepositories.slice(0, 1).map(repo => (
              <div key={repo.id} className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-3">
                  <span className="capitalize">{repo.platform}</span>
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    <span>{formatNumber(repo.stars)}</span>
                  </div>
                  <div className="flex items-center">
                    <GitFork className="w-3 h-3 mr-1" />
                    <span>{formatNumber(repo.forks)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};