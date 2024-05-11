//MAP functionality

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVsdGEtc3R1ZHVlbnQiLCJhIjoiY2xvMDk0MTVhMTJ3ZDJrcGR5ZDFkaHl4ciJ9.Gj2VU1wvxc7rFVt5E4KLOQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: [84.85178543016721, 25.534215691523748], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

const marker1 = new mapboxgl.Marker({ color: 'red' })
    .setLngLat([84.85178543016721, 25.534215691523748])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML("<h6 style='font-size: 0.75rem'>Department of Mechanical Engineering </br> Indian Institute of Technology Patna"))
    .addTo(map);
