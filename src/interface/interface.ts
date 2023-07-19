// SearchForm.tsx
// useTyping, useActiveSearchIndex
export interface typingAndActiveSearchIndexType {
  searchReducer: {
    typing: string;
    activeSearchIndex: number;
  };
}

// SearchResultList.tsx
// Request data
export interface setShowingType {
  sickCd: string;
  sickNm: string;
}

// useShowing
export interface showingType {
  resultReducer: {
    showing: setShowingType[];
  };
}

// SearchResult.tsx
// Data title && Index focusing Check
export interface SearchResultPropsType {
  title?: string;
  isActive?: boolean;
}
