import { MovieCard } from 'components/MovieCard/MovieCard';
import { List } from './MovieList.styled';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
export const MovieList = ({ style, itemsPerRow = 2, moviesArray }) => {
  const el = useRef();
  useLayoutEffect(() => {
    const q = gsap.utils.selector(el);
    gsap.fromTo(
      q('.card'),
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        stagger: {
          from: 'random',
          grid: 'auto',
          each: 0.15,
          ease: 'power2',
        },
      },
    );
  }, [el]);
  return (
    <List itemsPerRow={itemsPerRow} ref={el}>
      {moviesArray.map((movie, idx) => {
        return (
          <li key={idx} className="card">
            <MovieCard {...movie} thumbnail={movie.thumbnail.regular.small}>
              <MovieCard.BookmarkButton />
              <MovieCard.MovieInfo />
            </MovieCard>
          </li>
        );
      })}
    </List>
  );
};
