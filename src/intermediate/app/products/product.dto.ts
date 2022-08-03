import {Product} from './product.model';

// Create DTO
export interface CreateProductDto extends Omit<Product, 'id' | 'createadAt' | 'updatedAt' | 'category'> {
  categoryID: string,
}


// Pick is the opposite of Omit
type example = Pick<Product, 'color' | 'description'>
