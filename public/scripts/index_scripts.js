// const { query } = require("express");
const goBtn = document.getElementById('goBtn');
const tempInp = document.getElementById('curTemp');
const feelsInp = document.getElementById('feelsLike');
const windInp = document.getElementById('wind');
const condState = document.getElementById('conditions');
const searchBar = document.getElementById('weatherSearch');

async function populateWeatherForm (){
    if (!searchBar.value){
        alert("Enter a location to search")
        
    } else {    
        try {
            const response = await fetch(`/weather?location=${ searchBar.value }`)
            const weatherData = await response.json()

            const tempf = weatherData.current.temp_f
            tempInp.value = `${ tempf } F`
        
            const feels = weatherData.current.feelslike_f
            feelsInp.value = `${ feels } F`
            
            const wind = weatherData.current.wind_mph
            windInp.value = `${ wind } mph`
        
            const cond = weatherData.current.condition.text
            condState.textContent = cond
        } catch (error) {
            console.log("Error retrieving weather data")
        }
    }
}



goBtn.addEventListener('click', populateWeatherForm)

// function changeCloset (){
//     if (condState.textContent.length === 0){
//         alert("Look up a location's weather to see what you should wear!")
//     } else {
//         if (condState.textContent.includes("rain")){
//             console.log("RAINRAINRAIN")
//         }
//     }
// }

// changeClosetBtn.addEventListener("click", changeCloset)



const addBtn = document.getElementById('addClosetBtn')

addBtn.addEventListener('click', ()=> {
    console.log('yahoooooo')
})


