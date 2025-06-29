import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/Search/SearchBar';
import { SearchFilters } from '../components/Search/SearchFilters';
import { PaperList } from '../components/Papers/PaperList';
import { Pagination } from '../components/UI/Pagination';
import { searchService } from '../services/searchService';
import { Paper, SearchFilters as SearchFiltersType, SearchResult } from '../types/Paper';
import { SlidersHorizontal } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [filters, setFilters] = useState<SearchFiltersType>({
    dateFrom: undefined,
    dateTo: undefined,
    categories: [],
    hasCode: undefined,
    minCitations: undefined
  });
  const [searchResult, setSearchResult] = useState<SearchResult>({
    papers: [],
    totalCount: 0,
    currentPage: 1,
    totalPages: 0,
    hasMore: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setQuery(q);
      performSearch(q, filters, 1);
    }
  }, []);

  const performSearch = async (searchQuery: string, searchFilters: SearchFiltersType, page: number = 1) => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const result = await searchService.searchPapers(searchQuery, searchFilters, page);
      setSearchResult(result);
    } catch (err) {
      setError('Failed to search papers. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setSearchParams({ q: newQuery });
    performSearch(newQuery, filters, 1);
  };

  const handleFiltersChange = (newFilters: SearchFiltersType) => {
    setFilters(newFilters);
    if (query) {
      performSearch(query, newFilters, 1);
    }
  };

  const handlePageChange = (page: number) => {
    performSearch(query, filters, page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <SearchBar
            onSearch={handleSearch}
            initialQuery={query}
            size="small"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <SearchFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              isOpen={showFilters}
              onToggle={toggleFilters}
            />
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            {searchResult.totalCount > 0 && (
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-600">
                  {searchResult.totalCount} papers found
                  {query && (
                    <span> for "<span className="font-medium text-gray-900">{query}</span>"</span>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Sort by Relevance</option>
                    <option>Sort by Citation Count</option>
                    <option>Sort by Publication Date</option>
                  </select>
                </div>
              </div>
            )}

            {/* Paper List */}
            <PaperList
              papers={searchResult.papers}
              loading={loading}
              error={error}
            />

            {/* Pagination */}
            {searchResult.totalPages > 1 && (
              <Pagination
                currentPage={searchResult.currentPage}
                totalPages={searchResult.totalPages}
                onPageChange={handlePageChange}
                totalCount={searchResult.totalCount}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};