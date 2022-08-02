(() => {
    /*********** number *************
     NaN it will be use as numbers
     Hex is use as numbers (0b1010)
    */
    let productPrice: number = 100;
    productPrice = productPrice + 50;
    console.log(productPrice);

    if(productPrice == 150) {
        console.log('It is ok!');
    }

    let newPrice = parseInt('125');
    productPrice = newPrice;

    console.log('New price is:' , newPrice);

    let errorPrice = parseInt('Text');

    if(errorPrice <= productPrice) {
        console.log('No error in price');
    }
    else {
        console.log('Error. Possible NaN');
    }

    let hex = 0b1010;
    console.log('Hex to dec:', hex);
})();