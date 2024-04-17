import { useState} from 'react'
import './App.css'
import fetchWeather from './helpers/fetchWeather'
import CardsWeather from './components/CardsWeather'


function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  const getWeather = () =>{
    fetchWeather(city)
    .then((data) => setWeather(data))
    .catch((error) => console.log(error))
  }

  return (
    <div>
      <h1>CLIMA APP</h1>
      <div>
        <input 
          type="text" 
          placeholder="Busca la ciudad"
          onBlur={(e) => setCity(e.target.value)}
        />
        <button className="button"
          onClick={getWeather}
        >
          BUSCAR
        </button>
        <CardsWeather weather={weather}/>
      </div>
    </div>
  )
}
export default App
