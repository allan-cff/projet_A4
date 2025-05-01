let PATH_REQUEST = 'http://etu0915.projets.isen-ouest.info/back/api.php'
console.log('js trouvé' + PATH_REQUEST)


//----------------------------------TREE----------------------------------//

//Requete récupération de tous les arbres et toutes leurs valeurs
function getTree(){
    // Récupération de l'url
    let path = PATH_REQUEST + '/tree'               
    console.log(path);

    // requete AJAX : 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.setRequestHeader('Authorization', 'Basic ZXR1MDkxNTpvbmpjcG5haA==');
    console.log('afterexecution');
    xhr.onload= function() {
        //console.log('cc')
        console.log(xhr.status);
        
        //console.log(xhr);
        if (xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
            console.log('successful operation')
        } else if(xhr.status ===400){
            console.log('Invalid request');
        }else{
            console.log('error')
        }
    };
    xhr.send();
}

// -----------------Insérer un nouvel arbre-------------//
function addTree(tree){
    //Récupération des données : 
    var data_tree = {totalHeight : getElementById('hauteurTotale'), trunkHeight : getElementById('hauteurTronc'), trunkDiameter : getElementById('diametreTronc'), isRemarkable : getElementById('remarquable'), lat : getElementById('latitude'), long : getElementById('longitude'), age : 0, }
    // Récupération de l'url
    let path = PATH_REQUEST + '/tree'               
    console.log(path);

    // requete AJAX : 
    var xhr = new XMLHttpRequest();
    xhr.open('POSR', path, true);
    xhr.setRequestHeader('Authorization', 'Basic ZXR1MDkxNTpvbmpjcG5haA==');
    console.log('afterexecution');
    xhr.onload= function() {
        console.log('cc')
        console.log(xhr.status);
        
        //console.log(xhr);
        if (xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
            console.log('successful operation')
        } else if(xhr.status ===400){
            console.log('Invalid request');
        }else{
            console.log('error')
        }
    };
    xhr.send(`tree=${encodeURIComponent(tree)}`);
}

//Prédis l'âge de l'arbre en fonction de la hauteur totale.
function predictAge(){
    // Récupération de l'url
    let path = PATH_REQUEST + '/tree/predictAge'               
    console.log(path);

    // requete AJAX : 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.setRequestHeader('Authorization', 'Basic ZXR1MDkxNTpvbmpjcG5haA==');
    console.log('afterexecution');
    xhr.onload= function() {
        //console.log('cc')
        console.log(xhr.status);
        
        //console.log(xhr);
        if (xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
            console.log('successful operation')
        } else if(xhr.status ===400){
            console.log('Invalid query parameter');
        }else{
            console.log('error')
        }
    };
    xhr.send();
}

//Prédis le cluster de l'arbre en fonction de sa heuteur totale et de sa largeur de tronc.
function predictCluster(){
    // Récupération de l'url
    let path = PATH_REQUEST + '/tree/predictCluster'             
    console.log(path);

    // requete AJAX : 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.setRequestHeader('Authorization', 'Basic ZXR1MDkxNTpvbmpjcG5haA==');
    console.log('afterexecution');
    xhr.onload= function() {
        //console.log('cc')
        console.log(xhr.status);
        
        //console.log(xhr);
        if (xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
            console.log('successful operation')
        } else if(xhr.status ===400){
            console.log('Invalid query parameter');
        }else{
            console.log('error')
        }
    };
    xhr.send();
}

//Prédis le cluster de l'arbre en fonction de sa heuteur totale et de sa largeur de tronc.
function getTreeById(id){
    // Récupération de l'url
    let path = PATH_REQUEST + '/tree/' + id             
    console.log(path);

    // requete AJAX : 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.setRequestHeader('Authorization', 'Basic ZXR1MDkxNTpvbmpjcG5haA==');
    console.log('afterexecution');
    xhr.onload= function() {
        //console.log('cc')
        console.log(xhr.status);
        
        //console.log(xhr);
        if (xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
            console.log('successful operation')
        } else if(xhr.status ===400){
            console.log('Invalid query parameter');
        }else{
            console.log('error')
        }
    };
    xhr.send();
}

//----------------------------------SPECIES----------------------------------//

