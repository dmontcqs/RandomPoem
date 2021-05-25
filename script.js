
const getRandomPoem = () => {
    fetch('https://poetrydb.org/random')
    .then((response) => response.json())
    .then((poem) => {
        console.log(poem)
        const poemObject= {
            author: poem[0].author,
            title: poem[0].title,
            lines: poem[0].lines,
        
        };

        printPoem(poemObject)

    })
}; 

const printPoem = (poemObject) => {

    document.getElementById("output").innerHTML = 
    `
    <h1> ${poemObject.author} </h1>
    <h2> ${poemObject.title} </h2>
    <p> ${poemObject.lines.join('<br>')} </p> `

    // la siguiente línea agreega a div footer-container la clase "show-footer-container", esta responderá a la regla
    // "visible" que ya declaramos en CSS. 
    
    document.getElementById("footer-container").classList.add("show-footer-container"); 


}




