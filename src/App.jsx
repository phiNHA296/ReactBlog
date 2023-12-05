import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostDetailPage from './pages/PostDetailPage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import { actFetchCategoriesAsync } from './store/category/actions';
import { actFetchMenusAsync } from './store/menu/actions';
import NotFoundPage from './pages/NotFoundPage';
import { actUserFetchMeAsync } from './store/user/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchCategoriesAsync());
    dispatch(actFetchMenusAsync());
    dispatch(actUserFetchMeAsync());
  }, []);

  return (
    <div className="wrapper-content">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/change-password" element={<RegisterPage />}></Route>
        <Route path="/post/:slug" element={<PostDetailPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/category/:slug" element={<CategoryPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <div className="spacing" />
      <Footer />
    </div>
  );
}

export default App;
