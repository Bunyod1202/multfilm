import React from 'react'

export const ButtonFilter = ({text,setStatuss ,name}) => {
  return (
    <div>
      <input onClick={()=> setStatuss(text)} type="radio" className="btn-check" name="btnradio" id={`btnradio1 ${text + name}`} autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor={`btnradio1 ${text+name}`}>{text}</label>
    </div>
  )
}
