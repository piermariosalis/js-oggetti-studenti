//Istruzioni:
//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
//Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// Definisco una variabile contenente un oggetto
// che descrive le caratteristiche di uno studente.

var student = {
    firstName : "Genoveffo",
    lastName : "Bronzoimmane",
    age : 20
}

//console.log(student);


// Con ciclo for stampo nel markup le proprietà sopra definite.

for (var data in student) {
   
    var data =
        `
            <div id="scheda">
                
                <h3>${student.firstName}</h3>
        
                <h3>${student.lastName}</h3>
            
                <h3>${student.age}</h3>

            </div>
            
            `
    
    document.getElementById('scheda').innerHTML = ('beforeend', data );

}

// Creo un array contenente oggetti di studenti

var students = [
    
    {
        name: "Zack",
        lastName: "de la Rocha",
        age: 50
        
    },
    
    {
        name: "Peter",
        lastName: "Gabriel",
        age: 70
    },
    
    {   name: "Chino",
        lastName: "Moreno",
        age: 47
        
    }
   
]