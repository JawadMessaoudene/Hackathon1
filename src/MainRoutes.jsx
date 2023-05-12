import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Form from "./pages/Form"
import { Header } from "./Header"
import ContextUserInfo from "./contexts/ContextUserInfo";
import { useState } from "react";
import Map from "./pages/Map";
import { ToastContainer } from "react-toastify";

const MainRoutes = () => {
  const [userInformation, setUserInformation] = useState({});
  

  return (
    <>
      
        <ContextUserInfo.Provider
          value={{ userInformation, setUserInformation }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </ContextUserInfo.Provider>
      <ToastContainer></ToastContainer>
    </>
  );
}
export default MainRoutes;