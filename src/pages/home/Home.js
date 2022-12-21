import React, { useEffect, useState } from 'react'
import { Search } from '../../assets/icons/Icons'
import { CardList } from '../../components/card/cardList/CardList'
import { Button } from '../../components/ui/button/Button'
import { Input } from '../../components/ui/input/Input'
import debounce from 'lodash.debounce'
import { Pagination } from '../../components/pagination/Pagination'
import "./home.scss"
import { Filter } from '../../components/filter/Filter'
export const Home = () => {
  const [data, setData] = useState({
    data: [],
    isLoading: true,
    isError: false,
  })
  const [paginations,setPagination]= useState(1)
  const [search, setSearch] = useState("")
  const [statuss, setStatuss] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")
  const updateSearch = e => setSearch(e.target.value)
  const distconactiel = debounce(updateSearch, 500)
  let api = `https://rickandmortyapi.com/api/character/?page=${paginations}&name=${search}&status=${statuss}&gender=${gender}&species=${species}`
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
  console.log(data.data.results);
  return (
    <div className='container
    '>
      <form className='form'>
        <Input className="input-search" onChange={distconactiel} type="text" />
        <Button className="btn-search"><Search/></Button>
      </form>
      {data.isLoading && <p>Loading...</p>}
      {data.isError && <p>Error :(</p>}
      <div className="page-group">
        <Filter setStatus={setStatuss} setSpecies={setSpecies} setGender={setGender} setPagination={setPagination} setSearch={setSearch} />
      {data.data.results?.length > 0 && <div className="container"><CardList data={data.data.results} /></div>}
      </div>
      <Pagination pagecaunts={data.data.info?.pages} cauntpage={setPagination} paginations={paginations} />
   </div>
  )
}
