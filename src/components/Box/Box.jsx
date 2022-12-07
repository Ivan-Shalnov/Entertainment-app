import css from './Box.module.scss';
export const Box = ({ className, children }) => {
  const classes = [css.box, className].join(' ');
  return <div className={classes}>{children}</div>;
};
