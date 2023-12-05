export function mappingPostData(item) {
  return {
    id: item.id,
    thumb: item.featured_media_url,
    title: item.title.rendered,
    slug: item.slug,
    authorInfo: item.author_data,
    pubDate: item.date,
    description: item.excerpt.rendered,
    categoryIds: item.categories,
  };
}

export function mappingMenuData(item) {
  const dataChildItems = item.child_items || [];

  const childItems = dataChildItems.map(mappingMenuData);

  return {
    id: item.ID,
    title: item.title,
    childItems: childItems,
  };
}
