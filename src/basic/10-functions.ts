(() => {
    /************** Functions Part I ***************/
    // Use ? to optional parameters in a function

    type Sizes = 'S' | 'M' | 'L' | 'XL';

    function createProductToJson(
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes
    ) {
        return {
            title,
            createdAt,
            stock,
            size
        }
    }

    const  createProductToJsonV2 = (
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes // ? to optional
    ) => {
        return {
            title,
            createdAt,
            stock,
            size
        }
    }

    const product1 = createProductToJson(
        'P1',
        new Date(),
        20,
        'XL'
    );

    console.log(product1);
    console.log(product1.title);



    const product2 = createProductToJsonV2(
        'P2',
        new Date(),
        10,        
    );

    console.log(product2);
    console.log(product2.title);

})();