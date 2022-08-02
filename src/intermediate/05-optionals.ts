// ?? nullish-coalescing: when we have problems with || operator

export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    /*stock: stock || 10, // Problem with 0
    isNew: isNew || true // Problem with false*/
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

const p1 = createProduct(1,true,50);
console.log(p1);


const p2 = createProduct(1);
console.log(p2);
