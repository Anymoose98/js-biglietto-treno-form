const button = document.querySelector("button");
// bottone
button.addEventListener("click", function(){
    // aggiungi nome 
    let nome = document.getElementById("nome").value;
   
    // aggiungi cognome
    let cognome = document.getElementById("cognome").value;
   
    // aggiungi km
    let km = document.getElementById("km").value;
    
    // aggiungi età
    let eta = document.getElementById("eta").value;
    
    // calcolo prezzo intero
    let prezzo = (km * 0.21)
    console.log(prezzo)

    // sconto minorenni 
    if(eta < 18){
        prezzo = (prezzo * 0.8)
        prezzo = prezzo.toFixed(2)
        console.log(prezzo)    
    }

    // sconto over 65
    else if(eta >= 65){
      prezzo = (prezzo * 0.6)
      prezzo = prezzo.toFixed(2)
      console.log(prezzo)      
    }

    else{
      prezzo = prezzo
      prezzo = prezzo.toFixed(2)
      console.log(prezzo)      
    }



    document.getElementById("cognome2").textContent = "Cognome: " + cognome;
    document.getElementById("nome2").textContent = "Nome: " + nome;

    document.getElementById("costo").textContent = "Costo biglietto:";
    document.getElementById("prezzo").textContent = prezzo + "€";

    document.getElementById("carrozza").textContent = "Carrozza:";
    document.getElementById("n-carrozza").textContent = "278438";
})

