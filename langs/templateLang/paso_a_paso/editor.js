//editor
//support enter to execute
document.getElementById("exec")
        .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("myButton").click();
        }
    });
//text editor logic
function buttonCode()
{
    let program = document.getElementById("exec").value;
    let data = {element: program};
    //mostrar(program);
    execute(program);
}
