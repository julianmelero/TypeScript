(() => {
    /************* Functions and objects **************/

    const login = (
        email: string,
        password: string
    ) => {
        console.log(email,password);
    }

    const loginV2 = (
        data: {
            email: string,
            password: number
        }
    ) => {
        console.log(data.email,data.password);
    }

    login('julian@hi.com','123456');
    
    loginV2( {
        email: 'julian@hi.com',
        password: 123456
    });

    const products: any = [];


    type Sizes = 'S' | 'M' | 'L' | 'XL';
    const addProduct = (
        data: {
            title: string,
            createdAt: Date,
            stock: number,
            size?: Sizes // ? to optional
        }
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



})();