//Récupère la liste des espèces d'arbre et leur id
function getSpecies(){
    // Récupération de l'url
    let path = PATH_REQUEST + '/species'               
    console.log(path);

    // requete AJAX : 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.setRequestHeader('Authorization', 'Basic ZXR1MDkxNTpvbmpjcG5haA==');
    console.log('afterexecution');
    
    xhr.onload= function() {
        console.log(xhr.status);
        //console.log(xhr);
        if (xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
            console.log('successful operation')
        } else if(xhr.status ===400){
            console.log('Invalid request');
        }else{
            console.log('error')
        }
    };
    xhr.send();
}

//Ajoute une nouvelle espèce à la base de donnée et renvoie son id
function addSpecies(name){
    // Récupération de l'url
    let path = PATH_REQUEST + '/species'               
    console.log(path);

    // requete AJAX : 
    var xhr = new XMLHttpRequest();
    xhr.open('POST', path, true);
    xhr.setRequestHeader('Authorization', 'Basic ZXR1MDkxNTpvbmpjcG5haA==');
    console.log('afterexecution');
    
    xhr.onload= function() {
        console.log(xhr.status);
        //console.log(xhr);
        if (xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
            console.log('successful operation')
        } else if(xhr.status ===400){
            console.log('Invalid request');
        }else{
            console.log('error')
        }
    };
    xhr.send(`nom=${encodeURIComponent(name)}`);
}

//----------------------------------STATES----------------------------------//

//Récupère la liste des états des arbres et leur id
function getState(){
    // Récupération de l'url
    let path = PATH_REQUEST + '/state'               
    console.log(path);

    // requete AJAX : 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.setRequestHeader('Authorization', 'Basic ZXR1MDkxNTpvbmpjcG5haA==');
    console.log('afterexecution');
    
    xhr.onload= function() {
        console.log(xhr.status);
        //console.log(xhr);
        if (xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
            console.log('successful operation')
        } else if(xhr.status ===400){
            console.log('Invalid request');
        }else{
            console.log('error')
        }
    };
    xhr.send();
}


//----------------------------------DEV----------------------------------//

//Récupère la liste de stades de développement des arbres et leur id
function getDev(){
    // Récupération de l'url
    let path = PATH_REQUEST + '/dev'               
    console.log(path);

    // requete AJAX : 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.setRequestHeader('Authorization', 'Basic ZXR1MDkxNTpvbmpjcG5haA==');
    console.log('afterexecution');
    
    xhr.onload= function() {
        console.log(xhr.status);
        //console.log(xhr);
        if (xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
            console.log('successful operation')
        } else if(xhr.status ===400){
            console.log('Invalid request');
        }else{
            console.log('error')
        }
    };
    xhr.send();
}

//----------------------------------PORT----------------------------------//

//Récupère la liste de tous les ports d'arbre et leur id
function getPort(){
    // Récupération de l'url
    let path = PATH_REQUEST + '/port'               
    console.log(path);

    // requete AJAX : 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.setRequestHeader('Authorization', 'Basic ZXR1MDkxNTpvbmpjcG5haA==');
    console.log('afterexecution');
    
    xhr.onload= function() {
        console.log(xhr.status);
        //console.log(xhr);
        if (xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
            console.log('successful operation')
        } else if(xhr.status ===400){
            console.log('Invalid request');
        }else{
            console.log('error')
        }
    };
    xhr.send();
}

//----------------------------------PIED----------------------------------//

//Récupère la liste de tous les types de pieds d'arbre et leur id
function getPieds(){
    // Récupération de l'url
    let path = PATH_REQUEST + '/pied'               
    console.log(path);

    // requete AJAX : 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.setRequestHeader('Authorization', 'Basic ZXR1MDkxNTpvbmpjcG5haA==');
    console.log('afterexecution');

    xhr.onload= function() {
        console.log(xhr.status);
        //console.log(xhr);
        if (xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
            console.log('successful operation')
        } else if(xhr.status ===400){
            console.log('Invalid request');
        }else{
            console.log('error')
        }
    };
    xhr.send();
}


// Tu attends que la page soit complètement chargée
window.addEventListener('DOMContentLoaded', () => {
    const data = [{
      type: 'scattermapbox',
 
      mode: 'markers',
      marker: { size: 12 }
    }];
  
    const layout = {
        mapbox: {
          style: 'open-street-map',
          center: { lat: 49.84889, lon: 3.28778 }, // Saint-Quentin
          zoom: 13
        },
        width: 500,
        height: 500,
        margin: { t: 0, b: 0, l: 0, r: 0 }
    };
  
    Plotly.newPlot('map', data, layout);
  });
  