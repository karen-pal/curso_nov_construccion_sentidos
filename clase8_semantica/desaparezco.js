        document.getElementById("exec_tree")
            .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("myButton").click();
            }

        });
        var r,g,b;
        r=0;
        b=0;
        g=0;
        const canvas = document.getElementById("dibujo");
        const ctx = canvas.getContext('2d')
        const white = "rgba(200,200,200,.1)"
        const clock = function (ctx, w, h, ast) {
                var x = w/2,
                y = h/2,
                // Radii of the white glow.
                innerRadius = 15,
                outerRadius = 270,
                // Radius of the entire circle.
                radius = 260 + 10* b;

                if (ast === undefined) {    //avance natural del tiempo
                    console.log(r,ctx);
                    ctx.fillStyle = white;
                    ctx.fillRect(0,0, canvas.width,canvas.height);
                } else {                    // ingreso de un poema
                    let verso1 = ast[0][0]
                    let verso2 = ast[2][0]
                    let verso3 = ast[4][0]
                    let versos = [verso1,verso2,verso3];
                    console.log("clock:", versos);
                    let color;
                    for(const verso of versos) {
                        if (verso.type === "verbo"){
                          let r = verso.len;
                          console.log(r*10) 
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

        setInterval(clock,100,ctx);
        const drawPoem = (astRaw) =>
        {
            let ast = JSON.parse(astRaw);
            clock(ctx, canvas.width,canvas.height, ast);
        }

        const buttonCodeTree = async () =>
        {
            let text = document.getElementById("exec_tree").value;
            let data = {element: text};
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
