import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration,getGenres } from './store/homeSlice.js'
import { useState,useEffect } from 'react'
import { fetchDataFromApi } from "./utils/api.js"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from"./pages/home/Home.jsx"
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import PageNotFound from "./pages/404/PageNotFound.jsx"
import Explore from "./pages/explore/Explore.jsx"
import Details from "./pages/details/Details.jsx"
import SearchResult from "./pages/searchResult/SearchResult.jsx"


function App() {
  const dispatch = useDispatch()
  const {url}=useSelector((state)=>{
    return state.home;
  })
  console.log(url)

  useEffect(()=>{
    apiTesting()
  },[])

const apiTesting=(req,res)=>{

  fetchDataFromApi("/movie/popular")
 .then((res)=>{
  console.log(res);
  dispatch(getApiConfiguration(res))
}
)}

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/:mediaTyle/:id' element={<Details/>}/>
    <Route path='/search/:query' element={<SearchResult/>}/>
    <Route path='/explore/:mediatype' element={<Explore/>}/>
    <Route path='*' element={<PageNotFound/>}/>
    <Route/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
