var x=document.getElementById("location");
function getLocation(){
    {
    if ('geolocation' in navigator)
      {
      //geolocation is available FAZ ALGO//
      navigator.geolocation.getCurrentPosition(showPosition,showError, options);
      }
    else{x.innerHTML="Geolocalização não disponível.";}
    }

  var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
  };
}

function showPosition(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var alt = position.coords.altitude;
    var mapOptions = {
        center: new google.maps.LatLng(lat, lon),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map_canvas"),
          mapOptions)
    //component.src = 'https://maps.google.com/maps?='+ lat + lon + '&t=&z=13&ie=UTF8&iwloc=&output=embed';
    x.innerHTML="Latitude: " + lat + "<br>Longitude: " + lon + "<br>Altitude: " + alt + " metros"; 
    //indow.location.href = 'https://maps.google.com/maps?='+ lat + lon + '&t=&z=13&ie=UTF8&iwloc=&output=embed';
}
  
function showError(error) {
    switch(error.code) 
      {
      case error.PERMISSION_DENIED:
        x.innerHTML="Permissão negada."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML="Localização indisponível."
        break;
      case error.TIMEOUT:
        x.innerHTML="A requisição expirou."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML="Erro desconhecido."
        break;
      }
}

function initialize(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var mapOptions = {
      center: new google.maps.LatLng(lat, lon),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
  }