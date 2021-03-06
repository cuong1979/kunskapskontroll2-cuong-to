    // skapa en variable till min key
    const apiKey = '56e3472f920d06a692d2b0fd0ee40b76'; 
   

    // skapa en variable till stad 
    let cityName;

    // hämtas alla elemnet
    let beskrivning = document.querySelector('h1');
    let imgIkon = document.querySelector('.icon');
    let temp = document.querySelector('.temperature');
    let vind = document.querySelector('.vindshastigt');
    let luft = document.querySelector('.luftfuktighet');

    // hämta button från html för att event
    let submit = document.querySelector('.stad-btn');
     
    // hämta input med class 
     let stadNamninput = document.querySelector('.stad-input');
     
     // button bli min event med click
    submit.addEventListener('click', function(event){
    //  preventDefault gör att sök text i den fallen inte försvinner.
    event.preventDefault();
   
    // skapa variable till för att pusha upp i input fälten.
    cityName = stadNamninput.value;
    hämtaVäder(cityName);
    
});

 function hämtaVäder(cityName){
    // skapa en url till API och lägg in cityName variable och API key variable
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    // hämta url/API gör om den till .json 
    fetch(url).then(function(response){

        // om det bli error status untanför 300 upp då kasta det ut ett error till ett felmeddandet
        if(response.status >= 200 && response.status < 300){
            return response.json();
        }else{
            throw 'Något gick fel';
        }
       
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
    temp.innerText = `${väderTemp} °C` ;
    vind.innerText =  `vindhastighet ${väderVind}` ;
    luft.innerText =  `luftfukighet ${väderluftfuktig}` ;
    
    //hämta function från väderTemp 
    changeColor(väderTemp);
    ändraFärgText(väderluftfuktig);
    // fånga fel 
  }).catch(function(error) {
      // visa fel meddelandet 
     alert('Stad som du har sökt finns inte');
    console.log(error)
});
       
};

//skapa if-sats så man kan ändra bakgrund bilder från olika tempaturer.
function changeColor(väderTemp) {
    //hämta body i html 
    let body = document.querySelector('body');
    
    if (väderTemp <= -10 && väderTemp < 0) {
        body.style.backgroundImage = "url('/Img/vinter-10.jpg')";
    } else if (väderTemp <= 0 && väderTemp < 5) {
        body.style.backgroundImage = "url('/Img/vinter0.jpg')";
    } else if (väderTemp <= 5 && väderTemp < 10) {
        body.style.backgroundImage = "url('/Img/snö5.jpg')";
    } else if (väderTemp <= 10 && väderTemp < 20) {
        body.style.backgroundImage = "url('/Img/vår10.jpg')";
    } else if (väderTemp <= 20 && väderTemp < 30) {
        body.style.backgroundImage = "url('/Img/somma20.jpg')";
    } else {
        body.style.backgroundImage = "url('/Img/somma30.jpg')";
    }

};


// hämta class luftfuktig i html.
let ändraLuftFuktighet = document.querySelector('.luftfuktighet')

//skapa if-sats så man kan ändra bakgrund bilder från olika tempaturer.
function ändraFärgText(väderluftfuktig){
    if(väderluftfuktig <= 20){
        ändraLuftFuktighet.style.color = 'blue'
    }
    else if(väderluftfuktig <= 40){
        ändraLuftFuktighet.style.color = 'navy'
    }
    else if(väderluftfuktig <= 60){
        ändraLuftFuktighet.style.color = 'yellow'
    }
    else if(väderluftfuktig <= 80){
        ändraLuftFuktighet.style.color = 'orange'
    }
    else{
        ändraLuftFuktighet.style.color = 'red'
    }
}



