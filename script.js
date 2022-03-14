function getlocation(){         //function to get current location
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPostion);
    }
    else{
        x.innerHTML = "Geolocation is not supported in your browser"
        }
}

function showPostion(position){
    x.innerHTML = "Latitude : " + position.coords.latitude + 
    "<br> Longitude: " + position.coords.longitude;
}