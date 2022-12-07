import data from 'data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Header, Section, SwiperStyled } from './Trending.styled';
import { Container } from 'components/common.styled';
import { MovieCard } from 'components/MovieCard/MovieCard';

export const Trending = () => {
  const trendingMovies = data.filter(({ isTrending }) => isTrending);

  return (
    <Section>
      <Container>
        <Header>Trending</Header>
      </Container>
      <SwiperStyled
        spaceBetween={15}
        slidesPerView={2.5}
        modules={[FreeMode]}
        freeMode
      >
        {trendingMovies.map((movie, idx) => {
          return (
            <SwiperSlide key={idx}>
              <MovieCard {...movie} thumbnail={movie.thumbnail.trending.small}>
                <MovieCard.BookmarkButton />
                <MovieCard.MovieInfo movieInfoInside />
              </MovieCard>
            </SwiperSlide>
          );
        })}
      </SwiperStyled>
    </Section>
  );
};
