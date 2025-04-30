
// Requete récupération de tous les arbreset toutes elurs valeurs

function getTree(){
    // Récupération de l'url
    let path = window.location.href.split('/'); 
    path.pop();                      
    path.push('php') 
    path.push('request.php')         
    path.push('getTree')           
    url = path.join('/')                
    console.log(url);

    // requete AJAX : 
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // En-tête pour envoyer des données URL-encodées
    //console.log('afterexecution');
    xhr.onload= function() {
        console.log(xhr.status);
        //console.log(xhr);
        if (xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
        } else {
            console.log('erreur');
        }
    }
}


// Insérer un arbre

function insertTree(){
    // Récupération de l'url
    let path = window.location.href.split('/'); 
    path.pop();                      
    path.push('php') 
    path.push('request.php')         
    path.push('getTree')           
    url = path.join('/')                
    console.log(url);

    // requete AJAX : 
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // En-tête pour envoyer des données URL-encodées
    //console.log('afterexecution');
    xhr.onload= function() {
        console.log(xhr.status);
        //console.log(xhr);
        if (xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
        } else {
            console.log('erreur');
        }
    }
}