import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Form from "./pages/Form"
import { Header } from "./Header"
import ContextUserInfo from "./contexts/ContextUserInfo";
import { useState } from "react";
import Map from "./pages/Map";
import ContextGuides from "./contexts/ContextGuides";

const MainRoutes = () => {
  const [userInformation, setUserInformation] = useState({});
  const [ guideInformation, setGuideinformation] = useState()

  return (
    <>
      <ContextGuides.Provider value={{ guideInformation, setGuideinformation}}>
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
      </ContextGuides.Provider>
    </>
  );
}
export default MainRoutes;