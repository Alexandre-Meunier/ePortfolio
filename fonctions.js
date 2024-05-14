const code = document.getElementById('code');
const inputBar = document.getElementById('inputBar');

const codeString1 = "Developer Alexandre_Meunier = new Developer('software');";
const codeString2 = "Alexandre_Meunier.AddPicture('img/picture');";
const codeStringTest = "/bDeveloper /wAlexandre_Meunier /r= new /bDeveloper('software')/w;";
const colorCode = {"b" : 'blue', "w" : 'white', "r" : 'red'}


function typeWriter(text, span) {
    return new Promise((resolve, reject) => {
        let i = 0;

        function type() {
            if (i < text.length) {
                const char = text.charAt(i);
                span.innerHTML += char;
                i++;
                setTimeout(type, 100);
            } else {

                resolve(true);
            }
        }

        type();
    });

}

/*let span = document.createElement("p");
span.classList.add("toWrite")
code.insertBefore(span, inputBar);

typeWriter(codeString1, span).then((result) => {
    let span = document.querySelector(".toWrite")
    span.innerHTML += "<br>"
    typeWriter(codeString2, span).then((result)=>{
    })
})*/


/*typeWriter(codeString2)
let span = document.createElement("span")
let img = document.createElement("img")
img.src="OIP (1).jpeg"*/



// Lui faire écrire dans chaque span après un antiSlash
/*
function typeWriter(text, speed) {

    let tab = createAllSpans(text)
    console.log(tab)

    for(let e=0;e<tab.length;e++){
        let i = 0;
        function type(string) {
            console.log(string, i)
            if (i < string.length) {
                const char = string.charAt(i);

                string.innerHTML += char;
                i++;
                setTimeout(type, speed);
            }
        }
        type(tab[e]);
    }

}

//typeWriter(codeStringTest, 100)

function createAllSpans(string) {

    // je veux faire un tableau après chaque \

    let tabString = string.split(/\/[a-zA-Z]/g)

    for(let i=0;i<string.length;i++){
        if(string[i] === "/"){
            let span = document.createElement("span");
            code.insertBefore(span, inputBar);
            i+=1;
        }
    }
    return tabString.slice(1,);
}

function removeExhaust(string) {
    return string.replace(/\\[a-zA-Z]/g, "");
}

*/




/*// Plutot créer tous les éléments à l'avance
// Ajouter des espaces en string entre chaque span
// Modifier la condition pour vérifier si il faut changer de span

function writerCodeTest(stringToPrint) {

    createAllSpans(stringToPrint)

    let bufferString = "";
    let timeBeforeWriting = 0;
    let childrensOfCode = code.children;
    let children = 0;
    let stringWithoutExhaust = removeExhaust(stringToPrint)

    // Pour chaque lettre
    for(let i = 0; i<stringWithoutExhaust.length; i++){

        (function (i) {

            // écrire la lettre i toute les 100 millisecondes
            setTimeout(function () {

                if(stringWithoutExhaust[i] === " ") {
                    bufferString = "";
                    children++;
                }
                bufferString += stringWithoutExhaust[i];
                childrensOfCode[children].textContent = bufferString;
                if(i === stringWithoutExhaust.length-1){
                    flashingInputBar(2, true)
                    // Faire en sorte d'ajouter une ligne en utilisant un br ou en créant un span
                }
            }, 100*i)
            //code.append(word)
        })(i)
    }
}

function createAllSpans(string) {
    for(let i=0;i<string.length;i++){
        if(string[i] === "\\"){
            let span = document.createElement("span");
            span.style.color = findExhaust(string[i+1]);
            code.insertBefore(span, inputBar);
            i+=2;
        }
    }
}

function removeExhaust(string) {
    return string.replace(/\\[a-zA-Z]/g, "");
}

function findExhaust(string) {
    return (colorCode[string])
}

function flashingInputBar(nbFlahsing, infinity)  {

    // condition si c'est dans le champ de vision

    if(infinity==null){
        infinity = false;
    }

    if(nbFlahsing<1){
        return 0
    }

    if(infinity){
        nbFlahsing += 1;
    }

    setTimeout(function () {
        inputBar.style.visibility="hidden"
    }, 500)
    setTimeout(function () {
        inputBar.style.visibility="visible"
    }, 1000)

    if(nbFlahsing>1){
        setTimeout(function () {
            flashingInputBar(nbFlahsing-1, infinity)
        },1000)
    }

    return 1000*nbFlahsing+250
}

function writerCode(stringToPrint, stop) {

    let bufferString = "";
    let nbWord = 0;
    let timeBeforeWriting =0;

    // Pour chaque lettre
    for(let i = 0; i<stringToPrint.length; i++){
        console.log(stringToPrint[i]);

        (function (i) {

            // écrire la lettre i toute les 100 millisecondes
            setTimeout(function () {
                if(stringToPrint[i] === " "){
                    nbWord += 1;
                }
                if(nbWord === stop){
                    timeBeforeWriting = flashingInputBar(2);
                    nbWord = stringToPrint.length;
                }
                setTimeout(function () {
                    bufferString += stringToPrint[i];
                    code.textContent = bufferString;
                    if(i === stringToPrint.length-1){
                        flashingInputBar(2, true)
                        // Faire en sorte d'ajouter une ligne en utilisant un br ou en créant un span

                    }
                }, timeBeforeWriting)
            }, 100*i)

            //code.append(word)
        })(i)
    }
}

//writerCodeTest(codeStringTest)*/