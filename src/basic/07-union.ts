(()=> {
    /*********** Union Types ***********/
    let userID: string | number;
    userID = 10;
    userID= '10';
    

    function greeting(MyText: string | number) {
        if(typeof MyText === 'string') {
            console.log(`string ${MyText.toLocaleLowerCase()}`);
        }
        else {
            console.log(MyText.toFixed(1));
        }
    }

    greeting('Text');
    greeting(25);

})();