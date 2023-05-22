// Manipulando o DOM
//Recuperando um elemento pela Tag
let titulo = document.getElementsByTagName('li');
//console.log(titulo)

//Percorrendo
for (li of titulo){
    console.log(li)
}
 
// Alterando o valor
let count = 0;
const alteraParagrafo = () => {
    let paragrafo = document.getElementById("primeiroParagrafo");
    count +=1;
    paragrafo.innerText = `Alterando o parafrafo com DOM ${count}`
}

