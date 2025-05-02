let PATH_REQUEST = 'http://etu0915.projets.isen-ouest.info/back/api.php'
console.log('js trouvé' + PATH_REQUEST)

//----------------------------------TREE----------------------------------//

//Requete récupération de tous les arbres et toutes leurs valeurs
function getTree(callback){
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
            console.log('successful operation');
            callback(result);
        } else if(xhr.status ===400){
            console.log('Invalid request');
        }else{
            console.log('error')
        }
    };
    xhr.send();
}

// -----------------Insérer un nouvel arbre-------------//
function addTree(tree, callback){
    //Récupération des données : 
    tree = JSON.stringify(tree)
    // Récupération de l'url
    let path = PATH_REQUEST + '/tree'               
    console.log(path);

    // requete AJAX : 
    var xhr = new XMLHttpRequest();
    xhr.open('POST', path, true);
    xhr.setRequestHeader('Authorization', 'Basic ZXR1MDkxNTpvbmpjcG5haA==');
    console.log('afterexecution');
    xhr.onload= function() {
        console.log('cc')
        console.log(xhr.status);
        
        //console.log(xhr);
        if (xhr.status === 201) {
            let result = JSON.parse(xhr.responseText);
            console.log('successful operation')
            callback(result);
        } else if(xhr.status ===400){
            let result = JSON.parse(xhr.responseText);
            console.log('Invalid request');
            console.log(result);
        }else{
            console.log('error')
        }
    };
    xhr.send(tree);
}

//Prédis l'âge de l'arbre en fonction de la hauteur totale.
function predictAge(totalHeight, trunkDiameter, trunkHeight, callback){
    // Récupération de l'url
    let path = PATH_REQUEST + '/tree/predict/age'               
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
            callback(result);
        } else if(xhr.status ===400){
            console.log('Invalid query parameter');
        }else{
            console.log('error')
        }
    };
    xhr.send();
}

//Prédis le cluster de l'arbre en fonction de sa heuteur totale et de sa largeur de tronc.
function predictCluster(callback){
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
            callback(result);
        } else if(xhr.status ===400){
            console.log('Invalid query parameter');
        }else{
            console.log('error')
        }
    };
    xhr.send();
}

//Prédis le cluster de l'arbre en fonction de sa heuteur totale et de sa largeur de tronc.
function getTreeById(id, callback){
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
            callback(result);
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
function getSpecies(callback){
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
            callback(result);
        } else if(xhr.status ===400){
            console.log('Invalid request');
        }else{
            console.log('error')
        }
    };
    xhr.send();
}

//Ajoute une nouvelle espèce à la base de donnée et renvoie son id
function addSpecies(name, callback){
    // Récupération de l'url

    let path = PATH_REQUEST + '/species'               
    console.log(path);
    name = json.stringify({"name" : name})
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
            callback(result);
        } else if(xhr.status ===400){
            console.log('Invalid request');
        }else{
            console.log('error')
        }
    };
    xhr.send(name);
}

//----------------------------------STATES----------------------------------//

//Récupère la liste des états des arbres et leur id
function getState(callback){
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
            callback(result);
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
function getDev(callback){
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
            callback(result);
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
function getPort(callback){
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
            callback(result);
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
function getPieds(callback){
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
            callback(result);
        } else if(xhr.status ===400){
            console.log('Invalid request');
        }else{
            console.log('error')
        }
    };
    xhr.send();
}

//----------------------------------UTILS----------------------------------//

function findElement(id, array){
    let i=0
    while(array[i].id != id){
        i++
        if (i >= array.length) return "Inconnu";
    }
    return array[i].name
}