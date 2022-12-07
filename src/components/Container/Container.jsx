import css from './Container.module.scss';
export const Container = ({ className, children }) => {
  const classes = [css.container, className].join(' ');
  return <div className={classes}>{children}</div>;
};
