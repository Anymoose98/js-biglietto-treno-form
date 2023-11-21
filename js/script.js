const button = document.querySelector("button");
// bottone
button.addEventListener("click", function(){
    
    let nome = document.getElementById("nome").value;
    console.log(nome)

    let cognome = document.getElementById("cognome").value;
    console.log(cognome)

    let km = document.getElementById("km").value;
    console.log(km)

    let eta = document.getElementById("eta").value;
    console.log(eta)

    let prezzo = (km * 0.21)
    console.log(prezzo)

    if(eta < 18){
        prezzo = (prezzo * 0.8)
        prezzo = prezzo.toFixed(2)
        console.log(prezzo)    
    }

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

    document.getElementById("cognome2").innerHTML = document.getElementById("cognome2").innerHTML + cognome
    document.getElementById("nome2").innerHTML = document.getElementById("nome2").innerHTML + nome

    document.getElementById("costo").innerHTML = document.getElementById("costo").innerHTML + "Costo biglietto:"
    document.getElementById("prezzo").innerHTML = document.getElementById("prezzo").innerHTML + prezzo

    document.getElementById("carrozza").innerHTML = document.getElementById("carrozza").innerHTML + "Carrozza"
    document.getElementById("n-carrozza").innerHTML = document.getElementById("n-carrozza").innerHTML + "278438"
    

})

