import { useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import data from 'data.json';
import { MovieList } from 'components/MovieList/MovieList';
import { Container, HeaderL } from 'components/common.styled';
export const TvSeries = () => {
  const tvSeries = data.filter(movie => movie.category === 'TV Series');
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [filterByTitle, setFilterByTitle] = useState('');
  const handleFilter = filter => {
    const formatedFilter = filter.toLowerCase().trim();
    setFilterByTitle(filter);
    const result = tvSeries.filter(({ title }) =>
      title.toLowerCase().includes(formatedFilter),
    );
    setVisibleMovies(result);
  };
  const searchBarParams = {
    handleFilter,
    placeholder: 'Search for TV series',
  };
  if (visibleMovies.length > 0 && filterByTitle) {
    return (
      <>
        <SearchBar {...searchBarParams} />
        <Container>
          <HeaderL>
            Found {visibleMovies.length} results for '{filterByTitle}'
          </HeaderL>
          <MovieList moviesArray={visibleMovies} />
        </Container>
      </>
    );
  }
  if (visibleMovies.length === 0 && filterByTitle) {
    return (
      <>
        <SearchBar {...searchBarParams} />
        <Container>
          <HeaderL>TV Series</HeaderL>

          <HeaderL>Nothing found</HeaderL>
        </Container>
      </>
    );
  }
  return (
    <>
      <SearchBar {...searchBarParams} />
      <Container>
        <HeaderL>TV Series</HeaderL>

        <MovieList moviesArray={tvSeries} />
      </Container>
    </>
  );
};
