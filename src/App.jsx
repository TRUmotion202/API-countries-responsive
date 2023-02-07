import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CountryCard from './components/CountryCard'
import NavBar from './components/NavBar'
import "../src/components/styles/CountryFilter.css"
function App() {

  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState("")
  const [nameCountry, setNameCountry] = useState("")
  const [theme, setTheme] = useState("dark")

  const handleChangeRegion = e => setRegion(e.target.value)

  const countriesFilter = countries.filter(country => country.name.common.toLowerCase().includes(nameCountry.toLowerCase()))

  const changetheme = () => setTheme(theme === "dark" ? "light" : "dark")

  useEffect(() => {
    const URL = `https://restcountries.com/v3.1/${region ? "region/" + region : "all"}`
    axios.get(URL)
      .then(res => setCountries(res.data))
      .catch(err => console.log(err))

  }, [region])

  return (
    <div className="App" id={theme}>
      <NavBar changetheme={changetheme} theme={theme} />

      <div className="container__buttons">
        <div className='input__container'>
          <i className='input__icon bx bx-search'></i>
          <input className='input__input' type="text" value={nameCountry} placeholder="Search for a country" onChange={e => setNameCountry(e.target.value)} />
        </div>

        <select className='selection' onChange={handleChangeRegion}>
          <option value="">All</option>

          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

      </div>

      <section className='app__container'>
        {
          countriesFilter.map((country) => <CountryCard country={country} key={country.flags.svg} />)
        }
      </section>
    </div>
  )
}

export default App
