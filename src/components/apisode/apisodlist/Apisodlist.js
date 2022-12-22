import React from 'react'
import { Apisoditem } from '../apisoditem/Apisoditem'
import './apisodlist.scss'
export const Apisodlist = ({date}) => {
  return (
    <ul className="list">
      {date?.map((item,index) => <Apisoditem key={index} item={item} />)}
  </ul>
  )
}



