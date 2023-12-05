import ArticleItemAvatar from './ArticleItemAvatar';

export default function ArticleItemInfo({ isShowAvatar, pubDate, authorInfo }) {
  const { avatar, nickname } = authorInfo;
  return (
    <div className="article-item__info">
      {isShowAvatar && <ArticleItemAvatar avatar={avatar} />}
      <div className="article-item__info-right">
        <div className="article-item__author-name">
          <a href="/">
            <strong>{nickname}</strong>
          </a>
        </div>
        <div className="article-item__datetime">
          <div className="date">{pubDate}</div>
        </div>
      </div>
    </div>
  );
}
