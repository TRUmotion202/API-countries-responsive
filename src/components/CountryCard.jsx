import React from 'react'
import "./styles/CountryCard.css"

const CountryCard = ({ country }) => {
  return (
    <article key={country.flags.svg} className="container">
      <div className='content__img'>
        <img src={country.flags.svg} alt={country.flags.alt} />
      </div>
      <section className='content__data'>
        <h3 className='content__title'>{country.name.common}</h3>
        <ul className='content__list'>
          <li className='content__list-data'><span>Population:</span> {country.population}</li>
          <li className='content__list-data'><span>Region:</span> {country.region}</li>
          <li className='content__list-data'><span>Capital:</span> {country.capital}</li>
        </ul>
      </section>
    </article>
  )
}

export default CountryCard