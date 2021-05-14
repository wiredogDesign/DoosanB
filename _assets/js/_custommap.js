function initialize() {
  "use strict";
  var myLatlng = new google.maps.LatLng(55.872542, -4.402483),
    mapOptions = {
      zoom: 14,
      center: myLatlng
    },
    map = new google.maps.Map(document.getElementById('google_map'), mapOptions),

    marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: "Doosan Babcock\nPorterfield Rd\nRenfrew\nPA4 8DJ"
    });
  google.maps.event.addListener(marker, 'click', function () {
    map.setZoom(18);
    map.setCenter(marker.getPosition());
  });
}
google.maps.event.addDomListener(window, 'load', initialize);