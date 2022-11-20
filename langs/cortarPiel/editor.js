//editor
//support enter to execute
document.getElementById("exec")
        .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("myButton").click();
            let inputText = document.getElementsByClassName('input')[0]
            inputText.style.display = "none";
        }
    });
//text editor logic
function buttonCode()
{
    let program = document.getElementById("exec").value;
    //console.log(program)
    //mostrar(program);
    execute(program);
}
//concatenar(mostrar,"hola",mostrar,"chau")
//
//
function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return {x:x,y:y}
}
let initialPos;
let finalPos;
const canvas = document.querySelector('canvas')
canvas.addEventListener('mousedown', function(e) {
    initialPos = getCursorPosition(canvas, e)
    //console.log("INITIAL x: " + initialPos.x + " y: " + initialPos.y)
})
canvas.addEventListener('mouseup', function(e) {
    finalPos = getCursorPosition(canvas, e)
    //console.log("FINAL x: " + finalPos.x + " y: " + finalPos.y)
    let i = 0;
    while (i<10){
        drawShape({x:initialPos.x+i*2,y:initialPos.y+1}, finalPos);
        i = i+1;
    }
 let inputText = document.getElementsByClassName('input')[0]
    if (inputText.style.display === "none"){
    inputText.style.display = "inline";
    }
})
