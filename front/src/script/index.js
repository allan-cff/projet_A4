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
function predictAge(callback){
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

//
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



//----------------------------------MAP----------------------------------//


function showDataPointsOnMap(data) {

    const colorMap = {
      "EN PLACE": "green",
      "REMPLACE": "blue",
    };

    const uniqueStates = [...new Set(data.trees.map(tree => findElement(tree.stateId, data.states)))];

    const traces = uniqueStates.map(currentState => {
      const filtered = data.trees.filter(tree => findElement(tree.stateId, data.states) === currentState);
      return {
        type: 'scattermapbox',
        mode: 'markers',
        name: currentState,
        lat: filtered.map(p => p.lat),
        lon: filtered.map(p => p.long),
        marker: {
          size: 10,
          color: colorMap[currentState] || 'black'
        }
      };
    });

    const layout = {
      mapbox: {
        style: 'open-street-map',
        center: { lat: 49.84889, lon: 3.28778 }, // Saint-Quentin
        zoom: 13
      },
      legend: { orientation: 'h' },
      margin: { t: 0, b: 0, l: 0, r: 0 }
    };

    console.log(traces);
    Plotly.newPlot('map', traces, layout, { responsive: true });
  }

  //---------------------------------- Affichage ----------------------------------//

  function findElement(id, array){
    let i=0
    while(array[i].id != id){
        i++
        if (i >= array.length) return "Inconnu";
    }
    return array[i].name
}

function plotTreeOnTable(data) {
    const tbody = document.getElementById("arrayTree");
    console.log("Affichage des arbres dans le tableau");

    data.trees.forEach((tree) => {
        console.log("Traitement de l'arbre avec ID : ", tree.id);

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${tree.id}</td>
            <td>${findElement(tree.speciesId, data.species)}</td>
            <td>${tree.totalHeight}</td>
            <td>${tree.trunkHeight}</td>
            <td>${tree.trunkDiameter}</td>
            <td>${tree.isRemarkable}</td>
            <td>[${tree.lat}; ${tree.long}]</td>
            <td>${findElement(tree.stateId, data.states)}</td>
            <td>${findElement(tree.devId, data.devs)}</td>
            <td>${findElement(tree.portId, data.ports)}</td>
            <td>${findElement(tree.piedId, data.pieds)}</td>
            <td><input type="radio" name="arbreSelect" id="radio${tree.id}" value="${tree.id}"></td>
        `;
        tbody.appendChild(tr);
    });
}

async function getAllDatas() {
    console.log("Début du processus de récupération des données.");

    // On convertit les fonctions en Promises si elles utilisent des callbacks
    const speciesPromise = new Promise((resolve) => getSpecies(resolve));
    const statePromise = new Promise((resolve) => getState(resolve));
    const devPromise = new Promise((resolve) => getDev(resolve));
    const portPromise = new Promise((resolve) => getPort(resolve));
    const piedsPromise = new Promise((resolve) => getPieds(resolve));
    const treePromise = new Promise((resolve) => getTree(resolve));

    try {
        // On attend que toutes les promesses soient résolues (requetes terminées) et on récupère les données
        const [
            arraySpecies,
            arrayState,
            arrayDev,
            arrayPort,
            arrayPied,
            arrayTree
        ] = await Promise.all([
            speciesPromise,
            statePromise,
            devPromise,
            portPromise,
            piedsPromise,
            treePromise
        ]);

        console.log("Espèces récupérées :", arraySpecies);
        console.log("États récupérés :", arrayState);
        console.log("Stades de développement récupérés :", arrayDev);
        console.log("Types de port récupérés :", arrayPort);
        console.log("Types de pieds récupérés :", arrayPied);
        console.log("Arbres récupérés :", arrayTree);

        return {
            species: arraySpecies,
            states: arrayState,
            devs: arrayDev,
            ports: arrayPort,
            pieds: arrayPied,
            trees: arrayTree
        };

    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}

// ----------------- Insertion -------------//

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('addTreeForm');

    // Remplir le dropdown des espèces
    getSpecies(function(speciesList) {
        const datalist = document.getElementById('especes');
        datalist.innerHTML = '';
        speciesList.forEach(species => {
            const option = document.createElement('option');
            option.value = species.name;
            datalist.appendChild(option);
        });
    });

    // Remplir le dropdown des stades de développement
    getDev(function(devList) {
        const select = document.getElementById('stade');
        select.innerHTML = '<option selected disabled>Choisir...</option>';
        devList.forEach(dev => {
            const option = document.createElement('option');
            option.value = dev.name;
            option.textContent = dev.name;
            select.appendChild(option);
        });
    });

    // Remplir le dropdown des types de port
    getPort(function(portList) {
        const select = document.getElementById('typePort');
        select.innerHTML = '<option selected disabled>Choisir...</option>';
        portList.forEach(port => {
            const option = document.createElement('option');
            option.value = port.name;
            option.textContent = port.name;
            select.appendChild(option);
        });
    });

    // Remplir le dropdown des types de pied
    getPieds(function(piedList) {
        const select = document.getElementById('typePied');
        select.innerHTML = '<option selected disabled>Choisir...</option>';
        piedList.forEach(pied => {
            const option = document.createElement('option');
            option.value = pied.name;
            option.textContent = pied.name;
            select.appendChild(option);
        });
    });

    // Remplir le dropdown des états
    getState(function(stateList) {
        const select = document.getElementById('etatArbre');
        select.innerHTML = '<option selected disabled>Choisir...</option>';
        stateList.forEach(state => {
            const option = document.createElement('option');
            option.value = state.name;
            option.textContent = state.name;
            select.appendChild(option);
        });
    });

    // Soumission du formulaire
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche le rechargement de la page

        const tree = {
            speciesId: parseInt(document.getElementById('espece').value),
            devId: parseInt(document.getElementById('stade').value),
            totalHeight: parseFloat(document.getElementById('hauteurTotale').value),
            portId: parseInt(document.getElementById('typePort').value),
            trunkHeight: parseFloat(document.getElementById('hauteurTronc').value),
            piedId: parseInt(document.getElementById('typePied').value),
            trunkDiameter: parseFloat(document.getElementById('diametreTronc').value),
            stateId: parseInt(document.getElementById('etatArbre').value),
            lat: parseFloat(document.getElementById('latitude').value),
            long: parseFloat(document.getElementById('longitude').value),
            isRemarkable: document.getElementById('remarquable').value === 'oui',
            age :10,
            clusterId : 2
        };
          

        addTree(tree, function(result) {
            alert("Arbre ajouté avec succès !");
            form.reset(); // Réinitialise le formulaire
        });
    });
});


// Appel initial pour commencer à récupérer les données et afficher les arbres

window.addEventListener('DOMContentLoaded', () => {
    getAllDatas().then(data => {
        plotTreeOnTable(data);
        showDataPointsOnMap(data);
    })
});