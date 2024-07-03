import React, { ReactNode, createContext, useState } from 'react';

const SearchContext = createContext({
  search: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSearch: (s: string) => {},
});

interface SearchContextProviderProps {
  children: ReactNode;
}

const SearchContextProvider: React.FC<SearchContextProviderProps> = ({
  children,
}) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };
