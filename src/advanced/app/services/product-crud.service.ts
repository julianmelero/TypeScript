import { BaseHttpService } from "./base.http.service";
import { Product } from '../models/product.model';
import { updateProductDto } from "../dtos/product.dto";
import { ProductHttpService } from "./product-http2.service";


export class ProductCRUDService {
  private url: string = 'http://api.escuelajs.co/api/v1/products';

  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], dto: updateProductDto) {
    return this.http.update(id, dto);
  }

}
