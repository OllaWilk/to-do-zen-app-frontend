import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

interface SearchContextType {
  search: string;
  order: 'ASC' | 'DESC' | '';
  setSearch: Dispatch<SetStateAction<string>>;
  setOrder: Dispatch<SetStateAction<'ASC' | 'DESC' | ''>>;
}

const SearchContext = createContext<SearchContextType>({
  search: '',
  order: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSearch: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setOrder: () => {},
});

interface SearchContextProviderProps {
  children: ReactNode;
}

const SearchContextProvider: React.FC<SearchContextProviderProps> = ({
  children,
}) => {
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState<'ASC' | 'DESC' | ''>('');

  return (
    <SearchContext.Provider value={{ search, setSearch, order, setOrder }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };
