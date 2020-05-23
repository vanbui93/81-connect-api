var oldState =[
    {
        id: 1,
        name: "Iphone 6 Plus",
        price: 400,
        status: true
    },
    {
        id: 2,
        name: "Samsung galaxy S10",
        price: 300,
        status: true
    },
    {
        id: 3,
        name: "Oppo smartphone",
        price: 200,
        status: true
    }
];

const products = (state=oldState,action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products;