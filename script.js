async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod === 200) {
            document.getElementById("weather").innerHTML = `
                <h2>${data.name}</h2>
                <div class="temp">${data.main.temp}°C</div>
                <div class="desc">${data.weather[0].description}</div>

                <div class="details">
                    <span> ${data.main.humidity}%</span>
                    <span> ${data.wind.speed} km/h</span>
                </div>
            `;
        } else {
            document.getElementById("weather").innerHTML = "City not found ";
        }
    } catch (err) {
        document.getElementById("weather").innerHTML = "Error fetching data ";
    }
}