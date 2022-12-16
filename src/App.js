import { useEffect, useState } from "react";
import { CardList } from "./components/card/cardList/CardList";
import banner from "./assets/images/rick-morty-collection-banner_1400x.webp"
import "./assets/style/main.scss"

function App() {
  const [data, setData] = useState({
    data: [],
    isLoading: true,
    isError: false,
  })
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then(res => res.json())
      .then(data => {
        setData({
          data:data.results,
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
  },[])
  return (
    <div className="App">
      <img className="baanner" src={banner} alt="templat" />
      {data.isLoading && <p>Loading...</p>}
      {data.isError && <p>Error :(</p>}
      {data.data.length > 0 &&  <div className="container"><CardList data={data.data} /></div>}
     
    </div>
  );
}

export default App;
