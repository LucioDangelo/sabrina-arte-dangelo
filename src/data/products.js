const products = [
    {
        name: 'Logo Chico',
        price: 100,
        stock: 10,
        id: 1,
        img: 'https://i.imgur.com/XwU2kEn.png',
        category: 'logo',
        description: 'a1',
    },
    {
        name: 'Logo Mediano',
        price: 200,
        stock: 11,
        id: 2,
        img: 'https://i.imgur.com/PSr4gWl.png',
        category: 'logo',
        description: 'a1',
    },
    {
        name: 'Logo Grande',
        price: 300,
        stock: 12,
        id: 3,
        img: 'https://i.imgur.com/6Fxmbz5.png',
        category: 'logo',
        description: 'a1',
    },
    {
        name: 'Ilustracion 1',
        price: 400,
        stock: 13,
        id: 4,
        img: 'https://i.imgur.com/7KlqSey.png',
        category: 'ilustracion',
        description: 'a1',
    },
    {
        name: 'Ilustracion 2',
        price: 500,
        stock: 14,
        id: 5,
        img: 'https://i.imgur.com/ap6tuLx.png',
        category: 'ilustracion',
        description: 'a1',
    },
    {
        name: 'Redes Sociales',
        price: 600,
        stock: 15,
        id: 6,
        img: 'https://i.imgur.com/nddwxYB.png',
        category: 'socialmedia',
        description: 'a1',
    },
];

export const traerProductos = (parametro) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter(
            (producto) => producto.category === parametro
        );
        setTimeout(() => {
            if (parametro === undefined) {
                resolve(products);
            } else {
                resolve(productosFiltrados);
            }
        }, 2000);
    });
};

const productExample = {
    name: 'Posteos para Redes Sociales',
    price: 600,
    stock: 5,
    id: 6,
    img: 'https://www.turiaprint.es/wp-content/uploads/2020/08/diseno_grafico.jpg',
    category: 'socialmedia',
    description: 'a1',
};

export const traerProducto = (parametro) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter(
            (producto) => producto.id === parseInt(parametro)
        );
        console.log(productosFiltrados);
        setTimeout(() => {
            if (parametro === undefined) {
                resolve(productExample);
            } else {
                resolve(productosFiltrados);
            }
        }, 2000);
    });
};