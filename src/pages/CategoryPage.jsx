import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticleItem from '../components/ArticleItem';
import Button from '../components/shared/Button';
import { actFetchPostsByCategoryAsync } from '../store/post/actions';

// lấy slug từ url xuống thông qua useParams
// sử dụng useEffect -> dispatch action lấy bài viết theo category -> action này nhận vào slug

function CategoryPage(props) {
  const params = useParams();
  const { slug } = params;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const { list: posts, currentPage, totalPage } = useSelector((state) => state.POST.postsByCategory);

  const hasMorePosts = currentPage < totalPage;

  function handleLoadMore() {
    setLoading(true);
    dispatch(actFetchPostsByCategoryAsync(slug, currentPage + 1)).then(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    dispatch(actFetchPostsByCategoryAsync(slug));
  }, [slug]);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <div className="main-title main-title__search spacing">
          <h2>4 Results found for "search query"</h2>
        </div>
        {posts.map((item) => (
          <div className="tcl-row tcl-jc-center" key={item.id}>
            <div className="tcl-col-12 tcl-col-md-8">
              <ArticleItem isStyleCard isShowCategoies data={item} />
            </div>
          </div>
        ))}
        {hasMorePosts && (
          <div className="text-center">
            <Button type="primary" size="large" disabled={loading} loading={loading} onClick={handleLoadMore}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
