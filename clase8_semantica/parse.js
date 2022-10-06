const nearley = require("nearley");
const grammar = require("./poem.js"); //  <---- gramática generada con nearly! para modificar, modificar poema.ne y seguir instrucciones del readme!
const fs = require('fs')
const path = require('path')

// Create a Parser object from our grammar.
function parse(palabras) {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

    // Parse something!
    try {
        parser.feed(palabras); //"como gotas de rocío#sobre una hoja de loto#desaparezco"
        // parser.results is an array of possible parsings.
        const ast = parser.results[0];
        return ast;
    } catch (e) {
        console.log(e);
    }
}

//let poema = "como gotas de rocío#sobre una hoja de loto#desaparezco";
//parse(poema)
module.exports = parse
