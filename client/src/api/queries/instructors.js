export const getInstructors = () => {
    const query = `*[_type == "user"]{
        "orders": *[_type=='order' && references(^._id)],
      }`
    return query;
}