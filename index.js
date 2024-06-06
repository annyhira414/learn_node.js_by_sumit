
console.log(global);

const people = require('./people') 
//  file access 
const _ = require('lodash');
// jodi kono external module add  korbo .  . 
console.log(people.personName);
console.log(people.s);
// using lodash 
console.log(_.last(people.personName));