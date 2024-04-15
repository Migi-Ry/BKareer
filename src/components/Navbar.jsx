import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomeScreen from "../screens/HomeScreen";
import MBTITest from "../screens/MBTIScreen";
import CCTest from "../screens/CareerClusterScreen";
import News from "../screens/NewsScreen";
import MajorTest from "../screens/MajorTestScreen";
import MajorResult from "../screens/MajorResultScreen";
import Ikigai from "../screens/IkigaiDetail";

function Navbar() {
  return (
    <Router>
      <header>
        <nav className="nav">
          <Link className="appName" to="/">BKareer</Link>
          <ul>
            <li className="font-18"><Link to="/">Trang chủ</Link></li>
            <li className="font-18"><Link to="/mbti">Trắc nghiệm MBTI</Link></li>
            <li className="font-18"><Link to="/career">Nhóm ngành yêu thích</Link></li>
            <li className="font-18"><Link to="/news">Tin tức</Link></li>
            <button className="white-outline-btn font-18" type="button">Đăng nhập</button>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/majorTest" element={<MajorTest />} />
        <Route path="/majorResult" element={<MajorResult />} />
        <Route path="/ikigai" element={<Ikigai />} />
        <Route path="/mbti" element={<MBTITest />} />
        <Route path="/career" element={<CCTest />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
