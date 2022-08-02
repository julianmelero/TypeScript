(() => {
    /************ Alias **************/
    type UserID = string | number;
    let userID: UserID;


    function greeting(userId: UserID) {
        if(typeof userId === 'string') {
            console.log(`string ${userId.toLocaleLowerCase()}`);
        }
        
    }

    // Literal types
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    let shirtSize : Sizes;
    shirtSize= 'M';
    shirtSize= 'L';
    shirtSize = 'XL';
})();