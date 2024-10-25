
const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const API_KEY="ed6b6ec0e3339a37971283d932579218";   //api key for weather 

const getCityCoordinates = () => {
     const cityName = cityInput.value.trim();  // get user entered city name and remove extra spaces
     
if (!cityName) return;   // return if cityname is empty
const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
 
fetch(GEOCODING_API_URL).then(res=>res.json()).then(data =>{
    console.log(data)
}).catch(()=>{
alert("An error occurred while fetching the coordinates!");
})
   
}

searchButton.addEventListener("click", getCityCoordinates);