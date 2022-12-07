import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Logo } from 'components/Logo/Logo';
import { Input } from 'components/Input/Input';
import css from './Login.module.scss';
import { Button } from 'components/Button/Button';
import { HeaderL } from 'components/HeaderL/HeaderL';
import { Container } from 'components/Container/Container';
import { Box } from 'components/Box/Box';
const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});
export const Login = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <Link to="/" className={css.logo}>
        <Logo className={css.logo} />
      </Link>
      <Container>
        <Box className={css.box}>
          <HeaderL className={css.title}>Login</HeaderL>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
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
                    autoComplete="current-password"
                    placeholder="Password"
                    name="password"
                    error={
                      errors.password && touched.password && errors.password
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                <Button
                  className={css.submitBtn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Login to your account
                </Button>
                <p className={css.text}>
                  Don’t have an account?{' '}
                  <Link to="/sign-up" className={css.link}>
                    Sign Up
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
