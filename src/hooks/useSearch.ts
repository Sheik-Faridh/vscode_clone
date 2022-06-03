import { ChangeEvent, useState } from 'react';

const useSearch = () => {
  const [search, setSearch] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return { search, handleChange };
};

export default useSearch;
