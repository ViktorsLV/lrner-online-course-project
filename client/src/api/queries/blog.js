export const getBlogs = () => {
    const query = `*[_type == "blog"][0...4]{
        _id,
        title,
        slug, 
        mainImage,
        description,
        blogCategory->{
            title,
            slug
        },
        author -> {
          firstName,
          lastName,
          avatar,
       },
    }`
    return query
}

export const getBlogCategories = () => {
    const query = `*[_type == "blogCategory"]{
            _id,
            title,
            slug{
                current
            }
    }`
    return query
}

export const getBlogArticle = (slug) => {
    const query = `*[_type == "blog" && slug.current == "${slug}"]{
        _id,
        _createdAt,
        _updatedAt,
        title,
        slug, 
        mainImage,
        description,
        blogCategory->{
            title,
            slug
        },
        author -> {
          firstName,
          lastName,
          avatar,
       },
    }`
    return query
}