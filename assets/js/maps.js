 var usStadiums = [
    {
      name: "Madison Square Gardens", city: "New York", date: '21st of June 2021', lat: 40.7505, lng: -73.9934
    },
    {
      name: "Boston Garden", city: "Boston", date: '21st of June 2021', lat: 42.3662, lng: -71.0621
    },
    {
      name: "Wells Fargo Arena", city: "Philadelphia", date: '22nd of June 2021', lat: 39.9012, lng: -75.1720
    },
    {
      name: "United Center", city: "Chicago", date: '28th of June 2021', lat: 41.8807, lng: -87.6742
    },
    {
      name: "Pepsi Center", city: "Denver", date: '3rd of July 2021', lat: 39.7487, lng: -105.0077
    },
    {
      name: "SAP center", city: "San Jose", date: '10th of July 2021', lat: 37.3328, lng: -121.9012
    },
    {
      name: "the Collusem", city: "Los Angeles", date: '30th of July 2021', lat: 34.0141, lng: -118.2879
    }
  ];


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7505, lng: -73.9934},
    zoom: 3
  });

   document.getElementById('US-drop').onclick = function(){
        usStadiums.forEach(function(eachUsStadium) {
            const marker =  new google.maps.Marker({
            position: {
                lat: parseFloat(eachUsStadium.lat),
                lng: parseFloat(eachUsStadium.lng),
            },
            map: map,
            title: eachUsStadium.name,
            });
    
    var contentString = "<h3>" + eachUsStadium.name + "</h3>" + "<br>" +"<p>" + eachUsStadium.city + " on the " + eachUsStadium.date + "</p>";
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    }); 
    marker.addListener('click', function() {
        map.setZoom(5);
        map.setCenter(marker.getPosition());
  }); 
  });
}
}













  // function drop() {
    //     clearMarkers();
    //     for (var i = 0; i < stadiums.length; i++) {
    //       addMarkerWithTimeout(stadiums[i], i * 200);
    //     }
    //   }

    //   function addMarkerWithTimeout(position, timeout) {
    //     window.setTimeout(function() {
    //       markers.push(new google.maps.Marker({
    //         position: {
    //             lat: parseFloat(eachStadium.lat),
    //             lng: parseFloat(eachStadium.lng),
    //               },
    //         map: map,
    //         animation: google.maps.Animation.DROP
    //       }));
    //     }, timeout);
    //   }

    //   function clearMarkers() {
    //     for (var i = 0; i < markers.length; i++) {
    //       markers[i].setMap(null);
    //     }
    //     markers = [];
    //   }