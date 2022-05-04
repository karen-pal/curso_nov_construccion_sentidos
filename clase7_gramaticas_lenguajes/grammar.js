// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["PREP", "_", "SUST", {"literal":"\n","pos":10}, "PREP", "_", "SUST", {"literal":"\n","pos":18}, "VERBO"]},
    {"name": "PREP$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREP", "symbols": ["PREP$string$1"]},
    {"name": "PREP$string$2", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"b"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREP", "symbols": ["PREP$string$2"]},
    {"name": "SUST$string$1", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"a"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"j"}, {"literal":"a"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUST", "symbols": ["SUST$string$1"]},
    {"name": "SUST$string$2", "symbols": [{"literal":"g"}, {"literal":"o"}, {"literal":"t"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"o"}, {"literal":"c"}, {"literal":"í"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUST", "symbols": ["SUST$string$2"]},
    {"name": "VERBO$string$1", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"s"}, {"literal":"a"}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"z"}, {"literal":"c"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBO", "symbols": ["VERBO$string$1"]},
    {"name": "_", "symbols": [{"literal":" ","pos":52}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
