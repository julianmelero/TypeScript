import {faker} from '@faker-js/faker';

import { Product } from '../models/product.model';
import {CreateProductDto, updateProductDto} from '../dtos/product.dto';

export class ProductMemoryService {
  private products: Product[] = [];

  create (data: CreateProductDto):Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryID,
        name: faker.commerce.department(),
        image: faker.image.imageUrl()
      }
    }
    return this.add(newProduct);
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  findOne(id: Product['id']) {
    return this.products.find(item => item.id === id);
  }

  update (id: Product['id'], changes: updateProductDto):Product {
    const index = this.products.findIndex(item => item.id == id);
    const prevData = this.products[index];
    return this.products[index] = {
      ...prevData,
      ...changes
    }
  }
}

