export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'user' },
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
          name: 'blogCategory',
          title: 'Blog Category',
          type: 'reference',
          to: { type: 'blogCategory' },
        },
        {
            title: 'Launch Scheduled At',
            name: 'launchAt',
            type: 'datetime',
            options: {
              dateFormat: 'YYYY-MM-DD',
              timeFormat: 'HH:mm',
              timeStep: 15,
              calendarTodayLabel: 'Today'
            }
          }
    ]
}