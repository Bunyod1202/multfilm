import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import'./cardid.scss'

export const CardId = () => {
  const params = useParams() 
  const [data, setData] = useState({
    data: [],
    isLoading: true,
    isError: false,
  })

let api = `https://rickandmortyapi.com/api/character/${params.id}`
  useEffect(() => {
    fetch(api) 
      .then(res => res.json())
      .then(data => {
        setData({
          data:data,
          isLoading: false,
          isError: false, 
        })
      
     })
    .catch(err => {
      setData({
          data:[],
          isLoading: false,
          isError: true,
        })
     })
  }, [api])

  return (
    <div>
       {data.isLoading && <p>Loading...</p>}
      {data.isError && <p>Error :(</p>}
      <div className="page-group">
      
        {data.data &&
          <div className="container">
            <div className="card-wrapper">
          
              <div className="cardbox">
                <li className="cardss" >
                  {
                    (() => {
                      if (data.data.status === 'Alive') {
                        return <span className="badge alive">{data.data.status}</span>
                      } else if (data.data.status === 'Dead') {
                        return <span className="badge dead">{data.data.status}</span>
                      } else {
                        return <span className="badge unknowns">{data.data.status}</span>
                      }
                    })()
                  }
     
                  <img className="card-imgs" src={data.data.image} alt="template" />
                  <div className="card-content">
                    <h3 className="card-title">{data.data.name}</h3>
                    <p className="unknown">Unknown - {data.data.species}</p>
                    <div>
                      <span className="location">Last known location:</span>
                      <a className="location-address"
                        href={data.data?.location?.url}>                      
                      {data.data.location?.name}</a>
                    </div>
                    <span className="gender">gender:{data.data.gender}</span>
                  </div>
                </li>
              </div>
        
            </div>
          </div>
        } </div>
    </div>
  )
}
