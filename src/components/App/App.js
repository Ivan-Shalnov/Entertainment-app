import 'reset-css';
import 'css/vars.css';
import './../../sass/main.scss';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { TvSeries } from 'pages/TvSeries/TvSeries';
import { MoviesPage } from 'pages/Movies/Movies';
import { BookmarkedPage } from 'pages/Bookmarked/Bookmarked';
import { AppContainer } from './App.styled';
import { Login } from 'pages/Login/Login';
import { SignUp } from 'pages/SignUp/SignUp';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tv-series" element={<TvSeries />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/bookmarked" element={<BookmarkedPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
};
