import { log1, log2} from './log.js';

let test = 'test working';

function testing() {
    // test local function
    console.log(test);
}

testing();

// test import function
log1();
log2();
