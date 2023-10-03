let inputEl = document.getElementById("input");
let selectFromEl = document.getElementById("selectFromDegree");
let selectToEl = document.getElementById("selectToDegree");
let resultEl = document.getElementById("result");
let btnEl = document.getElementById("button");


btnEl.addEventListener("click", function(){
    let degrees = parseInt(inputEl.value);
    //console.log(typeof degrees);

    let selectedFromDegree = selectFromEl.value;
    let selectedToDegree = selectToEl.value;

    if(inputEl.value == "") {
        alert("Enter a Valid Degrees")
    }
    else{
            //Temperature Conversion Formula from Celsius to Fahrenheit 
        if (selectedFromDegree === 'Celsius' && selectedToDegree === "Fahrenheit") {
            let convertFahrenheit = degrees * (9 / 5)  + 32;
            resultEl.textContent = convertFahrenheit.toFixed(2) + "°F";
            resultEl.classList.add("paragraph");
        }
            //Temperature Conversion Formula from Fahrenheit to Celsius
        if (selectedFromDegree === 'Fahrenheit' && selectedToDegree === 'Celsius') {
            let convertCelsius = (degrees - 32) * (5 / 9);
            resultEl.textContent = convertCelsius.toFixed(2) + "°C";
            resultEl.classList.add("paragraph");
        }
            //Temperature Conversion Formula from Celsius to Kelvin
        if (selectedFromDegree === 'Celsius' && selectedToDegree === "Kelvin") {
            let convertKelvin = (degrees + 273.15);
            resultEl.textContent = convertKelvin.toFixed(2) + "K";
            resultEl.classList.add("paragraph");
        }
            //Temperature Conversion Formula from Kelvin to Celsius
        if (selectedFromDegree === 'Kelvin' && selectedToDegree === "Celsius") {
            let convertCelsius = (degrees - 273.15);
            resultEl.textContent = convertCelsius.toFixed(2) + "°C";
            resultEl.classList.add("paragraph");
        }
            //Temperature Conversion Formula from Fahrenheit to Kelvin
        if (selectedFromDegree === "Fahrenheit" && selectedToDegree === "Kelvin") {
            let convertKelvin = (degrees - 32) * (5/9) + 273.15;
            resultEl.textContent = convertKelvin.toFixed(2) + "K";
            resultEl.classList.add("paragraph");
        }
            //Temperature Conversion Formula from Kelvin to Fahrenheit 
        if (selectedFromDegree === "Kelvin" && selectedToDegree === "Fahrenheit") {
            let convertFahrenheit = (degrees - 273.15) * (9/5) + 32;
            resultEl.textContent = convertFahrenheit.toFixed(2) + "°F";
            resultEl.classList.add("paragraph");
        }
        
        if (selectedFromDegree === "Celsius" && selectedToDegree === "Celsius") {
            resultEl.textContent = degrees + "°C";
            resultEl.classList.add("paragraph");
        }
        if (selectedFromDegree === "Fahrenheit" && selectedToDegree === "Fahrenheit") {
            resultEl.textContent = degrees + "°F";
            resultEl.classList.add("paragraph");
        }
        if (selectedFromDegree === "Kelvin" && selectedToDegree === "Kelvin") {
            resultEl.textContent = degrees + "K";
            resultEl.classList.add("paragraph");
        }
    }
});