import React from 'react';
import { Paper } from '../../types/Paper';
import { PaperCard } from './PaperCard';
import { Loader2 } from 'lucide-react';

interface PaperListProps {
  papers: Paper[];
  loading?: boolean;
  error?: string;
}

export const PaperList: React.FC<PaperListProps> = ({ papers, loading, error }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center space-x-3 text-gray-600">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Searching papers...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-red-800 font-medium mb-2">Search Error</h3>
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (papers.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-md mx-auto">
          <h3 className="text-gray-800 font-medium mb-2">No Papers Found</h3>
          <p className="text-gray-600 text-sm">
            Try adjusting your search terms or filters to find more results.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {papers.map(paper => (
        <PaperCard key={paper.id} paper={paper} />
      ))}
    </div>
  );
};