
function drawFlower(canvas, ctx, bin) {
    var adj = 3; 
    var t = 0.0;
    var radius = 300;
    adj = parseInt(bin); //audioreactive stuff
    console.log(bin, index, scale);
    const radians = deg => (deg * Math.PI) / 180.0; //degstorad
    let framecount=0;
    this.ctx.fillStyle = "rgba(10,5,10,.4)";
    this.ctx.fillRect(0, 0, canvas.width, canvas.height); 

    for (var i = 0; i < 360; i++) {
        var angle = Math.cos(radians(i * adj + t)) * radius;

        var x = canvas.width/ 2 + Math.sin(radians(i)) * angle;
        var y = canvas.height/2 + Math.cos(radians(i)) * angle;
        //console.log(x,y)
        //con elipses
        ctx.beginPath();
        ctx.strokeStyle= "rgba(50,"+(bin*50).toString()+", 50,.6)";
          if(parseInt(bin) % 3 === 0) {
        ctx.strokeStyle= "rgba("+(bin*50).toString()+","+(bin*50).toString()+","+(bin*50).toString() +",.6)";
          } else if (parseInt(bin) % 3 === 1) {
        ctx.strokeStyle= "rgba(0,0"+(bin*50).toString()+",.6)";

          } 
        ctx.ellipse(x, y, index*10*bin, index*10*bin, 0, 0, 2 * Math.PI);
        ctx.stroke();
        // o con cuadrados:
        //ctx.fillStyle="rgba(255, 0, 0,.05)";
        //ctx.fillRect(x, y, 50, 50); 
    }
    framecount++;
    t += .25;
}
