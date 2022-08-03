import { products,addProduct } from './products/product.service';
import {faker} from '@faker-js/faker';


for (let index = 0; index < 50; index++) {

  addProduct(
    {
      description: faker.commerce.productDescription(),
      color: faker.color.human(),
      image: faker.image.imageUrl(),
      isNew: faker.datatype.boolean(),
      tags: faker.helpers.arrayElements(),
      price: parseInt(faker.commerce.price(),10),
      title: faker.commerce.productName(),
      stock: faker.datatype.number({min: 10, max:100}),
      size: faker.helpers.arrayElement(['S','M','L','XL']),
      categoryID: faker.datatype.uuid()
    }
  )
}

console.log(products);
