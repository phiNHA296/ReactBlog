import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchPagingCommentAsync } from '../../store/comment/actions';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import './comments.css';

function PostDetailComments() {
  const dispatch = useDispatch();
  const dataParentComments = useSelector((state) => state.COMMENT.dataParentComments);
  const postDetail = useSelector((state) => state.POST.postDetail);
  const currentUser = useSelector((state) => state.USER.currentUser);

  const { list: parentComments, total, currentPage } = dataParentComments;

  const commentCount = parentComments.length;
  const restCommentCount = total - commentCount;

  function handleLoadMore(e) {
    e.preventDefault();

    dispatch(actFetchPagingCommentAsync({ post: postDetail.id, page: currentPage + 1 }));
  }

  return (
    <div className="post-detail__comments">
      {currentUser && <CommentForm />}
      {!currentUser && (
        <p>
          Vui lòng <Link to="/login">đăng nhập</Link> để bình luận
        </p>
      )}
      <p>20 Comments</p>
      <ul className="comments">
        {parentComments.map((commentItem) => (
          <CommentItem key={commentItem.id} data={commentItem} />
        ))}
      </ul>
      {restCommentCount > 0 && (
        <div className="comments__hidden parent">
          <a href="/" onClick={handleLoadMore}>
            <i className="icons ion-ios-undo" /> Xem thêm {restCommentCount} bình luận
          </a>
        </div>
      )}
    </div>
  );
}

export default PostDetailComments;
