(()=> {
    /************ Function Void (Return) *************/
    // Use :<type> after parameters to explicit return function type
    // Use Void functions when you don't return or call other funtions without return
    const calcTotal = (
        prices: number[]
    ): number => {
       let total = 0;
        prices.forEach((item) => {
            total += item;            
        });
        return total;
    }

    // Function that not return: VOID
    const printTotal = (prices: number[]): void => {
        const rta = calcTotal(prices);
        console.log(rta);
    }
    
    const rta = calcTotal([1,2,1,1,1]);
    console.log(rta);
    printTotal([1,2,1,1,1]);
})();