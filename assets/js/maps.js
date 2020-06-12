//  var usStadiums = [
//     {
//       name: "Madison Square Gardens", city: "New York", date: '1st of June 2021', lat: 40.7505, lng: -73.9934
//     },
//     {
//       name: "Scotiabank Arena", city: "Toronto", date: '8th of June 2021', lat: 43.6435, lng: -79.3791
//     },
//     {
//       name: "Boston Garden", city: "Boston", date: '12th of June 2021', lat: 42.3662, lng: -71.0621
//     },
//     {
//       name: "Wells Fargo Arena", city: "Philadelphia", date: '28nd of June 2021', lat: 39.9012, lng: -75.1720
//     },
//     {
//       name: "Bridgestone Arena", city: "Nashville", date: '22nd of June 2021', lat: 36.1592, lng: -86.7785
//     },
//     {
//       name: "United Center", city: "Chicago", date: '28th of June 2021', lat: 41.8807, lng: -87.6742
//     },
//     {
//       name: "Key Arena", city: "Seattle", date: '30th of June 2021', lat: 47.6221, lng: -122.3540
//     },
//     {
//       name: "Pepsi Center", city: "Denver", date: '3rd of July 2021', lat: 39.7487, lng: -105.0077
//     },
//     {
//       name: "SAP center", city: "San Jose", date: '10th of July 2021', lat: 37.3328, lng: -121.9012
//     },
//     {
//       name: "the Collusem", city: "Los Angeles", date: '30th of July 2021', lat: 34.0141, lng: -118.2879
//     }
//   ];
// var euStadiums = [
//     {
//       name: "Croke Park", city: "Dublin", date: '21st of August 2021', lat: 53.3607, lng: -6.2512
//     },
//      {
//       name: "Thomond Park", city: "Dublin", date: '22nd of August 2021', lat: 52.6742, lng: -8.6425
//     },
//     {
//       name: "Twickenham Stadium", city: "London", date: '25th of August 2021', lat: 51.4546, lng: -0.3410
//     },
//     {
//       name: "City of Manchester Stadium", city: "Manchester", date: '28th of August 2021', lat: 53.4831, lng: -2.2004
//     },
//     {
//       name: "Millennium stadium", city: "Cardiff", date: '30th of August 2021', lat: 51.4782, lng: -3.1826
//     },
//     {
//       name: "Olympiastadion Berlin", city: "Berlin", date: '3rd of September 2021', lat: 52.5147, lng: 13.2395
//     },
//     {
//       name: "Stade De France", city: "Paris", date: '10th of September 2021', lat: 48.9245, lng:  2.3602
//     },
//     {
//       name: "Johan Cruijff ArenA", city: "Amsterdam", date: '14th of September 2021', lat: 52.3144, lng:  4.9420
//     },
//     {
//       name: "Santiago Bernabéu Stadium", city: "Madrid", date: '19th of September 2021', lat: 40.4531, lng:  -3.6883
//     },
//     {
//       name: "Stadio Olimpico", city: "Rome", date: '30th of September 2021', lat: 41.9341, lng: 12.4547
//     }
//   ];

// var rwStadiums = [
//     {
//       name: "Estadio Aztecas", city: "Mexico City", date: '1st of November 2021', lat: 19.3029, lng: -99.1505
//     },
//     {
//       name: "Maracanã Stadium", city: "Sao Paulo", date: '12th of November 2021', lat: -22.9121, lng: -43.2302
//     },
//     {
//       name: "Estadio Monumental Antonio Vespucio Liberti", city: "Buenos Aires", date: '18th of November 2021', lat: -34.5453, lng: -58.4498
//     },
//     {
//       name: "Opus Stadium", city: "Perth", date: '24th of November 2021', lat: -31.9512, lng: 115.8890
//     },
//     {
//       name: "SunCorp Stadium", city: "Brisbane", date: '28th of November 2021', lat: -27.4648, lng: 153.0095
//     },
//     {
//       name: "ANZ Stadium", city: "Sydney", date: '30th of November 2021', lat: -33.8471, lng: 151.0634
//     },
//     {
//       name: "Eden Park", city: "Auckland", date: '10th of December 2021', lat: -36.8750, lng: 174.7448
//     },
//     {
//       name: "Saitama Super Arena", city: "Tokyo", date: '14th of December 2021', lat: 35.8951, lng: 139.6307
//     },
//     {
//       name: "Gocheok Sky Dome", city: "Seoul", date: '21st of December 2021', lat: 37.4982, lng: 126.8672
//     }
//   ];



var map;

