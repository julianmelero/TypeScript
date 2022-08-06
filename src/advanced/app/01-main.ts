import axios from "axios";
import { Product } from './models/product.model';

(async() => {

  let anyVar: any = 12;
  let boolVar: boolean = anyVar;

  async function getProducts():Promise<Product[]> {
    const rta = await axios.get<Product[]>('http://api.escuelajs.co/api/v1/products');
    //const rta = await axios.get('http://api.escuelajs.co/api/v1/products');
    //const data = rta.data as Product[]; // HEY! If library doesn't use before type
    const data = rta.data;
    data.map(item => item.category);
    return data;
  }

  const products = await getProducts();
  console.log(products.map(item => `${item.id} ${item.title}`));

})();
