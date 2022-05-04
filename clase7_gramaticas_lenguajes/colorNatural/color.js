const nearley = require("nearley");
const grammar = require("./colNat.js");

//cli
const readlineSync = require('readline-sync');
const  chalk  = require('chalk');

console.log(chalk)
let parser; 
/*
 *
 *
 *

    function([data]) {
            if (data === "rojo") {
            return {
                hue: 0,
                saturation: 100,
                lightness: 50
            };
            } else if ( data === "azul") {

                return {
                    hue: 240,
                    saturation: 100,
                    lightness: 50
                };
            }
            else {

                return {
                    hue: 120,
                    saturation: 100,
                    lightness: 50
                };
            }
        }
 * 
 *
 * */
// Read color from console

function converter(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
while (true) { 
    const color = readlineSync.question('Please write a : \n');
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar),{ keepHistory: true });
        parser.feed(color);
        let res = parser.results[0][0][0][0]
    //>:  [ { d1: [ [Array] ], hue: 0, saturation: 150, lightness: 50 } ]
    //  
    console.log(res[0]);
    console.log(res[0].hue,res[0].saturation,res[0].lightness);
        let colorrgb = converter(res[0].hue,res[0].saturation,res[0].lightness);
        console.log(colorrgb);
        let colorify = chalk.rgb(colorrgb[0],colorrgb[1],colorrgb[2]);
        console.log(colorify(">: ", parser.results[0][0]));
}
