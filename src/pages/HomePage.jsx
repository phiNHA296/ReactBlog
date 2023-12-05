import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ArticleGeneral from '../components/ArticleGeneral';
import ArticleLatest from '../components/ArticleLatest';
import ArticlePopular from '../components/ArticlePopular';
import { actFetchPostsLatestAsync, actFetchPostsPagingAsync, actFetchPostsPopularAsync } from '../store/post/actions';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchPostsLatestAsync());
    dispatch(actFetchPostsPopularAsync());
    dispatch(actFetchPostsPagingAsync({ page: 1, per_page: 2 }));
  }, []);

  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  );
}

export default HomePage;
