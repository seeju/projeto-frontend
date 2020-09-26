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
    const coordinates = [position.coords.latitude,position.coords.longitude,position.coords.altitude];
    let [lat,lon,alt] = coordinates;


    var mapOptions = {
        center: new google.maps.LatLng(lat, lon),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
    var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
    var ponto = new google.maps.LatLng(lat,lon);
    var marker = new google.maps.Marker({
        position: ponto,
        map: map,
        title:"Você está aqui",
        });

    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=9d83e3a82c05f8f05996b636f17a770d`;
    fetchApi(url);
  
    x.innerHTML=`Latitude:  ${lat} <br>Longitude: ${lon}  <br>Altitude: ${alt} metros`; 
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

function fetchApi(url) {
  let temp = document.querySelector('span');
  fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
    temp.innerHTML = `Temperatura:  ${tempInCelsius}°C`;
  })
  .catch((err) => {
    temp.innerHTML = `Dados não disponíveis`;
  })
}

