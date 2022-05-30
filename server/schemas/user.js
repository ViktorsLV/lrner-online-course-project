export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'firstName',
        maxLength: 96,
      },
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'likedCourses',
      title: 'Liked Courses',
      type: 'array',
      of: [{
          type: 'reference',
          to: [{ type: 'course' }],
      }],
    },
    {
      name: 'purchasedCourses',
      title: 'Purchased Courses',
      type: 'array',
      of: [{
          type: 'reference',
          to: [{ type: 'course' }],
      }],
    },
  ],
  preview: {
    select: {
      title: 'firstName',
      media: 'avatar',
    },
  },
}
