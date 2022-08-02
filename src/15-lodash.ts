// USING TS IN NON COMPATIBLE TS LIBS
// npm i --save-dev @types/lodash

import _ from 'lodash';

const data = [
    {
        username: 'julian',
        role: 'admin'
    },
    {
        username: 'valentina',
        role: 'saller'
    },
    {
        username: 'zulema',
        role: 'seller'
    },
    {
        username: 'santiago',
        role: 'costumer'
    }
];


console.log(_.groupBy(data, (item) => item.role));
