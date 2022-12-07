import css from './HeaderL.module.scss';
export const HeaderL = ({ children, className }) => {
  const classes = [css.headerL, className].join(' ');
  return <h2 className={classes}>{children}</h2>;
};
