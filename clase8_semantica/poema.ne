@{%
	// Moo lexer documention is here:
	// https://github.com/no-context/moo

	const moo = require("moo")
	const lexer = moo.compile({
	  ws:     /[ \t]+/,
	 	prep: ["como", "sobre", "cubierto de"],
	  sust : ["una hoja de loto", "gotas de rocio", "el arbol muerto"],
	  verbo: ["desaparezco","florece","al cabo cae"],
      sep: "#",
      NL:      { match: /\n/, lineBreaks: true },
	});
%}

# Pass your lexer with @lexer:
@lexer lexer


MAIN -> VERSO %sep VERSO %sep VERSO
VERSO -> PREPSUST | VERBO
PREPSUST
    -> %prep %ws %sust  {%
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
                        %}
VERBO
    -> %verbo {%
                ([first]) => {
                        return {
                            verb:first.value,
                            type: first.type,
                            len:first.value.length
                            }
                    }
                %}


