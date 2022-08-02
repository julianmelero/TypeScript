(()=> {
    /*********** Any ***********/
    // Recommended not to use Any in general
    // Use any if you use to migrate code
    let DynamicVar: any;
    DynamicVar = 5;
    DynamicVar = 'Text';
    DynamicVar = {};
    DynamicVar = null;

    DynamicVar = "I'm a text";
    const text = (DynamicVar as string).toLocaleLowerCase();
    console.log(text);

    DynamicVar = 20;
    const price = (DynamicVar as number).toFixed();
    const price2 = (<number>DynamicVar).toFixed();
    console.log(price);
    console.log(price2);
})();