import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actAddCommentAsync } from '../../store/comment/actions';

function CommentForm({ parent = 0 }) {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.USER.currentUser);
  const postDetail = useSelector((state) => state.POST.postDetail);

  function handlePostComment() {
    const data = {
      content: content.trim(),
      author: currentUser.id,
      post: postDetail.id,
      parent: parent,
    };

    dispatch(actAddCommentAsync(data));
    setContent('');
  }

  function handleChangeContent(e) {
    setContent(e.target.value);
  }

  return (
    <div className="comments__form">
      <div className="comments__form--control">
        <div className="comments__section--avatar">
          <a href="/">
            <img src="/assets/images/avatar1.jpg" alt="" />
          </a>
        </div>
        <textarea value={content} onChange={handleChangeContent} />
      </div>
      <div className="text-right">
        <button className="btn btn-default" onClick={handlePostComment}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default CommentForm;
