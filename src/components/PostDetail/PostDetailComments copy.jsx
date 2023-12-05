import { useSelector } from 'react-redux';
import './comments.css';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

function PostDetailComments() {
  const dataParentComments = useSelector((state) => state.COMMENT.dataParentComments);

  console.log('dataParentComments', dataParentComments);

  return (
    <div className="post-detail__comments">
      <CommentForm />
      <p>20 Comments</p>
      <ul className="comments">
        {/* Comment 1 */}
        <li className="item">
          <div className="comments__section">
            <div className="comments__section--avatar">
              <a href="/">
                <img src="/assets/images/avatar1.jpg" alt="" />
              </a>
            </div>
            <div className="comments__section--content">
              <a href="/" className="comments__section--user">
                John Smith
              </a>
              <p className="comments__section--time">2 minutes ago</p>
              <p className="comments__section--text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sequi odit exercitationem maiores,
                iusto unde quibusdam! Ullam nisi iste reprehenderit, expedita nam ad. Nisi hic at voluptate sint
                incidunt aut?
              </p>
              {/* <i class="ion-reply comments__section--reply"></i> */}
            </div>
          </div>
          {/* Reply Comments */}
          <ul className="comments">
            <li className="item">
              <div className="comments__section">
                <div className="comments__section--avatar">
                  <a href="/">
                    <img src="/assets/images/avatar3.jpg" alt="" />
                  </a>
                </div>
                <div className="comments__section--content">
                  <a href="/" className="comments__section--user">
                    John Smith
                  </a>
                  <p className="comments__section--time">2 minutes ago</p>
                  <p className="comments__section--text">Lorem ipsum dolor sit, amet?</p>
                  {/* <i class="ion-reply comments__section--reply"></i> */}
                </div>
              </div>
            </li>
            <li className="item">
              <div className="comments__section">
                <div className="comments__section--avatar">
                  <a href="/">
                    <img src="/assets/images/avatar3.jpg" alt="" />
                  </a>
                </div>
                <div className="comments__section--content">
                  <a href="/" className="comments__section--user">
                    John Smith
                  </a>
                  <p className="comments__section--time">2 minutes ago</p>
                  <p className="comments__section--text">Lorem ipsum dolor sit, amet?</p>
                  {/* <i class="ion-reply comments__section--reply"></i> */}
                </div>
              </div>
            </li>
          </ul>
          {/* Reply form */}
          <CommentForm />
        </li>
        {/* Comment 2 */}
        <CommentItem />
        {/* Comment 3 */}
        <li className="item">
          <div className="comments__section">
            <div className="comments__section--avatar">
              <a href="/">
                <img src="/assets/images/avatar3.jpg" alt="" />
              </a>
            </div>
            <div className="comments__section--content">
              <a href="/" className="comments__section--user">
                John Smith
              </a>
              <p className="comments__section--time">2 minutes ago</p>
              <p className="comments__section--text">Lorem ipsum dolor sit, amet?</p>
              {/* <i class="ion-reply comments__section--reply"></i> */}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default PostDetailComments;
