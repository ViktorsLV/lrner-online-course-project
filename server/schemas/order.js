export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        {
            title: 'User',
            name: 'user',
            type: 'reference',
            to: [{ type: 'user' }],
            options: {
                disableNew: true,
            },
        },
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
            name: 'itemsPrice',
            title: 'Item Price',
            type: 'number',
        },
        {
            name: 'totalPrice',
            title: 'Total Price',
            type: 'number',
        },
        {
            name: 'paymentMethod',
            title: 'Payment Method',
            type: 'string',
        },
        {
            name: 'shippingDetails',
            title: 'Shipping Details',
            type: 'shippingDetails',
        },
        {
            name: 'paymentResult',
            title: 'Payment Result',
            type: 'paymentResult',
        },
        {
            name: 'orderItems',
            title: 'Order Items',
            type: 'array',
            of: [
                {
                    title: 'Order Item',
                    type: 'orderItem',
                },
            ],
        },
        {
            name: 'IsPaid',
            title: 'Is Paid',
            type: 'boolean',
        },
        {
            name: 'paidAt',
            title: 'Paid Date',
            type: 'datetime',
        },
        {
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
        },
    ],
};