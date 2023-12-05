import cls from 'classnames';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemStats from './ArticleItemStats';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import './article-item.css';

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  data,
}) {
  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  });

  if (!data) return <></>;

  const { thumb, title, pubDate, authorInfo, description, categoryIds, slug } = data;

  return (
    <article className={classes}>
      <ArticleItemThumb thumb={thumb} />
      <div className="article-item__content">
        {isShowCategoies && <ArticleItemCategories categoryIds={categoryIds} />}
        {isShowCategoies && <ArticleItemStats />}

        <ArticleItemTitle title={title} slug={slug} />

        {isShowDesc && <ArticleItemDesc description={description} />}

        <ArticleItemInfo pubDate={pubDate} authorInfo={authorInfo} isShowAvatar={isShowAvatar} />
      </div>
    </article>
  );
}
