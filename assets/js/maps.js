var map;
function plotPointsOnMap(locations, centerPoints) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: centerPoints,
    zoom: 2
  });
   locations.forEach(function(eachLocation) {
      const marker =  new google.maps.Marker({
           position: {
                lat: parseFloat(eachLocation.lat),
                lng: parseFloat(eachLocation.lng),
            },
            map: map,
            title: eachLocation.name,
        });
    
    var contentString = "<h3>" + eachLocation.name + "</h3>" + "<br>" +"<p>" + eachLocation.city + " on the " + eachLocation.date + "</p>";
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        disableAutoPan: true
    });
    marker.addListener('click', function() {
        map.setZoom(5);
        map.setCenter(marker.getPosition());
  }); 
    marker.addListener('mouseover', function() {
      infowindow.open(map, marker);
    }); 
     marker.addListener('mouseout', function() {
      infowindow.close(map, marker);
    });
  });
}
function ShowPointsTable(locations) {
const tableRows = [];
     locations.forEach(function(eachlocation) {
          tableRows.push("<tr><td>" + eachlocation.name + "</td></tr>");
     });
     document.getElementById('table').innerHTML = "<table>" + tableRows + "</table>";
};


 
function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.0997, lng: -94.5786},
    zoom: 3
  });
   // Plot US locations
     plotPointsOnMap(usStadiums, centerOfUS);
   document.getElementById('US-drop').onclick = function(){
        plotPointsOnMap(usStadiums, centerOfUS);
        ShowPointsTable(usStadiums);
   };
   // Plot EU locations
   document.getElementById('EU-drop').onclick = function(){
        plotPointsOnMap(euStadiums, centerOfEU);
        ShowPointsTable(euStadiums);
   };
   // Plot rest of world locations 
   document.getElementById('RW-drop').onclick = function(){
        plotPointsOnMap(rwStadiums, centerOfRW);
        ShowPointsTable(rwStadiums);
   };
}


function ShowPointsTable(locations) {
const tableRows = [];
     locations.forEach(eachLocation => {
          tableRows.push("<tr><td>" + eachLocation.name + "</td></tr>");
     });
     document.getElementById('table').innerHTML = "<table>" + tableRows + "</table>";
};













// var map;

// function initMap() {
//      map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 39.0997, lng: -94.5786},
//     zoom: 1
//   });

//    document.getElementById('US-drop').onclick = function(){
//        map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 39.0997, lng: -94.5786},
//     zoom: 3
//   });
//         usStadiums.forEach(function(eachUsStadium) {
//             const marker =  new google.maps.Marker({
//             position: {
//                 lat: parseFloat(eachUsStadium.lat),
//                 lng: parseFloat(eachUsStadium.lng),
//             },
//             map: map,
//             title: eachUsStadium.name,
//             });
    
//     var contentString = "<h3>" + eachUsStadium.name + "</h3>" + "<br>" +"<p>" + eachUsStadium.city + " on the " + eachUsStadium.date + "</p>";
//     var infowindow = new google.maps.InfoWindow({
//         content: contentString,
//         disableAutoPan: true
//     });

//     marker.addListener('click', function() {
//         map.setZoom(5);
//         map.setCenter(marker.getPosition());
//   }); 
//     marker.addListener('mouseover', function() {
//       infowindow.open(map, marker);
//     }); 
//      marker.addListener('mouseout', function() {
//       infowindow.close(map, marker);
//     });
//   });
// }
//  document.getElementById('EU-drop').onclick = function(){
//      map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 53.3607, lng: -6.2512},
//     zoom: 3
//   });
//         euStadiums.forEach(function(eachEuStadium) {
//             const marker =  new google.maps.Marker({
//             position: {
//                 lat: parseFloat(eachEuStadium.lat),
//                 lng: parseFloat(eachEuStadium.lng),
//             },
//             map: map,
//             title: eachEuStadium.name,
//             });
    
//     var contentString = "<h3>" + eachEuStadium.name + "</h3>" + "<br>" +"<p>" + eachEuStadium.city + " on the " + eachEuStadium.date + "</p>";
//     var infowindow = new google.maps.InfoWindow({
//         content: contentString,
//         disableAutoPan: true
//     });

//     marker.addListener('mouseover', function() {
//       infowindow.open(map, marker);
//     }); 
//      marker.addListener('mouseout', function() {
//       infowindow.close(map, marker);
//     });
//     marker.addListener('click', function() {
//         map.setZoom(5);
//         map.setCenter(marker.getPosition());
//   }); 
//   });
// }
// document.getElementById('RW-drop').onclick = function(){
//      map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -13.7590, lng: -172.1046},
//     zoom: 1
//   });
//         rwStadiums.forEach(function(eachRwStadium) {
//             const marker =  new google.maps.Marker({
//             position: {
//                 lat: parseFloat(eachRwStadium.lat),
//                 lng: parseFloat(eachRwStadium.lng),
//             },
//             map: map,
//             title: eachRwStadium.name,
//             });
    
//     var contentString = "<h3>" + eachRwStadium.name + "</h3>" + "<br>" +"<p>" + eachRwStadium.city + " on the " + eachRwStadium.date + "</p>";
//     var infowindow = new google.maps.InfoWindow({
//         content: contentString,
//         disableAutoPan: true
//     });

//     marker.addListener('mouseover', function() {
//       infowindow.open(map, marker);
//     }); 
//      marker.addListener('mouseout', function() {
//       infowindow.close(map, marker);
//     });
//     marker.addListener('click', function() {
//         map.setZoom(5);
//         map.setCenter(marker.getPosition());
//   }); 
//   });
// }
// }



    // document.getElementById('US-drop').onclick = function() {
    //     let stadiumName;
    //     for ( i=0; i<usStadiums.length; i++) {
    //         stadiumName = "location " + usStadiums[i].name;
    //     }
    //     document.getElementById("lists").write = stadiumName;
    // }






//   document.getElementsByClassName('US-list').onclick = function(){
//     return stadiumName;


