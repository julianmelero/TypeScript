import {Product} from './product.model';

// Create DTO
export interface CreateProductDto extends Omit<Product, 'id' | 'createadAt' | 'updatedAt' | 'category'> {
  categoryID: string,
}


// Pick is the opposite of Omit
type example = Pick<Product, 'color' | 'description'>


// With partial we can send only partial of the params objects.
export interface updateProductDto extends Partial<CreateProductDto> {}

// Required is the opposite
type example2 = Required<Product>;


export interface findProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}

type example3 = Readonly<Product>;
