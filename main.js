const inputValue = document.getElementById("inputVal");
const countryName = document.getElementById('country-name');
const BASE_URL = {
    api: "https://api.openweathermap.org/data/2.5/weather",
    api_key: "cd2400fa7444fc0dbc10dac6d40bf20c",
    units: "metric"
}

const handleSearchInput = e => {
    const inputVal = e.target.value.trim();
    console.log(inputVal);
    setTimeout(() => {
        fetch(`${BASE_URL.api}?q=${inputVal}&units=${BASE_URL.units}&appid=${BASE_URL.api_key}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                countryName.textContent = data.weather[0].main;
            });
    }, 500);
}

inputValue.addEventListener('input', handleSearchInput);