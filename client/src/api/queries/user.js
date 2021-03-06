export const getMe = (userId) => {
    const query = `*[_type == "user" && _id == "${userId}"]{
        _id,
        _createdAt,
        firstName,
        lastName,
        avatar,
        email,
        description
    }`
    return query;
}

export const getUserLikedCourses = (userId) => {
    const query = `*[_type == "user" && _id == "${userId}"]{
        "userId": _id,
        likedCourses[]->{
            _id,
            title
        }
      }`
    return query;
}

export const getUserPurchasedCourses = (userId) => {
    const query = `*[_type == "user" && _id == "${userId}"]{
        "userId": _id,
        purchasedCourses[]->{
            _id,
          title,
          slug
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
            "likeCount": count(likedBy)
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
            "likeCount": count(likedBy)
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
    const query = `*[_type == "order" && userId == "${userId}"]{
        _createdAt, 
        _id,
        totalPrice, 
        lastName,
        firstName, 
        paymentMethod,
        shippingDetails,
        orderItems
      }`
    return query;
}

// export const getMyOrders = (userId) => {
//     const query = `*[_type == "user" && _id == "${userId}"]{
//         "orders": *[_type == "order" && userId == ^._id]{
//             _createdAt, 
//             _id,
//             totalPrice, 
//             lastName,
//             firstName, 
//             paymentMethod,
//             shippingDetails,
//             orderItems
//           }
//       }`
//     return query;
// }