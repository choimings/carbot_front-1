// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Notification from './components/notification/notification';
import Login from './components/auth/login';
import Join from './components/auth/join';
import CarInfo from './components/carinfo/carInfo';
import CarSelect from './components/carselect/carSelect';
import Layout from './components/Layout';
import FindID from './components/auth/findID';
import FindPW from './components/auth/findPW';
import ResetPW from './components/auth/resetPW';
import Mypage from './components/mypage/mypage';
import CallbotIcon from './components/callbot/callbotIcon';
import AdminLogin from './components/management/login/AdminLogin';
import AdminDashboard from './components/management/full/AdminDashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Layout을 모든 페이지의 상위 컴포넌트로 설정 */}
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/findID" element={<FindID />} />
            <Route path="/findPW" element={<FindPW />} />
            <Route path="/resetPW" element={<ResetPW />} />
            <Route path="/CarInfo" element={<CarInfo />} />
            <Route path="/CarSelect" element={<CarSelect />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
        <CallbotIcon />
      </div>
    </Router>
  );
};

export default App;
