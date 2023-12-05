import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ArticleItem from '../components/ArticleItem';
import { usePostPaging } from '../hooks/usePostPaging';
import { actFetchPostsPagingAsync } from '../store/post/actions';

function SearchPage(props) {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const keyword = urlParams.get('keyword');
  const dispatch = useDispatch();

  const { posts, renderButtonLoadMore, total } = usePostPaging({ search: keyword, per_page: 1 });

  useEffect(() => {
    dispatch(actFetchPostsPagingAsync({ search: keyword, page: 1, per_page: 1 }));
  }, [keyword]);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <div className="main-title main-title__search spacing">
          <h2>
            Tìm thấy {total} bài viết với từ khóa "{keyword}"
          </h2>
        </div>
        {posts.map((item) => (
          <div className="tcl-row tcl-jc-center" key={item.id}>
            <div className="tcl-col-12 tcl-col-md-8">
              <ArticleItem isStyleCard isShowCategoies data={item} />
            </div>
          </div>
        ))}
        {renderButtonLoadMore()}
      </div>
    </div>
  );
}

export default SearchPage;
