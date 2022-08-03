/* Interface works like type, but it has differences.
With interface we use objects in declaration instead direct declaration with primary types */

type Sizes = 'S' | 'M' | 'L' | 'XL';
/*type Product = {
  id: string | number,
  title: string,
  createadAt: Date,
  stock: number,
  size: Sizes
}*/

interface Product {
  id: string | number,
  title: string,
  createadAt: Date,
  stock: number,
  size: Sizes
}


const products: Product[] = [];

products.push(
  {
    id: '1',
    title: 'p1',
    createadAt: new Date(),
    stock: 20,
    size: 'L'
  }
)

const addProduct = (data: Product) => {
  products.push(data);
}
