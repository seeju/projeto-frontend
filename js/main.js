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
    x.innerHTML="Latitude: " + lat + "<br>Longitude: " + lon + "<br>Altitude: " + alt + " metros"; 
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