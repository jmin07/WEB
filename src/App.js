import { Routes, Route } from "react-router-dom";
import "./style/main.css";
// import Trace from "./routes/Trace";
// import Home from "./routes/Home";
// import Header from "./components/Header";
// import EasyData from "./routes/EasyData";
import SignUp from "./routes/SignUp";
import ForgotPW from "./routes/ForgotPW";
import Mainpage from "./routes/Mainpage";
import Datapage from "./routes/Datapage";
import Tracepage from "./routes/Tracepage";
import Searchpage from "./routes/Searchpage";
import Statisticspage from "./routes/Statisticspage";
import Sharepage from "./routes/Sharepage";

import Title from "./components/Title";

import { useState } from "react";
import { TitleContext } from "./contexts/TitleContext";
import { SearchDataContext } from "./contexts/SearchDataContext";
import { DBdataContext } from "./contexts/DBdataContext";
import { SumDataContext } from "./contexts/SumDataContext";
import { AllDBdataContext } from "./contexts/AllDBdataContext";

function App() {
  const [titleOn, setTitleOn] = useState(true);
  const [searchData, setSearchData] = useState({
    userCity: "",
    userArea: "",
    userValue: "",
  });
  const [DBdata, setDBdata] = useState([
    {
      URL: "",
      Title: "",
      Price: "",
      Classification: "",
      Region: "",
      Province: "",
      Nickname: "",
      Temperature: "",
      UpdateTime: "",
    },
  ]);
  const [allDBdata, setAllDBdata] = useState([
    {
      URL: "",
      Title: "",
      Price: "",
      Classification: "",
      Region: "",
      Province: "",
      Nickname: "",
      Temperature: "",
      UpdateTime: "",
    },
  ]);
  const [sumData, setSumData] = useState([]);

  return (
    <TitleContext.Provider value={{ titleOn, setTitleOn }}>
      <SearchDataContext.Provider value={{ searchData, setSearchData }}>
        <DBdataContext.Provider value={{ DBdata, setDBdata }}>
          <SumDataContext.Provider value={{ sumData, setSumData }}>
            <AllDBdataContext.Provider value={{ allDBdata, setAllDBdata }}>
              <Routes>
                <Route path="/" element={<Title />} />
                <Route path="main" element={<Mainpage />} />
                <Route path="trace" element={<Tracepage />} />
                <Route path="data" element={<Datapage />} />
                <Route path="search" element={<Searchpage />} />
                <Route path="share" element={<Sharepage />} />
                <Route path="statistics" element={<Statisticspage />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="forgotpw" element={<ForgotPW />} />
              </Routes>
            </AllDBdataContext.Provider>
          </SumDataContext.Provider>
        </DBdataContext.Provider>
      </SearchDataContext.Provider>
    </TitleContext.Provider>
  );
}

export default App;
