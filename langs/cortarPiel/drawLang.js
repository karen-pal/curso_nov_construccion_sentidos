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
//console.log(X1,Y1)
let X2 = canvas.width/2;
let Y2 = canvas.width/2-size;
//console.log(X2,Y2)
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
function mostrar(str, color, amount) {
    console.log("executing:>> mostrar("+str+")")
    console.log(str)
    let counter = amount;
    while (counter >0) {
        setTimeout(draw, 600/counter, color, counter)
        counter = counter-1;
    }

}
let profundidadLastimadura=100;
function mostrarLastimadura(x,y) {
    let i= initialPos;
    let f = finalPos;
    console.log(i,f)
    while (profundidadLastimadura <110) {
        setTimeout(drawShape, 600/profundidadLastimadura, i, f)
        
        profundidadLastimadura = profundidadLastimadura+1;
        console.log(profundidadLastimadura)
        i.x = i.x-1;
        f.x = f.x-1;
        console.log("call")
    }

}
function concatenar(s1,args1, s2, args2){
    s1(args1);s2(args2)
}
function pulse(sentence,color){
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
function drawShape( initialPos, finalPos) {
    ctx.globalAlpha = 0.1
    let xoff, yoff;
    xoff = finalPos.x-100;
    yoff = finalPos.y-100;
  ctx.beginPath();
  ctx.moveTo(initialPos.x, initialPos.y);//261 + xoff, 56 + yoff);
  ctx.bezierCurveTo(336 + xoff, 272 + yoff, 281 + xoff, 442 + yoff, 265 + xoff, 437 + yoff);
  ctx.moveTo(initialPos.x, initialPos.y);//261 + xoff, 56 + yoff);
  ctx.bezierCurveTo(135 + xoff, 272 + yoff, 281 + xoff, 442 + yoff, 265 + xoff, 437 + yoff);
  ctx.stroke();
  var grad = ctx.createLinearGradient(initialPos.x, initialPos.y, finalPos.x, finalPos.y);
     // var grad = ctx.createLinearGradient(initialPos.x, initialPos.y/2, 265+finalPos.x, 437+finalPos.y/2);

  
  grad.addColorStop(1, 'rgba(20, 0, 0, 1)');
  grad.addColorStop(0, 'rgba(93, 3, 11, 1)');
  

      ctx.setTransform(1,0,0,0.55,0,0);


  ctx.fillStyle = grad;

  ctx.fill();
}
function drawText(ctx, tree) {
    ctx.font = "150px Helvetica";


        ctx.fillStyle =  'rgba(20, 0, 0, 1)';//rgba();
        var lineheight = 15;
        var lines = tree.split(' ');
        var x = 100;
        var y = 200;
        for (var i = 0; i<lines.length; i++){
            ctx.fillText(lines[i], x+ (i*lineheight*10), y + (i*lineheight*10) );
            mostrarLastimadura(x+ (i*lineheight*10), y + (i*lineheight*10))
        }
        //ctx.fillText(tree, 100,200);//x + 10, y + 10); // draw rainbow text
    //}
    //timeout = window.requestAnimationFrame(animate, 0, ctx,n,endpos,startpos);
}

//execute a program
function execute(program){
    ctx.lineWidth = 1;
    let sentences = program.split(";");
    let interval;
    for (const idx in sentences){
        // syntax:
        // S :: = mostrar csscolor  
        //      | y adentro (mostrar color2)
        //      | mover x1 y1 x2 y2
        //      | adentro string1 
        let sentence = sentences[idx];
        drawHistory(sentence);
        //adentro de (mostrar color2 amount)
        if (sentence.includes("y adentro (")) {
            let innerSentence = sentence.split("(")[1].replace(")","");
            let tokens = innerSentence.split(" ") 
            positionModif += 10;
            startingPosition +=10;
            mostrar(sentence, tokens[1],tokens[2]);

        }
        // cortar
        else if (sentence.includes("mostrar")) {
            let tokens = sentence.split(" ");
            positionModif = 0;
            mostrar(sentence, tokens[1], 1);
        }
        else if (sentence.includes("adentro")) {
            drawText(ctx,sentence);
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
