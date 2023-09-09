const inputBox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind');


async function checkWeather(city){
    const api_key= "c12b56f0247b4891f4a8092a24aeab37";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}` ;
    
    const weather_data = await fetch(`${url}`).then(response => response.json());
    
    temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    
    humidity.innerHTML =`${weather_data.main.humidity}%`;
    
  
    console.log(weather_data);



    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/images/cloudy.png";
            break;
        case 'Clear':
            weather_img.src = "/images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/images/rain.png";
            break;   
            
        case 'Mist':
            weather_img.src = "/images/mist.png"; 
            break;
         case 'Snow':
            weather_img.src = "/images/snow.png";
            break;
         case 'Drizzle':
            weather_img.src = "/images/rain.png";
            break;    
    }
    
}

searchbtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});
