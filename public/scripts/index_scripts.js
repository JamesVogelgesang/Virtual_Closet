
const goBtn = document.getElementById('goBtn');

const tempInp = document.getElementById('curTemp');
const feelsInp = document.getElementById('feelsLike');
const windInp = document.getElementById('wind');
const condState = document.getElementById('conditions');

// Required parts of url to call api

const baseURL = "http://api.weatherapi.com/v1"
const key = "710cec0720844542804140755230212"
const forecastExt = "current.json"


async function getWeather() {
    const searchBar = document.getElementById('weatherSearch');
    
    if (!searchBar.value){
        alert("Enter a location to search")
        
    } else {    
        const endpointURL = new URL(`http://api.weatherapi.com/v1/${ forecastExt }?key=${ key }&q=${ searchBar.value }`);

        const response = await fetch(endpointURL);

        if (response.status === 404 || response.status === 400){
            alert("Unknown Location")
        }

        const data = await response.json();
        // console.log(data)

        const tempf = data.current.temp_f
        tempInp.value = `${ tempf } F`

        const feels = data.current.feelslike_f
        feelsInp.value = `${ feels } F`
        
        const wind = data.current.wind_mph
        windInp.value = `${ wind } mph`

        const cond = data.current.condition.text
        condState.textContent = cond
    }
}

goBtn.addEventListener('click', getWeather)

const addBtn = document.getElementById('addClosetBtn')

addBtn.addEventListener('click', ()=> {
    console.log('yahoooooo')
})


