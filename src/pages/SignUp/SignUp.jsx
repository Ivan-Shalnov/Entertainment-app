import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Logo } from 'components/Logo/Logo';
import { Input } from 'components/Input/Input';
import css from './SignUp.module.scss';
import { Button } from 'components/Button/Button';
import { HeaderL } from 'components/HeaderL/HeaderL';
import { Container } from 'components/Container/Container';
import { Box } from 'components/Box/Box';
import { useDispatch } from 'react-redux';
import { singUp } from 'redux/auth/operations';
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Minimum length 6 symbols')
    .max(8, 'Maximum length 8 symbols')
    .required('Required'),
  passwordConfirmation: Yup.string().required('Required'),
});
export const SignUp = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (values, { setSubmitting }) => {
    await dispatch(singUp(values));
    setSubmitting(false);
  };

  return (
    <>
      <Link to="/" className={css.logo}>
        <Logo className={css.logo} />
      </Link>
      <Container>
        <Box className={css.box}>
          <HeaderL className={css.title}>Sign Up</HeaderL>
          <Formik
            initialValues={{
              email: '',
              password: '',
              passwordConfirmation: '',
            }}
            validationSchema={validationSchema}
            validate={values => {
              const errors = {};
              if (values.password !== values.passwordConfirmation) {
                errors.passwordConfirmation = 'Password is incorrect';
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className={css.form} onSubmit={handleSubmit}>
                <div className={css.inputsContainer}>
                  <Input
                    type="email"
                    autoComplete="username"
                    placeholder="Email address"
                    error={errors.email && touched.email && errors.email}
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <Input
                    type="password"
                    autoComplete="new-password"
                    placeholder="Password"
                    name="password"
                    error={
                      errors.password && touched.password && errors.password
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <Input
                    type="password"
                    autoComplete="new-password"
                    placeholder="Repeat Password"
                    name="passwordConfirmation"
                    error={
                      errors.passwordConfirmation &&
                      touched.passwordConfirmation &&
                      errors.passwordConfirmation
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirmation}
                  />
                </div>
                <Button
                  className={css.submitBtn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Create an account
                </Button>
                <p className={css.text}>
                  Alread have an account?{' '}
                  <Link to="/login" className={css.link}>
                    Login
                  </Link>
                </p>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  );
};
