import { useSelector } from 'react-redux';
import ArticleItem from '../ArticleItem';
import MainTitle from '../shared/MainTitle';
import './latest-news-list.css';

function ArticleLatest() {
  const posts = useSelector((state) => state.POST.postsLatest);

  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle>Bài viết mới</MainTitle>

        <div className="latest-news__list spacing">
          {posts.map((postItem) => (
            <div className="latest-news__card" key={postItem.id}>
              <ArticleItem data={postItem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleLatest;
