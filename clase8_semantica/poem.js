// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

	// Moo lexer documention is here:
	// https://github.com/no-context/moo

	const moo = require("moo")
	const lexer = moo.compile({
	  ws:     /[ \t]+/,
	 	prep: ["como", "sobre"],
	  sust : ["una hoja de loto", "gotas de rocío"],
	  verbo: "desaparezco",
      sep: "#",
      NL:      { match: /\n/, lineBreaks: true },
	});
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "MAIN", "symbols": ["VERSO", (lexer.has("sep") ? {type: "sep"} : sep), "VERSO", (lexer.has("sep") ? {type: "sep"} : sep), "VERSO"]},
    {"name": "VERSO", "symbols": ["PREPSUST"]},
    {"name": "VERSO", "symbols": ["VERBO"]},
    {"name": "PREPSUST", "symbols": [(lexer.has("prep") ? {type: "prep"} : prep), (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("sust") ? {type: "sust"} : sust)], "postprocess": 
        ([first,  , sec]) => {
                return {
                    type: "prepsust",
                    prep: first.value,
                    sust: sec.value,
                    lenPrep: first.value.length,
                    lenSust: sec.value.length,
                    len: first.value.length + sec.value.length
                    }
        }
                                },
    {"name": "VERBO", "symbols": [(lexer.has("verbo") ? {type: "verbo"} : verbo)], "postprocess": 
        ([first]) => {
                return {
                    verb:first.value,
                    type: first.type,
                    len:first.value.length
                    }
            }
        }
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
