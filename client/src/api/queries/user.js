export const getUserOrderDetails = () => {
    const query = `*[_type == "user"]{
        "orders": *[_type=='order' && references(^._id)],
      }`
    return query;
}

export const getUserOrdersList = (userId) => {
    const query = `*[_type == "user" && _id == "${userId}"]{
        "orders": *[_type == "order" && references(^._id)]{
            orderItems[]{
                _id
            }
        },
    }`
    return query;
}

export const getUserLikedCourses = (userId) => {
    const query = `*[_type == "user" && _id == "${userId}"]{
        "userId": _id,
        likedCourses[]->{
          title,
          _id
        }
      }`
    return query;
}

export const getUserPurchasedCourses = (userId) => {
    const query = `*[_type == "user" && _id == "${userId}"]{
        "userId": _id,
        purchasedCourses[]->{
          title,
          _id
        }
      }`
    return query;
}

export const getUserLikedCoursesDetails = (userId) => {
    const query = `*[_type == "user" && _id == "${userId}"]{
        "userId": _id,
        likedCourses[]->{
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
        }
      }`
    return query;
}

export const getUserPurchasedCoursesDetails = (userId) => {
    const query = `*[_type == "user" && _id == "${userId}"]{
        "userId": _id,
        purchasedCourses[]->{
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
        }
      }`
    return query;
}

export const getMyCourses = (userId) => {
    const query = `*[_type == "order" && user._ref == "${userId}"]{
        orderItems[]{
            _id
        }
    }`
    return query;
}