import { ProductMemoryService } from './services/product-memory.service';


const productService = new ProductMemoryService();


productService.create({
  title: 'Product1',
  price: 75,
  description: 'This is product 1',
  categoryID: 20,
  images: []
});

const products = productService.getAll();
const productId = products[0].id;
productService.update(productId,
  {
    title: 'New Name'
  });

const rta = productService.findOne(productId);
console.log(rta);
