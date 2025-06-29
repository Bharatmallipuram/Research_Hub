export interface Author {
  id: string;
  name: string;
  affiliation?: string;
}

export interface CodeRepository {
  id: string;
  platform: 'github' | 'gitlab' | 'bitbucket';
  url: string;
  stars: number;
  forks: number;
  language: string;
  lastUpdated: string;
}

export interface Paper {
  id: string;
  title: string;
  authors: Author[];
  abstract: string;
  abstractSnippet: string;
  publicationDate: string;
  venue?: string;
  pdfUrl: string;
  arxivId?: string;
  doi?: string;
  citationCount: number;
  categories: string[];
  keywords: string[];
  codeRepositories: CodeRepository[];
  hasCode: boolean;
}

export interface SearchFilters {
  dateFrom?: number;
  dateTo?: number;
  categories: string[];
  hasCode?: boolean;
  minCitations?: number;
}

export interface SearchResult {
  papers: Paper[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
}