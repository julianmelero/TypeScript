import { Product } from './product.model';
import {CreateProductDto} from './product.dto';
import {faker} from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto):Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createadAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryID,
      name: faker.commerce.department(),
      createadAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: string, changes: Product) => {
  //
}

export const deleteProduct = (id: string, changes: Product) => {
  //
}


export const getProduct = (id: string) => {
  //
}


export const searchProduct = (id: string) => {
  //
}

