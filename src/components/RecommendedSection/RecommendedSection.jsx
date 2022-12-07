import { Header } from './RecommendedSection.styled';
import data from 'data.json';
import { Container } from 'components/common.styled';
import { MovieList } from 'components/MovieList/MovieList';
export const RecommendedSection = () => {
  const recommendedMovies = data;
  console.log('RecommendedSection ~ recommendedMovies', recommendedMovies);

  return (
    <section>
      <Container>
        <Header>Recommended for you</Header>
        <MovieList moviesArray={recommendedMovies} />
      </Container>
    </section>
  );
};
