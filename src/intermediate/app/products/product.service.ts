import { Product } from './product.model';
import {CreateProductDto, updateProductDto, findProductDto} from './product.dto';
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

export const updateProduct = (id: Product['id'], changes: updateProductDto):Product => {
  const index = products.findIndex(item => item.id == id);
  const prevData = products[index];
  return products[index] = {
    ...prevData,
    ...changes
  }

}

export const deleteProduct = (id: string, changes: Product) => {
  //
}


export const getProduct = (id: string) => {
  //
}


export const findProduct = (dto: findProductDto):Product[] => {
  return products;
}

