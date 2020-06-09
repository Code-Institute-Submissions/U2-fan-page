 var map;
 
 function initMap() {
             map =new google.maps.Map(document.getElementById("map"), {
                zoom: 8,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });
            let markers = stadiums.features;

            for(var x=0; x < markers.length;  x++) {
            let stadiumNames = markers[x].stadiums.coordinates[0];
            let latitude = markers[x].stadiums.coordinates[1];
            let lonitude = markers[x].stadiums.coordinates[2];

            dropMarker (latitude, lonitude, stadiumNames);
         }
        }
         function dropMarker(lat, lng, stadiumNames){
             var locations = {lat: lat, lng: lng};
             var contentString = "<h3>" + stadiumNames + "</h3>";
             var infowindow = new google.maps.infoWindow({
                 content: contentString
             });
             var marker = new google.maps.Marker({position: locations, map: map, title: stadiumNames});
             marker.addEventListener('click', funciton() {
                 infowindow.open(map, marker);
             });
         }
        