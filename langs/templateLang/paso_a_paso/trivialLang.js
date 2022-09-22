
//what executing a program means
function execute(program){
    let sentences = program.split(";");
    let words = program.split(" ");
    console.log(words);
    let interval;
    for (const idx in sentences){
        let sentence = sentences[idx];
        console.log(sentences, sentence, idx);
        let result = document.getElementById("result");
        result.innerHTML += "<div>"+sentence+"</div>";
    }
}
