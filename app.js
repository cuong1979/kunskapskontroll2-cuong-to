// skapa en variable till min key
const apiKey = '56e3472f920d06a692d2b0fd0ee40b76';
// skapa en variable till stad 
let cityName = 'landskrona';
// skapa en url till API och lägg in cityName variable och API key variable
const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

// hämtas alla elemnet
let beskrivning = document.querySelector('h1');
let imgIkon = document.querySelector('.icon');
let temp = document.querySelector('.temperature');
let vind = document.querySelector('.vindshastigt');
let luft = document.querySelector('.luftfuktighet');


// fetch(url).then((response => response.json())).then(data => console.log(data));
// hämta url/API gör om den till .json 
fetch(url).then(function(response){
        return response.json();
    // hämta alla data vi behöver och sortera dom
}).then(function(data){
    let beskrivningen = data.weather[0].description;
    let väderIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let väderTemp = Math.round(data.main.temp);
    let väderVind = data.wind.speed;
    let väderluftfuktig = data.main.humidity;
   
// byt elemneter som vi har hämtat från data
    beskrivning.innerText = beskrivningen;
    imgIkon.src = väderIcon;
    temp.innerText = väderTemp;
    vind.innerText = väderVind;
    luft.innerText = väderluftfuktig;
    //console.log(väderluftfuktig);
 
})