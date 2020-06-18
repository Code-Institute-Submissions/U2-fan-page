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
    
    var contentString = "<h3>" + eachLocation.name + "</h3>" + "<br>" +"<p>" + "<b>" +eachLocation.city + "</b>" + " on the " + eachLocation.date + "</p>";
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
// function ShowPointsTable(locations) {
// const tableRows = [];
//      locations.forEach(function(eachlocation) {
//           tableRows.push("<tr><td>" + eachlocation.name + "</td></tr>");
//      });
//      document.getElementById('table').innerHTML = "<table>" + tableRows + "</table>";
// };


 
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
            tableRows.push("<span class='mobile-view'>" + eachLocation.name + "</span>" + "<span>" + " <em> City:  </em>  " +  eachLocation.city + 
             "</span>" + "<span>" + " <em> Date:  </em>  " + eachLocation.date  + "</span>");
     });
     document.getElementById('table').innerHTML = "<h1 class='table-headers'>Tour Info</h1>" + "<div class='table-style'>" + tableRows + "</div>" + "<button onclick='NewTab()' class='tour-links' >Click for ticket master link for tour!</button>" ;
};

function NewTab() { 
            window.open( 
              "https://www.ticketmaster.ie/u2-tickets/artist/736365", "_blank"); 
        } 