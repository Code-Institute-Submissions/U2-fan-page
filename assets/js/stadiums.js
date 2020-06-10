
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