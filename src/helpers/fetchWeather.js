const fetchWeather = async (city) =>{
    const APIKEY = '41adcf96efc6be8d625818449aa40aa0'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
    const response = await fetch(url)
    const weather = await response.json()
    return weather
  }

export default fetchWeather