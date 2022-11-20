//language functions and specs
let shapes = ["cuadrado"];
let positions = ["adentro de"];
let colors = ["red", "blue"];

//execution state logic
let positionModif = 0;
let startingPosition = 0;
let X1 = 20;
let Y1 = 20;
let X2 = 400;
let Y2 = 350;
function draw(color,counter){
    let canvas = document.getElementById("canvas")
    let ctx = canvas.getContext("2d");
    ctx.beginPath();

    //ctx.globalAlpha = 0.5
    ctx.strokeStyle=color;
    ctx.rect(
        X1+counter*2,
        Y1+counter*2,
        X2-positionModif-startingPosition,
        Y2-positionModif-startingPosition
    );
    ctx.stroke();

}
function mostrar(str, shape, color, amount) {
    console.log("executing:>> mostrar("+str+")")
    console.log(str)
    let counter = amount;
    while (counter >0) {
        setTimeout(draw, 600/counter, color, counter)
        counter = counter-1;
    }

}
function concatenar(s1,args1, s2, args2){
    s1(args1);s2(args2)
}
function pulse(sentence,shape,color){
    if (positionModif > 20) {
        positionModif = 10;
    } else {
        positionModif += 1;
    }
    draw(color, 1)
}

//what executing a program means
function execute(program){
    let sentences = program.split(";");
    let interval;
    for (const idx in sentences){
        // syntax:
        // S :: = mostrar cuadrado color1  
        //      | y adentro (mostrar cuadrado color2)
        //      | mover x1 y1 x2 y2
        let sentence = sentences[idx];
        let result = document.getElementById("result");
        result.innerHTML += "<div>"+sentence+"</div>";
        //adentro de (mostrar cuadrado color2 amount)
        if (sentence.includes("y adentro (")) {
            let innerSentence = sentence.split("(")[1].replace(")","");
            let tokens = innerSentence.split(" ") 
            positionModif += 10;
            startingPosition +=10;
            mostrar(sentence, tokens[1],tokens[2], tokens[3]);

        }
        // mostrar cuadrado color1
        else if (sentence.includes("mostrar")) {
            let tokens = sentence.split(" ");
            positionModif = 0;
            mostrar(sentence, tokens[1], tokens[2], 1);
        }
        //mover x1 y1 x2 y2
        else if (sentence.includes("mover")) {
        // all sentences not in lang
            let tokens = sentence.split(" ");
            X1 = tokens[1];
            Y1 = tokens[2];
            X2 = tokens[3];
            Y2 = tokens[4];
        }
        else {
            console.log("ERROR: ORACION NO EN EL LENGUAJE");
            console.log(sentence);
        }
    }
}
