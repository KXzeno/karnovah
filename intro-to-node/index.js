/* import * as fs from 'node:fs';

fs.copyFileSync('file1.txt', 'bruh.txt');
console.log('worked');
*/ 

// let superheroes = require("superheroes");
import superheroes from 'superheroes';
import supervillains from 'supervillains';

let mySuperheroName = superheroes.random();
console.log(mySuperheroName);
console.log(supervillains.random());
