import React from 'react'
import { Apisoditem } from '../apisoditem/Apisoditem'
import './apisodlist.scss'
export const Apisodlist = ({data}) => {
  return (
    <ul className="list">
      {data.map((item,index) => <Apisoditem key={index} item={item} />)}
  </ul>
  )
}



