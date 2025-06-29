import { Paper, SearchFilters, SearchResult } from '../types/Paper';
import { mockPapers, popularKeywords } from './mockData';

class SearchService {
  private papers: Paper[] = mockPapers;

  async searchPapers(
    query: string,
    filters: SearchFilters = {},
    page: number = 1,
    pageSize: number = 10
  ): Promise<SearchResult> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    let filteredPapers = [...this.papers];

    // Apply text search
    if (query.trim()) {
      const searchTerms = query.toLowerCase().split(' ');
      filteredPapers = filteredPapers.filter(paper => {
        const searchText = `${paper.title} ${paper.abstract} ${paper.authors.map(a => a.name).join(' ')} ${paper.keywords.join(' ')}`.toLowerCase();
        return searchTerms.every(term => searchText.includes(term));
      });
    }

    // Apply filters
    if (filters.dateFrom) {
      filteredPapers = filteredPapers.filter(paper => 
        new Date(paper.publicationDate).getFullYear() >= filters.dateFrom!
      );
    }

    if (filters.dateTo) {
      filteredPapers = filteredPapers.filter(paper => 
        new Date(paper.publicationDate).getFullYear() <= filters.dateTo!
      );
    }

    if (filters.categories.length > 0) {
      filteredPapers = filteredPapers.filter(paper =>
        paper.categories.some(category => filters.categories.includes(category))
      );
    }

    if (filters.hasCode !== undefined) {
      filteredPapers = filteredPapers.filter(paper => paper.hasCode === filters.hasCode);
    }

    if (filters.minCitations) {
      filteredPapers = filteredPapers.filter(paper => paper.citationCount >= filters.minCitations!);
    }

    // Sort by relevance (citation count for now)
    filteredPapers.sort((a, b) => b.citationCount - a.citationCount);

    // Pagination
    const totalCount = filteredPapers.length;
    const totalPages = Math.ceil(totalCount / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const papers = filteredPapers.slice(startIndex, endIndex);

    return {
      papers,
      totalCount,
      currentPage: page,
      totalPages,
      hasMore: page < totalPages
    };
  }

  async getPaperById(id: string): Promise<Paper | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return this.papers.find(paper => paper.id === id) || null;
  }

  getSearchSuggestions(query: string): string[] {
    if (!query.trim()) return [];
    
    const suggestions = popularKeywords.filter(keyword =>
      keyword.toLowerCase().includes(query.toLowerCase())
    );

    return suggestions.slice(0, 5);
  }

  getPopularKeywords(): string[] {
    return popularKeywords.slice(0, 10);
  }
}

export const searchService = new SearchService();