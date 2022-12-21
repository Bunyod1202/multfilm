
import { Route, Routes } from "react-router-dom";
import "./assets/style/main.scss"
import { CardId } from "./components/cardid/CardId";
import { Header } from "./components/header/Header";
import { Apisode } from "./pages/about/Apisode";
import { Home } from "./pages/home/Home";

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardId />} />
        <Route path="/apisode" element={<Apisode />} />
      </Routes>
    </div>
  );
}

export default App;
