let apiKey = "a90a7dfc54284e5bb5a92035232610";

let displayBox = document.querySelector(".displaybox");
let inputBar = document.querySelector("#input");
let searchButton = document.querySelector("#button");





document.addEventListener("keydown", (a) => {
    let key = a.key || a.code; // Use key or code to get the key that was pressed
    if (key === "Enter") {
        let query = inputBar.value;
        fetchApi(query);
        inputBar.value = ""; // Use value to clear the input field
    }
});
searchButton.addEventListener("click", function() {
    let query = inputBar.value;

    if (query == "") {
        alert("Please enter the city ");
    } else {
        fetchApi(query);
    }
    inputBar.value = "";
})

async function fetchApi(query = "gwalior") {
    let apidata = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`);

    let obj = await apidata.json();

    screenUpdate(obj);
}


fetchApi();

function screenUpdate(obj) {
    console.log(obj);
    let weather = obj.current.condition.text;
    let icon = obj.current.condition.icon;
    let temp = obj.current.temp_c;
    let location = obj.location.name;
    let humidity = obj.current.humidity;
    let time = obj.current.last_updated;



    //  console.log(weather , icon , temp , location , humidity , time)

    displayBox.innerHTML = ` 
        <div class="box3">
        <p id="name">${location}</p>
        <p id="date">${time}</p>
    </div>
    <div class="box1"><img src=${icon} alt="" class="weatherimg">
        <p> <span id="deegri"> ${temp} <sup>o</sup>C</span></p>

    </div>

    <div class="box3">
        <p id="name">${humidity} %</p>
        <p id="date">${weather}</p>

    </div>
    `
}