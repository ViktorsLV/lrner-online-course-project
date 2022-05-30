export const getCategories = () => {
    const query = `*[_type == "category"]{
        _id,
        title,
        slug,
        iconName
    }`
    return query;
}

export const getCategory = (slug) => {
    const query = `*[_type == "category" && slug.current == "${slug}"]{
        _id,
        title,
        description,
        slug,
    }`
    return query;
}