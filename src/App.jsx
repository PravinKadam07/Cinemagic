import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice.js";
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";
import Explore from "./pages/explore/Explore.jsx";
import Details from "./pages/details/Details.jsx";
import SearchResult from "./pages/searchResult/SearchResult.jsx";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => {
    return state.home;
  });
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = (req, res) => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaTyle/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediatype" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
        <Route />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
