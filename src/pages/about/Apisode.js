import React, { useEffect, useState } from 'react'
import { Apisodlist } from '../../components/apisode/apisodlist/Apisodlist'
import { Pagination } from '../../components/pagination/Pagination'

export const Apisode = () => {
  const [data, setData] = useState({
    data: [],
    isLoading: true,
    isError: false,
  })
  const [datas, setDatas] = useState({
    data: [],
    isLoading: true,
    isError: false,
  })
  const [paginations,setPagination]= useState(1)
  let api = `https://rickandmortyapi.com/api/episode/1`
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
let frogmentdata = []

  data.data.characters?.forEach(element => {
    fetch(element)
      .then(res => res.json())
      .then(data => {
        frogmentdata.push(data);
        // console.log(data.data.characters);
        if (frogmentdata.length === data.characters.length) {
          setDatas({
            data: frogmentdata,
            isLoading: false,
            isError: false,
          })
        }
        
      })
      .catch(err => {
        setDatas({
          data: [],
          isLoading: false,
          isError: true,
        })
      });

  })



  return (
    <div>
      <h2 className='text-center mt-5'>Episode name: <span className='text-primary'>{data.data.episode}</span></h2>
      <p className='text-center mt-2'>Air date:<span className='text-primary'>{data.data.air_date} </span></p>
      {data.isLoading && <p className='mt-3'>Loading...</p>}
      {data.isError && <p className='mt-3'>Error :(</p>}
      <div className="page-group mt-5">
      {data.data.results?.length > 0 && <div className="container"><Apisodlist data={data.data.results} /></div>}
      </div>
      <Pagination pagecaunts={data.data.info?.pages} cauntpage={setPagination} paginations={paginations} />
    </div>
  )
}
