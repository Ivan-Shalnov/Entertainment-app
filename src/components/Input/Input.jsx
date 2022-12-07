import css from './Input.module.scss';
export const Input = ({ error = null, ...props }) => {
  return (
    <span className={css.wrap}>
      <input {...props} className={css.input} />
      {error && <span className={css.error}>{error}</span>}
    </span>
  );
};
