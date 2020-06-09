 var map
 
 function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
         zoom: 3,
         center: {
             lat: 40.7505,
             lng: -73.9934
         }
     });

     var labels = 
          "MSC";

     var locations = [
         { lat: 40.7505, lng: -73.9934  },
         { lat: 41.8623, lng: -87.6167 },
         { lat: 34.0141, lng: -118.2879 }
     ];
     var contentString = "<h3>" + "tour venue" + "</h3>";
             var infowindow = new google.maps.InfoWindow({
                 content: contentString
             });



     var markers = locations.map(function(location, i) {
         return new google.maps.Marker({
             position: location,
             label: labels[i % labels.length]
         });
         markers.addListener('click', function() {
              infowindow.open(map, markers);
             });
     });


     var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
 }
 






























// function initMap() {
//         var map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 40.7505, lng: -73.9934},
//           zoom: 3
//         });
//           var labels = 
//           ("Maddison Square Garden","Soldier Filed","Coluseum");

//           var locations = 
//                 [{ lat: 40.7505, lng: -73.9934 },
//                 { lat: 41.8623, lng: -87.6167},
//                 { lat: 34.0141, lng: -118.2879}];
                
        
//             var markers = locations.map(function(location, i) {
//                 return new google.maps.Marker({
//                     position: location,
//                     label: labels[i % labels.length]
//                 });
//             });
//         }
