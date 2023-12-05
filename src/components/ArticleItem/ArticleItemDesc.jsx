export default function ArticleItemDesc({ description }) {
  description = description.replace('<p>', '').replace('</p>', '');

  return <p className="article-item__desc">{description}</p>;
}
