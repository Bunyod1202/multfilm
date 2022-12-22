import React from 'react'
import { Link } from 'react-router-dom'

export const Apisoditem = ({item}) => {
  return (

    <Link className="cards-inner"  to={`card/${item.id}`} >
    <li className="cards" key={item.id}>
      {
        (() => {
          if (item.status === 'Alive') {
           return <span className="badge alive">{item.status}</span>
          } else if (item.status === 'Dead') {
            return <span className="badge dead">{item.status}</span>
          } else {
            return <span className="badge unknowns">{item.status}</span>
          }
        })()
      }
     
      <img className="card-img" src={item.image} alt="template" />
      <div className="card-content">
        <h3 className="card-title">{item.name}</h3>
        <p className="unknown">Unknown - {item.species }</p>
        <div>
          <span className="location">Last known location:</span>
        <a className="location-address" href={item.location.url}>{item.location.name}</a>
        </div>
        <span className="gender">gender:{item.gender}</span>
        </div>
    </li>
      </Link>

  )
}

