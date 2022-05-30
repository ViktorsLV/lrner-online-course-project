export default {
    title: 'Order Item',
    name: 'orderItem',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'image',
            name: 'image',
            type: 'string',
        },
        {
            title: 'price',
            name: 'price',
            type: 'number',
        },
        //TODO: slug??
        //   {
        //     title: 'price',
        //     name: 'price',
        //     type: 'number',
        //   },
    ],
};