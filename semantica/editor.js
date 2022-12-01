const firstverse = document.getElementById("exec_tree1");
const secverse = document.getElementById("exec_tree2");
const thirdverse = document.getElementById("exec_tree3");

const verses = [firstverse, secverse,thirdverse];

    verses.forEach(verse => verse.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myButton").click();
    }

}));





const buttonCodeTree = async () =>
{
    let text = document.getElementById("exec_tree1").value + "#" + document.getElementById("exec_tree2").value + "#"+ document.getElementById("exec_tree3").value;
    console.log(text);
    let data = {element: text};
    return fetch("http://127.0.0.1:3000/exec", {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(data, null, 2)
    }
    ).then(res => {console.log(res);
       return res.json();
    }).then(res=>{drawTree(res.table);drawPoem(res.result);}).catch(function(error) {
      console.log(error); 
    }).finally(()=>{console.log(" {∅} ");});

}
