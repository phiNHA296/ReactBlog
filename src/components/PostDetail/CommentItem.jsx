import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchPagingCommentAsync } from '../../store/comment/actions';
import CommentForm from './CommentForm';

function CommentItem(props) {
  const { data } = props;
  const dispatch = useDispatch();
  const [isShowCommentForm, setIsShowCommentForm] = useState(false);

  const { id, author_name: authorName, comment_reply_count: commentReplyCount, content, date, parent } = data;

  const contentRender = content.rendered;
  const dataChildComments = useSelector((state) => state.COMMENT.dataChildComments);
  const dataChildCommentsByParent = dataChildComments[id] || {};
  const { list: listChildComments, currentPage } = dataChildCommentsByParent;
  const listChildCommentsLength = listChildComments ? listChildComments.length : 0;
  const page = currentPage ? currentPage + 1 : 1;

  const restCommentReplyCount = commentReplyCount - listChildCommentsLength;

  function handleLoadMoreReply(e) {
    e.preventDefault();

    dispatch(actFetchPagingCommentAsync({ parent: id, per_page: 4, page: page }));
  }

  function handleToggleForm() {
    setIsShowCommentForm(!isShowCommentForm);
  }

  return (
    <li className="item">
      <div className="comments__section">
        <div className="comments__section--avatar">
          <a href="/">
            <img src="/assets/images/avatar2.jpg" alt="" />
          </a>
        </div>
        <div className="comments__section--content">
          <a href="/" className="comments__section--user">
            {authorName}
          </a>
          <p className="comments__section--time">{date}</p>
          <div className="comments__section--text">{contentRender}</div>
          {parent === 0 && <i className="ion-reply comments__section--reply" onClick={handleToggleForm}></i>}
        </div>
      </div>
      {isShowCommentForm && <CommentForm parent={id} />}

      {listChildCommentsLength > 0 && (
        <ul className="comments">
          {listChildComments.map((item) => (
            <CommentItem key={item.id} data={item} />
          ))}
        </ul>
      )}
      {restCommentReplyCount > 0 && (
        <div className="comments__hidden">
          <a href="/" onClick={handleLoadMoreReply}>
            <i className="icons ion-ios-undo" /> Xem thêm {restCommentReplyCount} câu trả lời
          </a>
        </div>
      )}
    </li>
  );
}

export default CommentItem;
