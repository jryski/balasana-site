export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, author, mainImage, categories, publishedAt, excerpt
}`

export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, author, mainImage, categories, publishedAt, excerpt, body
}`
