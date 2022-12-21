import React from 'react'

export const Apisoditem = ({item}) => {
  return (
    <li className="cards">
    {
      (() => {
        if (item.status === 'Alive') {
         return <span className="badge alive"></span>
        } else if (item.status === 'Dead') {
          return <span className="badge dead"></span>
        } else {
          return <span className="badge unknowns"></span>
        }
      })()
    }
   
    <img className="card-img" src="" alt="template" />
    <div className="card-content">
      <h3 className="card-title">k</h3>
      <p className="unknown">Unknown - </p>
      <div>
        <span className="location">Last known location:</span>
      <a className="location-address" href="j">i</a>
      </div>
      <span className="gender">gender:</span>
      </div>
  </li>
  )
}

