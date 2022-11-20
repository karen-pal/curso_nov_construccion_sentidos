var r,g,b;
r=0;
b=0;
g=0;
const canvas = document.getElementById("dibujo");
const ctx = canvas.getContext('2d');
//const canvasAST = document.getElementById("ast");
//const ctxAST = canvas.getContext('2d');
//const canvasN = document.getElementById("neblina");
//const ctxN = canvas.getContext('2d');
const white = "rgba(200,200,200,.1)";

const draw = function (canvas,ctx, w, h, ast) {
        var x = w/2,
        y = h/2,
        // Radii of the white glow.
        innerRadius = 15,
        outerRadius = 270,
        // Radius of the entire circle.
        radius = 260 + 10* b;

        if (ast !== undefined) {    //ingreso de un poema

            let verso1 = ast[0][0]
            let verso2 = ast[2][0]
            let verso3 = ast[4][0]
            let versos = [verso1,verso2,verso3];
            //console.log("versos:", versos);
            let color;
            for(const verso of versos) {
                if (verso.type === "verbo"){
                  let r = verso.len;
                  //console.log(r*10) 
                  color = "rgba("+(r*10).toString()+",100,"+(r*100).toString()+",.1)";
                  innerRadius += 200;
                } else {
                  r = verso.lenSust;
                  g = verso.lenPrep;
                  b = verso.len;
                  color = "rgba("+(r*40).toString()+","+(g*30).toString()+","+(b*10).toString()+",.5)";
                }
                var gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
                gradient.addColorStop(0, "white");
                gradient.addColorStop(1, color);

                ctx.arc(x, y, radius, 0, 2 * Math.PI);

                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }
    r++;g++;b++

}
let i = 0;
const neblina=(canvas,ctx, sinModif) => {
    if (i>.2){ //densidad de la neblina
        i=0;
    }
    ctx.fillStyle = "rgba(200,200,200,"+ i.toString()+")";
    //ctx.fillRect(Math.abs(Math.sin(i))*1000,0, canvas.width,canvas.height);
    ctx.fillRect(0,0, canvas.width,canvas.height);
    i = i+.01;
    r++;g++;b++
}
setInterval(neblina,100, canvas,ctx, .01); // llenar con neblina
//setInterval(draw,100,canvasAST,ctxAST); // llenar con neblina
const drawPoem = (astRaw) =>
{
    let ast = astRaw;
    draw(canvas,ctx, canvas.width,canvas.height, ast); //interpretar un programa
}
function animate(ctx,n,endpos,startpos, tree) {
    ctx.font = "50px Helvetica";


        ctx.fillStyle = "blue";//rgba();
        var lineheight = 15;
        var lines = tree.split('\n');
        var x = 100;
        var y = 200;
        for (var i = 0; i<lines.length; i++){
            ctx.fillText(lines[i], x+ (i*lineheight), y + (i*lineheight) );
        }
        //ctx.fillText(tree, 100,200);//x + 10, y + 10); // draw rainbow text
    //}
    //timeout = window.requestAnimationFrame(animate, 0, ctx,n,endpos,startpos);
}

const drawTree = (tree) =>
{
    let n = 100;
    let endpos = 1000;
    let startpos = 10;
    animate(ctx,n,endpos,startpos, JSON.stringify(tree,null,2));

}
