const apiKey = '56e3472f920d06a692d2b0fd0ee40b76'
let cityName = 'ängelholm'

let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`

console.log(url);