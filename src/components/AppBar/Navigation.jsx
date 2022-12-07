import { NavLink } from 'react-router-dom';
import { ReactComponent as IconHome } from 'assets/icon-nav-home.svg';
import { ReactComponent as IconMovies } from 'assets/icon-nav-movies.svg';
import { ReactComponent as IconTvSeries } from 'assets/icon-nav-tv-series.svg';
import { ReactComponent as IconBookmark } from 'assets/icon-nav-bookmark.svg';

import { List } from './Navigation.styled';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
export const Navigation = props => {
  const el = useRef();
  const items = [
    { to: '/', icon: IconHome, text: 'Home' },
    { to: '/movies', icon: IconMovies, text: 'Movies' },
    { to: '/tv-series', icon: IconTvSeries, text: 'TV Series' },
    { to: '/bookmarked', icon: IconBookmark, text: 'Bookmarks' },
  ];
  useLayoutEffect(() => {
    const q = gsap.utils.selector(el);
    gsap.fromTo(
      q('.nav-link'),
      {
        opacity: 0,
        scale: 0,
        color: '#fff',
      },
      {
        opacity: 1,
        scale: 1,
        color: '#5A698F',
        duration: 0.5,
        stagger: 0.5,
      },
    );
  }, [el]);
  return (
    <nav>
      <List ref={el}>
        {items.map(({ to, icon: Icon, text }, idx) => {
          return (
            <li key={idx} className="nav-link">
              <NavLink to={to}>
                <Icon />
              </NavLink>
            </li>
          );
        })}
      </List>
    </nav>
  );
};
