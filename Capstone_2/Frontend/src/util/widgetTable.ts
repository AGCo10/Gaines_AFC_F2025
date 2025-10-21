
interface Widget {
    imageURL: string;
    name: string;
    description: string;
    price: number;
    rating: number;
}

export const widgetTable: Widget[] = [
    {
        imageURL: '#',
        name: 'Test Widget 1',
        description: 'Test Widget #1.',
        price: 14.99,
        rating: 4.5
    },
    {
        imageURL: '#',
        name: 'Test Widget 2',
        description: 'Test Widget #2.',
        price: 12.99,
        rating: 4.0
    },
    {
        imageURL: '#',
        name: 'Test Widget 3',
        description: 'Test Widget #3.',
        price: 11.99,
        rating: 5.0
    }
];