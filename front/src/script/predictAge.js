document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id) {
    console.log("ID récupéré :", id);

    getTreeById(id, function (tree) {
      let speciesName = tree.species.name;
      let stateName = tree.state.name;
      let devName = tree.dev.name;
      let portName = tree.port.name;
      let piedName = tree.pied.name;

      let totalHeight = tree.totalHeight;
      let trunkDiameter = tree.trunkDiameter;
      let trunkHeight = tree.trunkHeight;

      console.log("taille totale : " + totalHeight + "taille tronc : " + trunkDiameter + "diamètre tronc : " + trunkDiameter);
      let lat = tree.lat;
      let lon = tree.long;
      let age = tree.age;
      let isRemarkable = tree.isRemarkable;

      document.getElementById("id").textContent = id;
      document.getElementById("speciesName").textContent = speciesName;

      let googleMapsUrl = `https://www.google.com/maps/@${lat},${lon},15z`;
      let googleMapEmbedUrl = `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`
      document.getElementById('ggmap').setAttribute('href', googleMapsUrl);
      document.getElementById('ggmapiframe').setAttribute('src', googleMapEmbedUrl);

      predictAge(totalHeight, trunkDiameter, trunkHeight, function(response){
          const predictedAge = response.value; 
          console.log(predictedAge);
          document.getElementById("ageEstimeBest").textContent = "Age estimé par le meilleur modèle : " + predictedAge + " ans";
      })

      });
  } else {
    alert("Aucun ID trouvé dans l'URL !");
  }
});