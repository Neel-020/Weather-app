

const key = "2cd4759db90b529b47becf8499035d1f";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(){

    const city = document.querySelector(".input").value
    const response = await fetch(url+`${city}&appid=${key}`)
    let data = await response.json();
    

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed;
}
