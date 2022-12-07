import { createContext, useContext, useRef } from 'react';
import { gsap } from 'gsap';
import css from './MovieCard.module.scss';
import { ReactComponent as MovieIcon } from 'assets/icon-category-movie.svg';
import { ReactComponent as TvIcon } from 'assets/icon-category-tv.svg';
import { ReactComponent as BookmarkIconEmpty } from 'assets/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkIconFull } from 'assets/icon-bookmark-full.svg';
const MovieCardContext = createContext();

const Category = ({ showIcon = true }) => {
  const { category } = useContext(MovieCardContext);
  let Icon;
  switch (category) {
    case 'Movie':
      Icon = MovieIcon;
      break;
    case 'TV Series':
      Icon = TvIcon;
      break;
    default:
      Icon = null;
  }
  return (
    <span>
      {showIcon && Icon && <Icon className={css.icon} />}
      {category}
    </span>
  );
};
const BookmarkButton = () => {
  const { isBookmarked } = useContext(MovieCardContext);
  const ref = useRef();
  const animation = () => {
    gsap.from(ref.current, {
      duration: 1,
      physics2D: { velocity: 3000, angle: -60, friction: 0.1 },
    });
  };
  return (
    <button onClick={animation} ref={ref} className={css.bookmarkBtn}>
      {isBookmarked ? <BookmarkIconFull /> : <BookmarkIconEmpty />}
    </button>
  );
};
const MovieInfo = ({ movieInfoInside, showCategoryIcon = true }) => {
  const { year, rating, title } = useContext(MovieCardContext);

  let classes = [css.containerInfo];
  if (movieInfoInside) classes.push(css['containerInfo--positionInside']);
  classes = classes.join(' ');
  return (
    <div className={classes}>
      <p className={css.list}>
        <span>{year}</span>
        <Category showIcon={showCategoryIcon} />
        <span>{rating}</span>
      </p>
      <p className={css.title}>{title}</p>
    </div>
  );
};
export const MovieCard = ({
  thumbnail,
  title,
  year,
  category,
  rating,
  isBookmarked,
  movieInfoInside = false,
  style,
  className = null,
  children,
}) => {
  const classes = [css.wrap, className].join(' ');
  return (
    <MovieCardContext.Provider
      value={{
        thumbnail,
        title,
        year,
        category,
        rating,
        isBookmarked,
        movieInfoInside,
      }}
    >
      <div style={style} className={classes}>
        <img src={thumbnail} alt={title} className={css.thumbnail} />
        {children}
      </div>
    </MovieCardContext.Provider>
  );
};
MovieCard.MovieInfo = MovieInfo;
MovieCard.BookmarkButton = BookmarkButton;
