(() => {
    /************* Objects ************/

    
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Product = {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes // ? to optional
    };


    const products: Product[] = [];

    const addProduct = (
        data: Product
    ) => {
        products.push(data);
    }

    addProduct({
        title: 'P1',
        createdAt: new Date(),
        stock: 12,        
    });

    addProduct({
        title: 'P2',
        createdAt: new Date(),
        stock: 10,
        size: 'M'
    });
    console.log(products);    
    products.push({
        title: 'P3',
        createdAt: new Date(),
        stock: 20,
        size: 'L'
    });

    console.log(products);

})();