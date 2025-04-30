
	mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9// starting zoom
    });


    const el = document.createElement('div');
    el.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ukf44NVfnMjsDd-H8knUqSXW3SjtT3VayANmNVAjfTuJox-jrzEgQ3fuf1h5DeMjgMA&usqp=CAU)';
    el.style.width = '30px';             // slightly bigger size
    el.style.height = '30px';
    el.style.backgroundSize = 'contain'; // keeps full image without cropping
    el.style.backgroundRepeat = 'no-repeat';
    el.style.backgroundPosition = 'center';
    el.style.borderRadius = '50%';        // make it a circle
    el.style.backgroundColor = 'white';   // white background (makes icon pop)
    el.style.boxShadow = '0 4px 8px rgba(255,0,0,0.5)'; // soft red shadow
    el.style.cursor = 'pointer';
    el.style.padding = '5px'; 

    const marker = new mapboxgl.Marker(el)
    .setLngLat(listing.geometry.coordinates)  //listing.geometry.coordinates 
    .setPopup(new mapboxgl.Popup({offset: 24})
    .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`))
    .addTo(map);
