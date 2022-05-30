export const getCourse = (slug) => {
    const query = `*[_type == "course" && slug.current == "${slug}" ]{
        _id,
        title,
        price,
        slug, 
        mainImage,
        description,
        _updatedAt,
        _createdAt,
        courseDuration,
        author -> {
          firstName,
          lastName,
          avatar,
       },
       tags[]->{
        _id,
        name
        },
        category->{
            title,
            slug
        },
        reviews[]->{
            review,
            rating,
            _id,
            _createdAt,
            postedBy->{
                firstName,
                lastName, 
                avatar,
                slug
            }
        }
    }`
    return query
}

export const getCourses = () => {
    const query = `*[_type == "course"][0...4]{
        _id,
        title,
        price,
        slug, 
        mainImage,
        courseDuration,
        _createdAt,
        author -> {
          firstName,
          lastName,
          avatar,
       },
       tags[]->{
        _id,
        name
        },
        category->{
            title,
            slug
        },
        reviews[]->{
            review,
            rating,
            _id,
        }
    }`
    return query
}

export const getCoursesByCategory = (slug) => {
    const query = `*[_type == "course" && "${slug}" == category->slug.current]{
        _id,
        title,
        price,
        slug, 
        mainImage,
        courseDuration,
        author -> {
          firstName,
          lastName,
          avatar,
       },
       tags[]->{
        _id,
        name
        },
        category->{
            title,
            slug,
            description
        }
    }`
    return query;
}