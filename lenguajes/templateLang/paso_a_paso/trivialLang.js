
//what executing a program means
function execute(program){
    let sentences = program.split(";");
    //console.log(words);
    let interval;
    for (const idx in sentences){
        let sentence = sentences[idx];
        let words = program.split(" ");
        //console.log(sentences, sentence, idx);
        console.log(words);
        let result = document.getElementById("result");
        result.innerHTML += "<div>"+sentence+"</div>";
        if (sentence.includes("bien")){
            document.body.style.background = "red";
        }
        if (sentence.includes("mal")){
            document.body.style.background = "blue";
        }
    }
}
