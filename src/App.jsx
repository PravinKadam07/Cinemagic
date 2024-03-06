import './App.css'
import { useState,useEffect } from 'react'
import { fetchDataFromApi } from "./utils/api.js"


function App() {

  useEffect(()=>{
    apiTesting()
  },[])

const apiTesting=(req,res)=>{

  fetchDataFromApi("/movie/popular")
 .then((res)=>{
  console.log(res);
}
)}

  return (
    <>
     App
    </>
  )
}

export default App
