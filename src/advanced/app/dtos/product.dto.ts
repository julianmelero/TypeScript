import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

// Create DTO
export interface CreateProductDto extends Omit<Product, 'id' |'category'> {
  categoryID: Category['id'],
}


// With partial we can send only partial of the params objects.
export interface updateProductDto extends Partial<CreateProductDto> {}
