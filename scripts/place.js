function calculateWindChill() {
    const temperature = document.getElementById('temperature').value;
    const windSpeed = document.getElementById('windSpeed').value;

    if (temperature === "" || windSpeed === "") {
        alert("Please enter both temperature and wind speed values.");
        return;
    }

    const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));

    document.getElementById('windChillResult').textContent = windChill.toFixed(2) + " °F";
}
