import "./App.css";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import NavbarPage from "./NavbarPage";
import { useEffect, useState } from "react";
import AxiosInstance from './AxiosInstance'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async() => {
    try {
      const response = await AxiosInstance.get('portfolio')
      setData(response.data)
    } catch (err) {
      console.log('Error !')
    }
  }

  console.log(data)

  return (
    <>
    <NavbarPage/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
