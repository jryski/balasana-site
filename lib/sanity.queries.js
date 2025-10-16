// Query for all blog posts (for blog index page)
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author,
  publishedAt,
  excerpt,
  categories
}`;

// Query for a single blog post by slug
export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  author,
  publishedAt,
  excerpt,
  body,
  categories
}`;