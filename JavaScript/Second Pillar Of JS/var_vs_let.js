/* reference link : https://developer.mozilla.org/en-US/docs/Glossary/Scope
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

*/
let name1=0xa;
let name10 = 1e9;
let name2 = 101, name3 = 102;
let name11, name21 = 112;
let name121 = 91, name211, /* …, */ nameN = 1100;

console.log(name1, name10, name2, name3, name11, name21, name121, name211, nameN);;
// 10 1000000000 101 102 undefined 112 91 undefined 1100