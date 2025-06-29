import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { searchService } from '../../services/searchService';

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
  placeholder?: string;
  size?: 'small' | 'large';
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  initialQuery = '',
  placeholder = 'Search research papers and code...',
  size = 'large'
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [popularKeywords, setPopularKeywords] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPopularKeywords(searchService.getPopularKeywords());
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const newSuggestions = searchService.getSearchSuggestions(query);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleInputBlur = (e: React.FocusEvent) => {
    // Delay hiding suggestions to allow clicks
    setTimeout(() => {
      if (!suggestionsRef.current?.contains(e.relatedTarget)) {
        setShowSuggestions(false);
      }
    }, 200);
  };

  const clearQuery = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const sizeClasses = {
    small: 'h-10 text-sm',
    large: 'h-14 text-lg'
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className={`relative flex items-center bg-white rounded-2xl shadow-lg border border-gray-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all duration-200 ${sizeClasses[size]}`}>
          <Search className="absolute left-4 w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder={placeholder}
            className="w-full pl-12 pr-12 py-0 bg-transparent border-0 outline-none text-gray-900 placeholder-gray-500"
          />
          {query && (
            <button
              type="button"
              onClick={clearQuery}
              className="absolute right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>

      {showSuggestions && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-80 overflow-y-auto"
        >
          {suggestions.length > 0 && (
            <div className="p-2">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Suggestions
              </div>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full flex items-center px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <Search className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-900">{suggestion}</span>
                </button>
              ))}
            </div>
          )}

          {!query && popularKeywords.length > 0 && (
            <div className="p-2">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                Popular Topics
              </div>
              {popularKeywords.map((keyword, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(keyword)}
                  className="w-full flex items-center px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <Clock className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{keyword}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};