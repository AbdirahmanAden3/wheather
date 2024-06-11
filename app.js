


let icon = document.getElementById("icon");
let city = document.getElementById("city");
let condition = document.getElementById("condition");
let search = document.getElementById("search");
let cityName = document.getElementById("cityName");
let temp = document.getElementById("temp");
let feels = document.getElementById("feels");
let hu = document.getElementById("h");
let visibility = document.getElementById("visibility");
let pressure = document.getElementById("pressure");
let wind = document.getElementById("wind");
let day = document.getElementById("day");



search.addEventListener("click", () => {
let address = document.getElementById("city").value;

    get(address)
    if(address == ""){
        alert("please enter a city")
    }
    else{
        get(address)

    }

    


})
const text = document.getElementById("texts");
let htm = "";

const forecastData = [
    {
        day: "Monday",
        icon: "cloud",
        temp: "30 °C",
        high: "2 °C"
    },
    {
        day: "Tuesday",
        icon: "wb_sunny",
        temp: "32 °C",
        high: "35 °C"
    },
    {
        day: "Wednesday",
        icon: "rainy",
        temp: "28 °C",
        high: "30 °C"
    },
    {
        day: "Thursday",
        icon: "cloudy",
        temp: "29 °C",
        high: "31 °C"
    },
    {
        day: "Friday",
        icon: "storm",
        temp: "27 °C",
        high: "29 °C"
    }
];

forecastData.forEach(data => {
    const div = document.createElement("div");
    div.classList.add("text");
    div.innerHTML = `
        <p>${data.day}</p>
        <span class="material-symbols-outlined">${data.icon}</span>
        <p>${data.temp}</p>
        <span>${data.high}</span>
    `;
    text.appendChild(div);
});


        function get(address){
          let Apikey =  `2f745fa85d563da5adb87b6cd4b81caf`;
         let  url  =     `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${Apikey}&units=metric`;


            fetch(url)
            .then(response => response.json())
             
            .then(data => {
                console.log(data);
                icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                temp.innerHTML = `${data.main.temp} °C`;
                city.innerHTML = `${data.name}`;    
                condition.innerHTML = `${data.weather[0].description}`;
                cityName.innerHTML = `${data.name}`;
               feels.innerHTML=          data.main.feels_like + " °C"
                pressure      =            data.main.pressure
                hu.innerHTML =             data.main.humidity + "%"
                wind.innerHTML =           data.wind.speed + " m/s"
                visibility.innerHTML =        data.visibility + " m"
                pressure.innerHTML = `pressure ${data.main} hPa`;
                // wind.innerHTML = `wind ${data.wind.speed} m/s`

            })

        }

        get("london")

        




// let api_key = "2f745fa85d563da5adb87b6cd4b81caf";
// let url = `https://api.openweathermap.org/data/2.5/weather?q=&appid=${api_key}&units=metric`;



// const getweather = async () => {
//     const request = await fetch(url);
//     const data = await request.json();
//     return data


// }
// getweather().then(data => {
//     console.log(data);

// })
