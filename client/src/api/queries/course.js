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
          description
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
                slug,
                _id
            }
        },
        "likeCount": count(likedBy),
        "reviewCount": count(reviews)
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
        },
        "likeCount": count(likedBy)
    }`
    return query
}

export const getLatestCourses = () => {
    const query = `*[_type == "course" ] | order(_createdAt desc)[0...4]{
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
        },
        "likeCount": count(likedBy)
    }`
    return query
}

export const getOldestCourses = () => {
    const query = `*[_type == "course" ] | order(_createdAt asc)[0...4]{
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
        },
        "likeCount": count(likedBy)
    }`
    return query
}

export const getTopCourses = () => {
    const query = `*[_type == "course" && (count(reviews[]) > 0)][0...4]{
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
        },
        "likeCount": count(likedBy)
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
        },
        "likeCount": count(likedBy)
    }`
    return query;
}