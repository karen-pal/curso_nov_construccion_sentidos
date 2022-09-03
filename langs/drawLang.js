//language functions and specs
let shapes = ["cuadrado"];
let positions = ["adentro de"];
let colors = ["red", "blue"];

//execution state logic
let positionModif = 0;

function mostrar(str, shape, color) {
    console.log("executing:>> mostrar("+str+")")
    console.log(str)
    let result = document.getElementById("result");
    result.innerHTML += "<div>"+str+"</div>";
    let canvas = document.getElementById("canvas")
    let ctx = canvas.getContext("2d");
    ctx.beginPath();

    //ctx.globalAlpha = 0.5
    ctx.strokeStyle=color;
    ctx.rect(20,20,150-positionModif,100-positionModif);
    ctx.stroke();

}
function concatenar(s1,args1, s2, args2){
    s1(args1);s2(args2)
}

//execute a program
function execute(program){
    let sentences = program.split(";");
    for (const idx in sentences){
        // syntax:
        // S :: = mostrar cuadrado color1  
        //      | y adentro (mostrar cuadrado color2)
        let sentence = sentences[idx];
        //adentro de (mostrar cuadrado color 2)
        if (sentence.includes("y adentro (")) {
            console.log("y adentro");
            let innerSentence = sentence.split("(")[1].replace(")","");
            let tokens = innerSentence.split(" ") 
            positionModif += 10;
            mostrar(sentence, tokens[1],tokens[2]);

        }
        // mostrar cuadrado color1
        else if (sentence.includes("mostrar")) {
            let tokens = sentence.split(" ");
            positionModif = 0;
            mostrar(sentence, tokens[1], tokens[2]);
        }
        // all sentences not in lang
        else {
            console.log("ERROR: ORACION NO EN EL LENGUAJE");
            console.log(sentence);
        }
    }
}
