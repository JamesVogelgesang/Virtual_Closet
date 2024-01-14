//const { render } = require("ejs");

// const { query } = require("express");
const goBtn = document.getElementById('goBtn');
const tempInp = document.getElementById('curTemp');
const feelsInp = document.getElementById('feelsLike');
const windInp = document.getElementById('wind');
const condState = document.getElementById('conditions');
const searchBar = document.getElementById('weatherSearch');
const changeClosetBtn = document.getElementById('changeClosetBtn');

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


// TO DO: DETERMINE WHY CLOSET IS NOT BEING UPDATED AFTER Get Closet IS CLICKED
async function changeCloset (){
    const condition = condState.textContent
    if(condition.length == 0){
        alert('Look up a location to see what you should wear!')
    } else if (condition) {
        try {
            const response = await fetch(`/weather/type?condition=${ condition }`)
            const renderedCloset = await response.text()

            const parser = new DOMParser()
            const doc = parser.parseFromString(renderedCloset, 'text/html')

            const newClosetContent = doc.getElementById('closetCols').innerHTML

            
            const newCloset = document.getElementById('closetCols')
            newCloset.innerHTML = newClosetContent
        } catch (error) {
            console.log({"error": error})
        }
    }
}

changeClosetBtn.addEventListener("click", changeCloset)



const addBtn = document.getElementById('addClosetBtn')

addBtn.addEventListener('click', ()=> {
    console.log('yahoooooo')
})


