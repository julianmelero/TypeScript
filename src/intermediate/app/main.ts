import { products } from './products/product.service';


products.push(
  {
    id: '1',
    title: 'p1',
    createadAt: new Date(),
    updatedAt: new Date(),
    stock: 20,
    size: 'L',
    category: {
      id: '12',
      createadAt: new Date(),
      updatedAt: new Date(),
      name: 'c1'
    }
  }
)
