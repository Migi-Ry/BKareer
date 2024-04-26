import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/authentication/LoginScreen";
import Register from "../screens/authentication/RegisterScreen";
import MBTITest from "../screens/MBTIScreen";
import CCTest from "../screens/CareerClusterScreen";
import News from "../screens/NewsScreen";
import MajorTest from "../screens/MajorTestScreen";
import MajorResult from "../screens/MajorResultScreen";
import Ikigai from "../screens/homeComponentsDetail/IkigaiDetail";
import MBTI from "../screens/homeComponentsDetail/MBTIDetail";
import Vikor from "../screens/homeComponentsDetail/VikorDetail";
import WeightedSum from "../screens/homeComponentsDetail/WeightedSumDetail";
import CC from "../screens/homeComponentsDetail/CareerClusterDetail";
import IQ from "../screens/homeComponentsDetail/IqDetail";
import EQ from "../screens/homeComponentsDetail/EqDetail";

function Navbar() {
  return (
    <Router>
      <>
        <nav id="nav">
          <Link className="appName" to="/">BKareer</Link>
          <ul>
            <li className="font-18"><Link to="/">Trang chủ</Link></li>
            <li className="font-18"><Link to="/mbti">Trắc nghiệm MBTI</Link></li>
            <li className="font-18"><Link to="/career">Khám phá năng lực nghề nghiệp</Link></li>
            <li className="font-18"><Link to="/news">Tin tức</Link></li>
            <button className="white-outline-btn font-18">Đăng nhập</button>
          </ul>
        </nav>
      </>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/majorTest" element={<MajorTest />} />
        <Route path="/majorResult" element={<MajorResult />} />
        <Route path="/ikigai" element={<Ikigai />} />
        <Route path="/mbtiDetail" element={<MBTI />} />
        <Route path="/ccDetail" element={<CC />} />
        <Route path="/iq" element={<IQ />} />
        <Route path="/eq" element={<EQ />} />
        <Route path="/weightedSum" element={<WeightedSum />} />
        <Route path="/vikor" element={<Vikor />} />
        <Route path="/mbti" element={<MBTITest />} />
        <Route path="/career" element={<CCTest />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
