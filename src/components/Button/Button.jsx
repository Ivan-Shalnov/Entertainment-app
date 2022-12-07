import css from './Button.module.scss';
export const Button = ({ children, className, ...props }) => {
  const classes = [css.button, className].join(' ');
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
