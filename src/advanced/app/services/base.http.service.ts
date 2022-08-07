import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import axios from 'axios';
import { updateProductDto } from '../dtos/product.dto';

export class BaseHttpService<TypeClass> {

  constructor(
    private url: string
  ) {}

  async getAll() {
    const {data} = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID,DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}


/*const service = new BaseHttpService<string>();
service.getAll();

const service2 = new BaseHttpService<Category>();
service2.getAll();*/

const url1 = 'http://api.escuelajs.co/api/v1/products';
const productsService = new BaseHttpService<Product>(url1);

productsService.getAll();

productsService.update<Product['id'], updateProductDto>(1, {
  title: 'New!'
})
