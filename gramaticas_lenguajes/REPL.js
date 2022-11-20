
const nearley = require("nearley");
const grammar = require("./senryu.js");

//cli
const readlineSync = require('readline-sync');
const  chalk  = require('chalk');
while (true) { 
    const color = readlineSync.question('Please write a : \n');
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar),{ keepHistory: true });
        parser.feed(color);
        console.log(">: ", parser.results[0][0]);
}
//const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
//parser.feed("como gotas de rocío\nsobre una hoja de loto\ndesaparezco");
//console.log(JSON.stringify(parser.results)); // [[[[["foo"],"\n"]]]]


