// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 40.7505, lng: -73.9934},
//     zoom: 3
//   });
//   var stadiums = [
//     {
//       name: "Madison Square Gardens", lat: 40.7505, lng: -73.9934
//     },
//     {
//       name: "Soldier Field", lat: 41.8623, lng: -87.6167
//     },
//     {
//       name: "the Collusem", lat: 34.0141, lng: -118.2879
//     }
//   ];
//   var markers = stadiums.map(function(eachStadium) {
//     return new google.maps.Marker({
//       position: {
//         lat: parseFloat(eachStadium.lat),
//         lng: parseFloat(eachStadium.lng),
//       },
//       map: map,
//       title: eachStadium.name,
//     });
//   });
// }


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7505, lng: -73.9934},
    zoom: 3
  });
  var stadiums = [
    {
      name: "Madison Square Gardens", lat: 40.7505, lng: -73.9934
    },
    {
      name: "Soldier Field", lat: 41.8623, lng: -87.6167
    },
    {
      name: "the Collusem", lat: 34.0141, lng: -118.2879
    }
  ];
  stadiums.forEach(function(eachStadium) {
    const marker =  new google.maps.Marker({
      position: {
        lat: parseFloat(eachStadium.lat),
        lng: parseFloat(eachStadium.lng),
      },
      map: map,
      title: eachStadium.name,
    });
    var contentString = "<h3>" + eachStadium.name + "</h3>";
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  });
}