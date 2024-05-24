// Definišemo objekat koji mapira ključne reči sa linkovima
const linksMap = {
    'Home':'../index.html',
    'Prodaja': 'html/Prodaja.html',
    'Obuka': '#10',
    'Cesta pitanja': '#1',
    'Dokumentacija':'#11',
    'Cenovnik': '#12',
    'Biznis':'html/Biznis.html',
    'Energija':'html/Energija.html',
    'Canva/CapCut':'html/canva.html',
    'Reklame':'html/Reklame.html',
    'E-Book':'html/E-book.html',
    // Dodajte ostale ključne reči i njihove linkove ovde prema potrebi
};

const rezultat = document.querySelector(".rezultat");
const inputBox= document.getElementById("input-box");

inputBox.onkeyup=function(){
    let result=[];
    let input=inputBox.value;
    if(input.length){
        // Pretražujemo ključeve linksMap objekta umesto niza ključnih reči
        result = Object.keys(linksMap).filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);
    if(!result.length){
        rezultat.innerHTML='';
    }
}

function display(result){
    const content = result.map((keyword)=>{ 
        const link = linksMap[keyword] || 'https://fallbacklink.com'; // Uzimamo odgovarajući link iz linksMap objekta
        return "<li><a href='" + link + "'>" + keyword + "</a></li>";
    });
    
    rezultat.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(keyword){
    inputBox.value= keyword;
    rezultat.innerHTML='';
}
