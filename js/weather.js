const API_KEY = "e7ed39c14dd24bb48ad61835cd0b4245";
//const API_KEY = config.apikey;

console.log(API_KEY);

function onGeoSuccess(position) {
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) =>  {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

}

function onGeoError() {
    alert("error");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);