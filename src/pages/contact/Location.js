import React, { useEffect, useState } from 'react'
import { Apisodlist } from '../../components/apisode/apisodlist/Apisodlist'
import './location.scss'
export const Location = () => {
  const [data, setData] = useState([])
    const [apisodGroup,setApisodGroup] = useState([])
  const [paginations, setPagination] = useState(1)
  const [options , setOptions] = useState([])

  let episodeapi = `https://rickandmortyapi.com/api/location/${paginations}`;

  useEffect(() => {
    (async () => {
    const res = await fetch("https://rickandmortyapi.com/api/location").then(res => res.json())

    const data = await fetch(episodeapi).then((ress) => ress.json());
    setApisodGroup(data)
    const allData = [];
    data.residents.forEach(characterLink => {
      fetch(characterLink)
        .then(res => res.json())
        .then(singleCharacter => {
        allData.push(singleCharacter);
        if(allData.length === data.residents.length){
          setData(allData);
        }
      })
    });
    console.log(res);
      setOptions(Array(res.info.count).fill(res.info.count));
      
    })()
  },[episodeapi])
  function Select(evt) {
    if (evt.target.value === "") return;
    setPagination(evt.target.value);
  }
  // console.log(apisodGroup);
  return (
    <div>
      <h2 className='text-center mt-5'>Episode name: <span className='text-primary'>{apisodGroup?.episode}</span></h2>
      <p className='text-center mt-2'>Air date:<span className='text-primary'>{apisodGroup?.air_date} </span></p>
      <div className="select-group">
      <select className="select" onChange={Select}>
          <option value="">Episode number</option>
          {options.map((item, index) => (
            <option key={index} value={ index + 1}>
              {`${index + 1}`}
            </option>
          ))}
        </select>
      </div>
      {data.isLoading && <p className='mt-3'>Loading...</p>}
      {data.isError && <p className='mt-3'>Error :(</p>}
      <div className="page-group mt-5">
        {<div className="container"><Apisodlist date={data} /></div>}
      </div>

    </div>
  )
}
