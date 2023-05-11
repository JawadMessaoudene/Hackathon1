import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Form from "./pages/Form"
import { Header } from "./Header"
import ContextUserInfo from "./contexts/ContextUserInfo";
import { useState } from "react";

const MainRoutes = () => {
  const [userInformation, setUserInformation] = useState({});
  return (
    <>
      <ContextUserInfo.Provider value={{userInformation, setUserInformation}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </ContextUserInfo.Provider>
    </>
  );
}
export default MainRoutes;