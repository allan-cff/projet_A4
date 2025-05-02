window.addEventListener('DOMContentLoaded', () => {
    getTree(data => {
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
    });
});