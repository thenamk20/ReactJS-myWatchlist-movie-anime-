
// import './App.css';
import { GlobalClass } from './component'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Home, AnimeWatchlist, MovieWatchlist, MovieWatched, AnimeWatched,
  MainHeader, AddAnime, AddMovie, DetailProvider
} from './component'


function App() {
  return (
    <GlobalClass>
      <BrowserRouter>
        <MainHeader></MainHeader>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movie' element={<MovieWatchlist />}></Route>
          <Route path='/movie/watched' element = {<MovieWatched />}></Route>
          <Route path='/movie/add' element={<DetailProvider><AddMovie /></DetailProvider>}></Route>

          <Route path='/anime' element={<AnimeWatchlist />} ></Route>
          <Route path='/anime/watched' element = {< AnimeWatched/>}></Route>
          <Route path='/anime/add' element={<DetailProvider><AddAnime /></DetailProvider>}></Route>

        </Routes>
      </BrowserRouter>
    </GlobalClass>

  );
}
export default App;
