import "./App.css";
import HomePage from "./Components/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Statistic from "../src/Components/Statistic/Statistic";
import Setting from "./Components/Setting/Setting";
import FChart from "./Components/Chart/Fchart";

import MainLayout from "./layout/MainLayout";
import { Nlogin } from "./Components/NLogin/Nlogin";
import { NRegister } from "./Components/NRegister/NRegister";
import MoneyManager from "./Components/Main/MoneyManager";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/statistic" element={<Statistic />} />
            <Route path="/chart" element={<FChart />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
          <Route path="/login" element={<Nlogin />} />

          <Route path="/register" element={<NRegister />} />
          <Route path="/test" element={<MoneyManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
