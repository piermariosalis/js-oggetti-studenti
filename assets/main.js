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
                
                <h3>${"Nome" + " " + ":" + " " + student.firstName}</h3>
        
                <h3>${"Cognome" + " " + ":" + " " +student.lastName}</h3>
            
                <h3>${"Età" + " " + ":" + " " +student.age}</h3>

            </div>
            
            `
    
    document.getElementById('scheda').innerHTML = ('beforeend', data );

}

// Creo un array contenente oggetti di studenti

var students = [
    
    {
        ArtistFirstName: "Zack",
        ArtistLastName: "de la Rocha",
        ArtistAge: 50
        
    },
    
    {
        ArtistFirstName: "Peter",
        ArtistLastName: "Gabriel",
        ArtistAge: 70
    },
    
    {   ArtistFirstName: "Chino",
        ArtistLastName: "Moreno",
        ArtistAge: 47
        
    }
   
]

// Creo un ciclo per gli oggetti contenuti nell'array per poi stamparli nel documento di markup.

for (var musicArtist in students) {
    
    var ArtistN = students[musicArtist].ArtistFirstName;
    var ArtistLN = students[musicArtist].ArtistLastName;
    var ArtistA = students[musicArtist].ArtistAge;
    
    var test = 
    `   
        <h3>${"Nome" + " " + ":" + " " + ArtistN},</h3>
            
        <h3>${"Cognome" + " " + ":" + " " + ArtistLN},</h3>

        <h3>${"Età" + " " + ":" + " " + ArtistA}</h3>
        
        `
    document.getElementById('artists').insertAdjacentHTML('beforeend', test )


}
    


