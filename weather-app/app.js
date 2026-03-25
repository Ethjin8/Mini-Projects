async function getWeatherData(locationName) {
  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${locationName}`,
    );
    const geoData = await geoRes.json();

    console.log(geoData);

    const latitude = geoData.results[0].latitude;
    const longitude = geoData.results[0].longitude;

    const forecastRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=weather_code,temperature_2m,relative_humidity_2m,wind_speed_10m`,
    );
    const forecastData = await forecastRes.json();

    console.log(forecastData);

    const tempData = forecastData.current.temperature_2m;
    const humidityData = forecastData.current.relative_humidity_2m;
    const windData = forecastData.current.wind_speed_10m;
    const weatherCode = forecastData.current.weather_code

    return {
      location: locationName,
      temperature: tempData,
      humidity: humidityData,
      wind_speed: windData,
      weather_code: weatherCode,
    };
  } catch (error) {
    console.log(error);
  }
}
