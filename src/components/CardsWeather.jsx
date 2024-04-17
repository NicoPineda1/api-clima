import React from 'react'

const CardsWeather = ({weather}) => {
  return (
    <>
      {weather && (
          <div className="contenedor">
            <div className="cuadro">
            
            <h3>{weather.name}</h3>
            <p><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/></p>
        
            </div>
            <div className="cuadro">
            <div className='titulo'>
              <h4>Temperatura</h4>
              <h2>{weather.main.temp}°C</h2>
            </div>
              </div>
            <div className="cuadro">
            <div className='titulo'>
            <h4>Descripción</h4>
              <h2>{weather.weather[0].description}</h2></div>
            </div>
            <div className="cuadro">
            <div className='titulo'>
            <h4>Humedad</h4>
              <h2>{weather.main.humidity}%</h2></div>
            </div>
          </div>
        )}
    </>
  )
}

export default CardsWeather
