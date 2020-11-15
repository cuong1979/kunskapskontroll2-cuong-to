// skapa en variable till min key
const apiKey = '56e3472f920d06a692d2b0fd0ee40b76';

// skapa en variable till stad 
//let cityName = 'ängelholm';

// hämtas alla elemnet
let beskrivning = document.querySelector('h1');
let imgIkon = document.querySelector('.icon');
let temp = document.querySelector('.temperature');
let vind = document.querySelector('.vindshastigt');
let luft = document.querySelector('.luftfuktighet');



    // hämta button från html för att event
    let btn = document.querySelector('button')
    // button bli min event med click
    btn.addEventListener('click', function(event){
    //  preventDefault gör att sök text i den fallen inte försvinner.
    event.preventDefault();
    // hämta input med class 
    let stadNamninput = document.querySelector('.stad-input');
    // skapa variable till för att pusha upp i input fälten.
    let cityName = stadNamninput.value;
   
        // skapa en url till API och lägg in cityName variable och API key variable
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

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
    changeColor(väderTemp);

    }).catch(function(error) {
        alert('Stad som du har sökt finns inte');
    });
    
}) 
let body = document.querySelector('body');
const frusen = -25
const isKall = -10
const välKall = 0;
const kall = 5;
const varm = 10;
const välVarm = 20;
const het = 30;

function changeColor(väderTemp) {

    if (väderTemp <= frusen) {
        body.style.backgroundColor = 'red';
    } else if (väderTemp <= isKall) {
        body.style.backgroundColor = 'blue';
    } else if (väderTemp <= välKall) {
        body.style.backgroundColor = 'yellow';
    } else if (väderTemp <= kall) {
        body.style.backgroundColor = 'orange';
    } else if (väderTemp <= varm) {
        body.style.backgroundColor = 'navy';
    } else if (väderTemp <= välVarm) {
        body.style.backgroundColor = 'olive';
    } else if (väderTemp <= het && weatherTemperatur > 40) {
        body.style.backgroundColor = 'grey';
    } else {
        body.style.backgroundColor = 'pink';
    }

}



