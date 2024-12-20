// src/App.jsx
import { useState } from 'react';
const YOUR_API_KEY = '93926e8f19954ff8892185839241302'

const App = () => {

  const [city, setCity] = useState('')

 const handleChange = (event) => {
  setCity(event.target.value)// will take the value from the input field and will set the city state variable equal to the input value
 }
const handleSubmit = async(event) => {
  event.preventDefault();
  let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}`);
  response = await response.json();
  console.log(response);}

return (
  <form onSubmit={handleSubmit}>
    <div>
      Please enter your city name for the weather:
      <input type="text" onChange={handleChange} />
      <input type="submit" value="Get my forecast!" />
    </div>
  </form>
)
}

export default App