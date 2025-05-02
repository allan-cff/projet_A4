window.addEventListener('DOMContentLoaded', () => {
    getTree(data => {
        const colorMap = {
            1: "blue",
            2: "red",
            3: "yellow"
        };
    
        const clustersList = [...new Set(data.map(tree => tree.clusterId))];
    
        const traces = clustersList.map(cluster => {
            const filtered = data.filter(tree => tree.clusterId === cluster);
            return {
            type: 'scattermapbox',
            mode: 'markers',
            name: cluster,
            lat: filtered.map(p => p.lat),
            lon: filtered.map(p => p.long),
            marker: {
                size: 10,
                color: colorMap[cluster] || 'black'
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
        Plotly.newPlot('mapCluster', traces, layout, { responsive: true });
    });
});