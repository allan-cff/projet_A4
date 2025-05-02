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
            speciesId:  1, //parseInt(document.getElementById('espece').value),
            devId:  1,//parseInt(document.getElementById('stade').value),
            totalHeight: parseFloat(document.getElementById('hauteurTotale').value),
            portId: 1,//parseInt(document.getElementById('typePort').value),
            trunkHeight: parseFloat(document.getElementById('hauteurTronc').value),
            piedId: 1,//parseInt(document.getElementById('typePied').value),
            trunkDiameter: parseFloat(document.getElementById('diametreTronc').value),
            stateId:1,// parseInt(document.getElementById('etatArbre').value),
            lat: parseFloat(document.getElementById('latitude').value),
            long: parseFloat(document.getElementById('longitude').value),
            isRemarkable: document.getElementById('remarquable').value === 'oui',
            age :10,
            clusterId : 2
        };
          

        addTree(tree, function(result) {
            alert("Arbre ajouté avec succès !");
            console.log(result)
            //form.reset(); // Réinitialise le formulaire
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