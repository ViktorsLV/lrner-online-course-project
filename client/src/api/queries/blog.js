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
        author->{
          firstName,
          lastName,
          avatar,
          slug
       }
    }`
    return query
}

export const getBlogsByCategory = (category) => {
    const query = `*[_type == "blog" && "${category}" == blogCategory->slug.current]{
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
          slug
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
          slug
       },
    }`
    return query
}

export const getBlogsByAuthor = (userSlug, currentBlog) => {
    const query = `*[_type == "blog" && "${userSlug}" == author->slug.current && "${currentBlog}" != slug.current][0...3]{
        _id,
        _createdAt,
        title,
        slug, 
        blogCategory->{
            slug
        },
    }`
    return query
}


