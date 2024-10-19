function calculateWindChill() {
    const temperature = document.getElementById('temperature').innerText;
    const windSpeed = document.getElementById('windSpeed').innerText;

    if (temperature === "" || windSpeed === "") {
        alert("Please enter both temperature and wind speed values.");
        return;
    }

    const temp = parseFloat(temperature);
    const speed = parseFloat(windSpeed);

    var windChillValue = "N/A"

    if ((temp <= 10 && speed > 4.8)) {
        const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
        windChillValue = windChill.toFixed(2) + " °C"
    }

    document.getElementById('windChillResult').textContent = windChillValue;
}

calculateWindChill();
