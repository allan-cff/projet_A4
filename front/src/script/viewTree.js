//----------------------------------MAP----------------------------------//

function showDataPointsOnMap(data) {
  let layout = {
    mapbox: {
      style: 'open-street-map',
      center: { lat: 49.84889, lon: 3.28778 }, // Saint-Quentin
      zoom: 13
    },
    legend: { orientation: 'h' },
    margin: { t: 0, b: 0, l: 0, r: 0 }
  };

  Plotly.newPlot('map', [{
    type: 'scattermapbox',
    mode: 'markers',
    name: "Arbres",
    lat: data.trees.map(tree => tree.lat),
    lon: data.trees.map(tree => tree.long),
    marker: {
      size: 10,
      color: 'green'
    }
  },], layout, { responsive: true });
}

function updateMap(data, mapVersion="all") {
  let layout = {};
  switch(mapVersion){
    case "all":
      layout = {
        mapbox: {
          style: 'open-street-map',
          center: { lat: 49.84889, lon: 3.28778 }, // Saint-Quentin
          zoom: 13
        },
        legend: { orientation: 'h' },
        margin: { t: 0, b: 0, l: 0, r: 0 }
      };
    
      Plotly.react('map', [{
        type: 'scattermapbox',
        mode: 'markers',
        name: "Arbres",
        lat: data.trees.map(tree => tree.lat),
        lon: data.trees.map(tree => tree.long),
        marker: {
          size: 10,
          color: 'green'
        }
      },], layout);
      break;
    case "state":
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

      layout = {
        mapbox: {
          style: 'open-street-map',
          center: { lat: 49.84889, lon: 3.28778 }, // Saint-Quentin
          zoom: 13
        },
        legend: { orientation: 'h' },
        margin: { t: 0, b: 0, l: 0, r: 0 }
      };

      Plotly.react('map', traces, layout);
      break;
    case "age":
      const ages = data.trees.map(tree => tree.age).filter(age => age !== null && age !== undefined);
      const lats = data.trees.map(tree => tree.lat);
      const lons = data.trees.map(tree => tree.long);

      const ageTrace = {
        type: 'scattermapbox',
        mode: 'markers',
        name: 'Âge',
        lat: lats,
        lon: lons,
        marker: {
          size: 10,
          color: ages,
          colorscale: 'Viridis',  // tu peux choisir aussi: 'Jet', 'Portland', 'Turbo', etc.
          colorbar: {
            title: 'Âge (ans)',
            titleside: 'right'
          },
          cmin: Math.min(...ages),
          cmax: Math.max(...ages)
        },
        text: ages.map(age => `Âge: ${age} ans`),
        hoverinfo: 'text'
      };

      layout = {
        mapbox: {
          style: 'open-street-map',
          center: { lat: 49.84889, lon: 3.28778 },
          zoom: 13
        },
        legend: { orientation: 'h' },
        margin: { t: 0, b: 0, l: 0, r: 0 }
      };

      Plotly.react('map', [ageTrace], layout);
      break;
  }
}

  //----------------------------------TABLE----------------------------------//

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

//----------------------------------RECUP DATAS----------------------------------//

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

// Appel initial pour commencer à récupérer les données et afficher les arbres

window.addEventListener('DOMContentLoaded', () => {
    getAllDatas().then(data => {
        plotTreeOnTable(data);
        showDataPointsOnMap(data);
        document.querySelectorAll('#SelectAffichage input').forEach(radio => {
          radio.addEventListener('change', e => {
              if(e.target.checked){
                switch(e.target.id){
                  case "allTreesMap":
                    updateMap(data, "all");
                    break;
                  case "treesByStateMap":
                    updateMap(data, "state");
                    break;
                  case "treesAgesMap":
                    updateMap(data, "age");
                    break;
                }
              }
          })
        })
    })
});


document.addEventListener("DOMContentLoaded", function () {
  const predictionBtn = document.getElementById("prediction");

  predictionBtn.addEventListener("click", function () {
    const selectedRadio = document.querySelector('input[name="arbreSelect"]:checked');

    if (selectedRadio) {
      const id = selectedRadio.value;
      window.location.href = `predictAge.html?id=${id}`;
    } else {
      alert("Veuillez sélectionner un arbre.");
    }
  });
});