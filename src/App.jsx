import { useState,useEffect } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {fetchDataFromApi} from "./utils/api"
import { getApiConfiguration,getGenres } from './store/homeSlice'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Details from './pages/deatils/Details'
import Erorr from './pages/404/Erorr'
import Home from './pages/home/Home'
import searchResult from './pages/searchResult/searchResult'
import Explore from './pages/explore/Explore'
import { all } from 'axios'
 
function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state)=> state.home);
  useEffect(()=>{
    fetchApiConfig();
    genreCall();
  }, []);
  const fetchApiConfig=()=>{
    fetchDataFromApi('/configuration')
    .then((res) => {
       console.log(res);
       const url ={
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
       };
       dispatch(getApiConfiguration(url));
    });
  }; 
  const genreCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
        promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
        return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
};
    return (
    <>
  <BrowserRouter>
  <Header/>
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/:mediaType/:id' element={<Details/>}/>
   <Route path='/explore/:mediaType' element={<Explore/>}/>
   <Route path='/search/query' element={<searchResult/>}/>
   <Route path='*' element={<Erorr/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
