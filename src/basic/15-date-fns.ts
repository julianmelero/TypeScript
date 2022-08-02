// USING EXTERNAL TYPESCRIPT LIBS

import { subDays, format } from 'date-fns';

const date = new Date(1998,1,28); // 0 = January 1= February

const rta = subDays(date, 30);
const str = format(rta, 'yyy/MM/dd');
console.log(str);