function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.0997, lng: -94.5786},
    zoom: 1
  });

   document.getElementById('US-drop').onclick = function(){
       map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.0997, lng: -94.5786},
    zoom: 3
  });
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
 document.getElementById('EU-drop').onclick = function(){
     map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 53.3607, lng: -6.2512},
    zoom: 3
  });
        euStadiums.forEach(function(eachEuStadium) {
            const marker =  new google.maps.Marker({
            position: {
                lat: parseFloat(eachEuStadium.lat),
                lng: parseFloat(eachEuStadium.lng),
            },
            map: map,
            title: eachEuStadium.name,
            });
    
    var contentString = "<h3>" + eachEuStadium.name + "</h3>" + "<br>" +"<p>" + eachEuStadium.city + " on the " + eachEuStadium.date + "</p>";
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        disableAutoPan: true
    });

    marker.addListener('mouseover', function() {
      infowindow.open(map, marker);
    }); 
     marker.addListener('mouseout', function() {
      infowindow.close(map, marker);
    });
    marker.addListener('click', function() {
        map.setZoom(5);
        map.setCenter(marker.getPosition());
  }); 
  });
}
document.getElementById('RW-drop').onclick = function(){
     map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -13.7590, lng: -172.1046},
    zoom: 1
  });
        rwStadiums.forEach(function(eachRwStadium) {
            const marker =  new google.maps.Marker({
            position: {
                lat: parseFloat(eachRwStadium.lat),
                lng: parseFloat(eachRwStadium.lng),
            },
            map: map,
            title: eachRwStadium.name,
            });
    
    var contentString = "<h3>" + eachRwStadium.name + "</h3>" + "<br>" +"<p>" + eachRwStadium.city + " on the " + eachRwStadium.date + "</p>";
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        disableAutoPan: true
    });

    marker.addListener('mouseover', function() {
      infowindow.open(map, marker);
    }); 
     marker.addListener('mouseout', function() {
      infowindow.close(map, marker);
    });
    marker.addListener('click', function() {
        map.setZoom(5);
        map.setCenter(marker.getPosition());
  }); 
  });
}
}




var usStadiums = [
    {
      name: "Madison Square Gardens", city: "New York", date: '1st of June 2021', lat: 40.7505, lng: -73.9934
    },
    {
      name: "Scotiabank Arena", city: "Toronto", date: '8th of June 2021', lat: 43.6435, lng: -79.3791
    },
    {
      name: "Boston Garden", city: "Boston", date: '12th of June 2021', lat: 42.3662, lng: -71.0621
    },
    {
      name: "Wells Fargo Arena", city: "Philadelphia", date: '28nd of June 2021', lat: 39.9012, lng: -75.1720
    },
    {
      name: "Bridgestone Arena", city: "Nashville", date: '22nd of June 2021', lat: 36.1592, lng: -86.7785
    },
    {
      name: "United Center", city: "Chicago", date: '28th of June 2021', lat: 41.8807, lng: -87.6742
    },
    {
      name: "Key Arena", city: "Seattle", date: '30th of June 2021', lat: 47.6221, lng: -122.3540
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
var euStadiums = [
    {
      name: "Croke Park", city: "Dublin", date: '21st of August 2021', lat: 53.3607, lng: -6.2512
    },
     {
      name: "Thomond Park", city: "Dublin", date: '22nd of August 2021', lat: 52.6742, lng: -8.6425
    },
    {
      name: "Twickenham Stadium", city: "London", date: '25th of August 2021', lat: 51.4546, lng: -0.3410
    },
    {
      name: "City of Manchester Stadium", city: "Manchester", date: '28th of August 2021', lat: 53.4831, lng: -2.2004
    },
    {
      name: "Millennium stadium", city: "Cardiff", date: '30th of August 2021', lat: 51.4782, lng: -3.1826
    },
    {
      name: "Olympiastadion Berlin", city: "Berlin", date: '3rd of September 2021', lat: 52.5147, lng: 13.2395
    },
    {
      name: "Stade De France", city: "Paris", date: '10th of September 2021', lat: 48.9245, lng:  2.3602
    },
    {
      name: "Johan Cruijff ArenA", city: "Amsterdam", date: '14th of September 2021', lat: 52.3144, lng:  4.9420
    },
    {
      name: "Santiago Bernabéu Stadium", city: "Madrid", date: '19th of September 2021', lat: 40.4531, lng:  -3.6883
    },
    {
      name: "Stadio Olimpico", city: "Rome", date: '30th of September 2021', lat: 41.9341, lng: 12.4547
    }
  ];


    document.getElementById('US-drop').onclick = function() {
        let stadiumName;
        for ( i=0; i<usStadiums.length; i++) {
            stadiumName = "location " + usStadiums[i].name;
        }
        document.getElementById("lists").write = stadiumName;
    }






//   document.getElementsByClassName('US-list').onclick = function(){
//     return stadiumName;


