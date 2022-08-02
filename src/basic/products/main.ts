import { addProduct, calcStock, products } from './product.service';

addProduct({
    name: 'P1',
    createdAt: new Date(),
    stock: 12,
});

addProduct({
    name: 'P2',
    createdAt: new Date(),
    stock: 10,
    size: 'M'
});


console.log(products);
const total = calcStock();
console.log(total);