import { usePostPaging } from '../../hooks/usePostPaging';
import ArticleItem from '../ArticleItem';
import MainTitle from '../shared/MainTitle';

function ArticleGeneral() {
  const { posts, renderButtonLoadMore } = usePostPaging({ per_page: 2 });
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        <div className="tcl-row">
          {posts.map((item) => (
            <div className="tcl-col-12 tcl-col-md-6" key={item.id}>
              <ArticleItem isStyleCard isShowAvatar={false} data={item} />
            </div>
          ))}
        </div>
        {renderButtonLoadMore()}
      </div>
    </div>
  );
}

export default ArticleGeneral;
