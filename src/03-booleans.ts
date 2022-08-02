(() => {
    /******** Booleans *********/
    let isEnable: boolean;
    isEnable = true;
    console.log(isEnable);

    const random = Math.random();
    console.log('Random number',random);
    isEnable = random >= 0.5 ? true: false;
    console.log(isEnable);
})();