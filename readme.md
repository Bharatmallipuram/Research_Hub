# ResearchHub - Research Paper and Code Finder

A modern web application that allows users to search for research papers along with their associated code repositories. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

### Core Functionality
- **Advanced Search**: Keyword-based search with autocomplete suggestions
- **Smart Filtering**: Filter by publication date, research categories, code availability, and citation count
- **Paper Details**: Comprehensive paper information including abstracts, authors, and publication venues
- **Code Integration**: Direct links to associated GitHub repositories with stats
- **Responsive Design**: Optimized for desktop and mobile devices

### User Experience
- **Clean Interface**: Modern, intuitive design with smooth animations
- **Fast Search**: Real-time search suggestions and quick results
- **Pagination**: Efficient browsing through large result sets
- **User Authentication**: Sign up/sign in functionality with persistent sessions
- **Bookmarking**: Save papers for later reading (user accounts)

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Modular, reusable React components
- **State Management**: Efficient state handling with React hooks
- **Mock Data**: Realistic sample data for demonstration
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast build tool and development server

### Development Tools
- **ESLint** - Code linting and quality checks
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd research-paper-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Auth/            # Authentication components
│   │   ├── AuthModal.tsx
│   │   └── UserMenu.tsx
│   ├── Layout/          # Layout components
│   │   └── Header.tsx
│   ├── Papers/          # Paper-related components
│   │   ├── PaperCard.tsx
│   │   └── PaperList.tsx
│   ├── Search/          # Search functionality
│   │   ├── SearchBar.tsx
│   │   └── SearchFilters.tsx
│   └── UI/              # Generic UI components
│       └── Pagination.tsx
├── hooks/               # Custom React hooks
│   └── useAuth.ts
├── pages/               # Page components
│   ├── HomePage.tsx
│   ├── PaperDetailPage.tsx
│   └── SearchPage.tsx
├── services/            # API and data services
│   ├── mockData.ts
│   └── searchService.ts
├── types/               # TypeScript type definitions
│   └── Paper.ts
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🎯 Key Components

### SearchBar
- Real-time search suggestions
- Popular keywords display
- Responsive design with different sizes

### PaperCard
- Comprehensive paper information display
- Code repository integration
- Citation counts and publication details

### SearchFilters
- Advanced filtering options
- Date range selection
- Category and citation filtering

### AuthModal
- User registration and login
- Form validation and error handling
- Secure authentication flow

## 📊 Data Structure

### Paper Interface
```typescript
interface Paper {
  id: string;
  title: string;
  authors: Author[];
  abstract: string;
  publicationDate: string;
  venue?: string;
  pdfUrl: string;
  citationCount: number;
  categories: string[];
  codeRepositories: CodeRepository[];
  hasCode: boolean;
}
```

### Search Filters
```typescript
interface SearchFilters {
  dateFrom?: number;
  dateTo?: number;
  categories: string[];
  hasCode?: boolean;
  minCitations?: number;
}
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3B82F6 to #2563EB)
- **Secondary**: Purple accent (#8B5CF6)
- **Success**: Green (#10B981)
- **Warning**: Orange (#F59E0B)
- **Error**: Red (#EF4444)

### Typography
- **Font Family**: Inter (system fallback)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with 150% line height

### Spacing
- **Base Unit**: 8px
- **Component Padding**: 16px, 24px, 32px
- **Section Margins**: 48px, 64px, 96px

## 🚀 Deployment

The application is deployed on Netlify with automatic builds from the main branch.

### Build Configuration
```json
{
  "build": {
    "command": "npm run build",
    "publish": "dist"
  }
}
```

## 🔮 Future Enhancements

### Planned Features
- **Real API Integration**: Connect to arXiv, Semantic Scholar APIs
- **Advanced Search**: Boolean operators, field-specific search
- **User Profiles**: Personal dashboards and preferences
- **Paper Recommendations**: AI-powered suggestions
- **Citation Networks**: Visual paper relationship mapping
- **Export Features**: BibTeX, EndNote export options
- **Collaboration**: Share reading lists and annotations

### Technical Improvements
- **Database Integration**: PostgreSQL or MongoDB backend
- **Search Engine**: Elasticsearch for advanced search
- **Caching**: Redis for improved performance
- **Testing**: Comprehensive unit and integration tests
- **Analytics**: User behavior tracking and insights

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful component and variable names
- Write clean, documented code
- Ensure responsive design
- Test on multiple browsers

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **arXiv** - For providing open access to research papers
- **Papers With Code** - For connecting papers with implementations
- **Lucide** - For beautiful, consistent icons
- **Tailwind CSS** - For the utility-first CSS framework
- **React Community** - For the amazing ecosystem and tools

## 📞 Support

If you have any questions or need help with the project:

1. Check the [Issues](../../issues) page for existing questions
2. Create a new issue with detailed information
3. Contact the development team

---

**Built with ❤️ by the ResearchHub Team**

*Making research more accessible, one paper at a time.*
