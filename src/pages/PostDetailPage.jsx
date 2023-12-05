import { useParams } from 'react-router-dom';
import PostDetailContent from '../components/PostDetail/PostDetailContent';
import PostDetailHead from '../components/PostDetail/PostDetailHead';
import PostDetailSidebar from '../components/PostDetail/PostDetailSidebar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchPostDetailAsync } from '../store/post/actions';

function PostDetailPage() {
  // lấy slug từ url xuống -> useParams
  const { slug } = useParams();
  const dispatch = useDispatch();
  const postDetail = useSelector((state) => state.POST.postDetail);

  useEffect(() => {
    dispatch(actFetchPostDetailAsync(slug));
  }, [slug]);

  // sử dụng useEffect -> dispatch action lấy chi tiết bài viết -> truyền vào slug

  return (
    <main className="post-detail">
      <div className="spacing" />

      <PostDetailHead />

      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent />

            <PostDetailSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostDetailPage;
