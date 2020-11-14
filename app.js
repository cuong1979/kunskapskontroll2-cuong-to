
//hämta from och se skapa en click event 
let form = document.querySelector('#vädret');
form.addEventListener('click', function(event){
    event.preventDefault();
    
// hämta input så när skriva in stad som man vill söka för
    let stadNameInput = document.querySelector('#stad');
    let cityName = stadNameInput.value;

    // här min API keys kod
 let apiKey = '56e3472f920d06a692d2b0fd0ee40b76'
 // här skapa jag add en cityname så man samma länka med väder app
 let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`


 fetch(url).then(
    function(respsone){
        return respsone.json();
}
).then(
function(data){
    console.log(data);
    // här hämta jag alla info jag behöver
    let description = data.weather[0].description;
    let icon = data.weather[0].icon;
    let temperatur = Math.round(data.main.temp);
    let vindhastighet = data.wind.speed;
    let luftfuktighet = data.main.humidity;
    
    // här lägga jag in mina info så man kan läsa den webbläsare
   let beskriving = document.querySelector('.description');
   let temp = document.querySelector('.temperatur');
   let vind = document.querySelector('.vindhastighet');
   let luftfuktigt = document.querySelector('.luftfuktighet');

    beskriving.textContent = description;
    temp.textContent = temperatur;
    vind.textContent = vindhastighet;
    luftfuktigt.textContent = luftfuktighet;

    
    
    
}
).catch(
function(error){
    console.error('något har gått fel');

})

})


    





