(() => {
    /************* null and undefined *************/
    // TS and JS (latest version) use ?. to validate a type
    let myNumber: number | null;
    let myString: string;

    //myNumber = null; I can't do this
    let isNull: null;
    let isUndefined: undefined;

    myNumber = null;


    function hi(name: string | null) {
        let hello = 'Hello ';
        if(name) {
            hello+= name;
        } else {
            hello += 'nobody';
        }

        console.log(hello);
    }

    function hiv2(name: string | null) {
        let hello = 'Hello ';
        hello += name?.toLocaleLowerCase() || 'nobody';

        console.log(hello);
    }

    hi('Julián');
    hi(null);

    hiv2('Julián');
    hiv2(null);
})();