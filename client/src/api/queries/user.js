export const getMe = (userId) => {
    const query = `*[_type == "user" && _id == "${userId}"]{
        _id,
        _createdAt,
        firstName,
        lastName,
        avatar
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
            _id
          title,
        }
      }`
    return query;
}

export const getUserLikedCoursesDetails = (userId) => {
    const query = `*[_type == "user" && _id == "${userId}"]{
        "userId": _id,
        likedCourses[]->{
            _id,
            _updatedAt,
            _createdAt,
            title,
            price,
            slug, 
            mainImage,
            description,
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
            _updatedAt,
            _createdAt,
            title,
            price,
            slug, 
            mainImage,
            description,
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

export const getMyOrders = (userId) => {
    const query = `*[_type == "user" && slug.current == "${userId}"]{
        "orders": *[_type == "order" && userId == ^._id]{
            _createdAt, 
            _id,
            totalPrice, 
            lastName,
            firstName, 
            paymentMethod,
            shippingDetails,
            orderItems
          }
      }`
    return query;
}