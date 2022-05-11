        document.getElementById("exec_tree")
            .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("myButton").click();
            }

        });
        //interpolation
        function lerp(a, b, u) {
            return (1 - u) * a + u * b;
        }
        var Anim = { //animation settings
            'duration': 3000,
            'interval' : 10,
            'stepUnit' : 1.0,
            'currUnit' : 0.0
        }
        var r,g,b;
        r=0;
        b=0;
        g=0;
            const canvas = document.getElementById("dibujo");
            const ctx = canvas.getContext('2d')
        const clock = function (ctx, w, h, ast) {
                if (ast === undefined){
                    console.log(r,ctx);
                          ctx.fillStyle = "rgba(200,200,200,.1)";
                      ctx.fillRect(0,0, 1000,1000)
                } else {
                    let verso1 = ast[0][0]
                    let verso2 = ast[2][0]
                    let verso3 = ast[4][0]
                  let versos = [verso1,verso2,verso3];
                    console.log("clock:", versos);
                    for(const verso of versos) {
                        if (verso.type === "verbo"){
                          let r = verso.len;
                          console.log(r*10) 
                          ctx.fillStyle = "rgba("+(r*10).toString()+",200,200,.1)";
                    }else{
                        r = verso.lenSust;
                        g = verso.lenPrep;
                        b = verso.len;
                          console.log(r*10) 
                          console.log(b*10) 
                          console.log(g*10) 
                      ctx.fillStyle = "rgba("+(r*10).toString()+","+(g*30).toString()+","+(b*20).toString()+",.5)";
                    }
                      ctx.fillRect(verso.len, verso.len*20, verso.len*20+300, verso.len+500)}
        }
        r++;g++;b++
        }
        setInterval(clock,1000,ctx);
        const drawPoem = (astRaw) =>
        {
            let ast = JSON.parse(astRaw);
            clock(ctx, canvas.width,canvas.height, ast);
        }

        const buttonCodeTree = async () =>
        {
            let text = document.getElementById("exec_tree").value;
            let data = {element: text};
            console.log("Execccccccccc")
            return fetch("http://127.0.0.1:3000/exec", {
              method: "POST",
              headers: {'Content-Type': 'application/json'}, 
              body: JSON.stringify(data)
            }
            ).then(res => {
               return res.text();
            }).then(res=>drawPoem(res)).catch(function(error) {
              console.log(error);
            }).finally(()=>{console.log("finally");});

        }
