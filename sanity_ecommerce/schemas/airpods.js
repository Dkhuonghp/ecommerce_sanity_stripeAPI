export default {
    name: 'airpods',
    title: 'AirPods',
    type: 'document',

    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        { 
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        { 
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
            source: 'name',
            maxLength: 90,
            }
        },
        { 
            name: 'price',
            title: 'Price',
            type: 'number',
        },
    ]
}