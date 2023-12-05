import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ArticleItemCategories({ categoryIds }) {
  const categories = useSelector((state) => state.CATEGORY.list);

  if (!categories) return <></>;

  return (
    <ul className="article-item__categories">
      {categoryIds.map((id) => {
        const category = categories[id];

        return (
          <li key={id}>
            <Link to={`/category/${category.slug}`} className="btn btn-category">
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
