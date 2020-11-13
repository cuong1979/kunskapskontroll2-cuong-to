


let form = document.querySelector('#vädret');
form.addEventListener('click', function(event){
    event.preventDefault();

    let stadNameInput = document.querySelector('#stad');

    let cityName = stadNameInput.value;

    let apiKey = '56e3472f920d06a692d2b0fd0ee40b76'
 let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`

 fetch(url).then(
    function(respsone){
        return respsone.json();
}
).then(
function(data){
    console.log(data);
    let description = data.weather[0].description;
    let icon = data.weather[0].icon;
    let temperatur = data.main.temp;
    let vindhastighet = data.wind.speed;
    let luftfuktighet = data.main.humidity;
}
).catch(
function(error){
    console.error('något har gått fel');
})

})



