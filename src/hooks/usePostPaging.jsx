import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchPostsPagingAsync } from '../store/post/actions';
import Button from '../components/shared/Button';

export function usePostPaging(extraParams = {}) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { list: posts, currentPage, totalPage, total } = useSelector((state) => state.POST.postsPaging);

  const hasMorePosts = currentPage < totalPage;

  function handleLoadMore() {
    setLoading(true);
    dispatch(actFetchPostsPagingAsync({ page: currentPage + 1, ...extraParams })).then(() => {
      setLoading(false);
    });
  }

  function renderButtonLoadMore() {
    return (
      hasMorePosts && (
        <div className="text-center">
          <Button type="primary" size="large" disabled={loading} loading={loading} onClick={handleLoadMore}>
            Tải thêm
          </Button>
        </div>
      )
    );
  }

  return {
    posts,
    totalPage,
    total,
    renderButtonLoadMore,
  };
}
