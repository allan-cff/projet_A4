let PATH_REQUEST = 'http://etu0915.projets.isen-ouest.info/back/api.php'
console.log('js trouvé' + PATH_REQUEST)



// Requete récupération de tous les arbres et toutes leurs valeurs
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
        console.log('cc')
        console.log(xhr.status);
        
        //console.log(xhr);
        if (xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
        } else if(xhr.status){
            console.log('erreur');
        }
    };
    xhr.send();
}