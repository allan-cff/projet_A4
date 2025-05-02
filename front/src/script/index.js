// ----------------- Insertion -------------//

let speciesMap = {};
let devMap = {};
let portMap = {};
let piedMap = {};
let stateMap = {};

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

            // Associer le nom de l'espèce à son ID
            speciesMap[species.name] = species.id;
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

            // Associer le nom du stade à son ID
            devMap[dev.name] = dev.id;
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

            // Associer le nom du port à son ID
            portMap[port.name] = port.id;
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

            // Associer le nom du pied à son ID
            piedMap[pied.name] = pied.id;
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

            // Associer l'état à son ID
            stateMap[state.name] = state.id;
        });
    });

    // Soumission du formulaire
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les noms des options sélectionnées
    const selectedSpeciesName = document.getElementById('espece').value;
    const selectedDevName = document.getElementById('stade').value;
    const selectedPortName = document.getElementById('typePort').value;
    const selectedPiedName = document.getElementById('typePied').value;
    const selectedStateName = document.getElementById('etatArbre').value;

    // Récupérer les IDs correspondant aux noms
    const speciesId = speciesMap[selectedSpeciesName];
    const devId = devMap[selectedDevName];
    const portId = portMap[selectedPortName];
    const piedId = piedMap[selectedPiedName];
    const stateId = stateMap[selectedStateName];

    const totalHeight = parseFloat(document.getElementById('hauteurTotale').value);
    const trunkDiameter = parseFloat(document.getElementById('diametreTronc').value);

    predictCluster(totalHeight, trunkDiameter, function(clusterResult) {
        
        const tree = {
            speciesId: speciesId,
            devId: devId,
            totalHeight: totalHeight,
            portId: portId,
            trunkHeight: parseFloat(document.getElementById('hauteurTronc').value),
            piedId: piedId,
            trunkDiameter: trunkDiameter,
            stateId: stateId,
            lat: parseFloat(document.getElementById('latitude').value),
            long: parseFloat(document.getElementById('longitude').value),
            isRemarkable: document.getElementById('remarquable').value === 'oui',
            age: 0,
            clusterId: clusterResult.clusterId // Assure-toi que c’est bien ce nom dans la réponse
        };

        // Envoyer les données à l'API
        addTree(tree, function(result) {
            alert("Arbre ajouté avec succès !");
            console.log(result);
        });
    });
});

});