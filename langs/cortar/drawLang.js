//language functions and specs
let shapes = ["cuadrado"];
let positions = ["adentro de"];
let colors = ["red", "blue"];

//execution state logic
let positionModif = 0;
let size = 100
let startingPosition = 0;
let X1 = 0; //canvas.width/2-size/2;
let Y1 = 0; //canvas.height/2-size/2;
console.log(X1,Y1)
let X2 = canvas.width/2;
let Y2 = canvas.width/2-size;
console.log(X2,Y2)
let ctx = canvas.getContext("2d");
function draw(color,counter){
    ctx.lineWidth = 1;
    ctx.beginPath();

    ctx.globalAlpha = 0.5
    ctx.strokeStyle=color;
    ctx.rect(
        X1+counter*2 ,
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
    counter = (counter+1) % 10;
    draw(color, 600/counter)
}
//setInterval(pulse,100);
function drawHistory(sentence){

        let result = document.getElementById("result");
        result.innerHTML += "<div>"+sentence+"</div>";
}
function drawLine(initialPos, finalPos){
    ctx.globalAlpha = 1;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 100;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(initialPos.x,initialPos.y);
    ctx.lineTo(finalPos.x,finalPos.y);
    ctx.stroke();
}

//execute a program
function execute(program){
    ctx.lineWidth = 1;
    let sentences = program.split(";");
    let interval;
    for (const idx in sentences){
        // syntax:
        // S :: = mostrar cuadrado color1  
        //      | y adentro (mostrar cuadrado color2)
        //      | mover x1 y1 x2 y2
        let sentence = sentences[idx];
        drawHistory(sentence);
        //adentro de (mostrar cuadrado color2 amount)
        if (sentence.includes("y adentro (")) {
            let innerSentence = sentence.split("(")[1].replace(")","");
            let tokens = innerSentence.split(" ") 
            positionModif += 10;
            startingPosition +=10;
            mostrar(sentence, tokens[1],tokens[2], tokens[3]);

        }
        // cortar
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
