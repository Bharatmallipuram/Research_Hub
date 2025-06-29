import React from 'react';
import { Calendar, Filter, Code, Users, X } from 'lucide-react';
import { SearchFilters as SearchFiltersType } from '../../types/Paper';
import { categories } from '../../services/mockData';

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: SearchFiltersType) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFiltersChange,
  isOpen,
  onToggle
}) => {
  const currentYear = new Date().getFullYear();

  const handleDateFromChange = (year: number) => {
    onFiltersChange({ ...filters, dateFrom: year });
  };

  const handleDateToChange = (year: number) => {
    onFiltersChange({ ...filters, dateTo: year });
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handleCodeFilterChange = (hasCode: boolean | undefined) => {
    onFiltersChange({ ...filters, hasCode });
  };

  const handleMinCitationsChange = (minCitations: number | undefined) => {
    onFiltersChange({ ...filters, minCitations });
  };

  const clearFilters = () => {
    onFiltersChange({
      dateFrom: undefined,
      dateTo: undefined,
      categories: [],
      hasCode: undefined,
      minCitations: undefined
    });
  };

  const hasActiveFilters = filters.dateFrom || filters.dateTo || filters.categories.length > 0 || 
                          filters.hasCode !== undefined || filters.minCitations;

  return (
    <>
      {/* Filter Toggle Button */}
      <button
        onClick={onToggle}
        className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
      >
        <Filter className="w-4 h-4" />
        <span>Filters</span>
        {hasActiveFilters && (
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        )}
      </button>

      {/* Filter Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block bg-white rounded-xl border border-gray-200 p-6 space-y-6`}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </h3>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Publication Date */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900 flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Publication Date
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">From</label>
              <select
                value={filters.dateFrom || ''}
                onChange={(e) => handleDateFromChange(e.target.value ? parseInt(e.target.value) : undefined)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Any year</option>
                {Array.from({ length: currentYear - 2010 + 1 }, (_, i) => currentYear - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">To</label>
              <select
                value={filters.dateTo || ''}
                onChange={(e) => handleDateToChange(e.target.value ? parseInt(e.target.value) : undefined)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Any year</option>
                {Array.from({ length: currentYear - 2010 + 1 }, (_, i) => currentYear - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Research Areas</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {categories.map(category => (
              <label key={category} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Code Availability */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900 flex items-center">
            <Code className="w-4 h-4 mr-2" />
            Code Availability
          </h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="codeFilter"
                checked={filters.hasCode === undefined}
                onChange={() => handleCodeFilterChange(undefined)}
                className="border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">All papers</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="codeFilter"
                checked={filters.hasCode === true}
                onChange={() => handleCodeFilterChange(true)}
                className="border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">With code only</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="codeFilter"
                checked={filters.hasCode === false}
                onChange={() => handleCodeFilterChange(false)}
                className="border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Without code</span>
            </label>
          </div>
        </div>

        {/* Citations */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900 flex items-center">
            <Users className="w-4 h-4 mr-2" />
            Minimum Citations
          </h4>
          <select
            value={filters.minCitations || ''}
            onChange={(e) => handleMinCitationsChange(e.target.value ? parseInt(e.target.value) : undefined)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Any number</option>
            <option value="10">10+ citations</option>
            <option value="50">50+ citations</option>
            <option value="100">100+ citations</option>
            <option value="500">500+ citations</option>
            <option value="1000">1000+ citations</option>
          </select>
        </div>
      </div>
    </>
  );
};