function initialize() {
  // Setup map and options
  var map = new google.maps.Map(document.getElementById("map_canvas"), {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  // Get the Json file data
  $.getJSON("locations.json", function (data) {
    // Loop through the data
    $.each(data, function (key, data) {
      var myLatlng = new google.maps.LatLng(data.lat, data.lng); // set position
      // Add marker to map
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
      });
      // Set info window content
      var infoContent = '<strong>' + data.name + '</strong>';
      infoContent += '<p>' + data.address + '</p>';
      // Add info window
      marker.info = new google.maps.InfoWindow({
        content: infoContent
      });
      // Add listener for info window
      google.maps.event.addListener(marker, 'click', function () {
        marker.info.open(map, marker);
      });
      // Add marker location to loc var
      var loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
      // extend bounds with loc
      bounds.extend(loc);
    });
  });
  var bounds = new google.maps.LatLngBounds();
  map.fitBounds(bounds); // auto zoom
  map.panToBounds(bounds); // auto center