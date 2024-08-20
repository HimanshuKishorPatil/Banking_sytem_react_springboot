import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { MainPage } from './component/Admin-Navbar/MainPage';
import Navbar from './component/Navbar';
import { AuthGuard } from './guard/auth.guard';
import ForgotPassword from './pages/ForgotPassword';
import { Index } from './pages/Index';
import Login from './pages/Login';
import NetBanking from './pages/NetBanking';
import Signup from './pages/Signup';
import UnAuthorized from './pages/UnAuthorized';
import AllTransaction from './pages/user/AllTransaction';
import Balance from './pages/user/Balance';
import ChangePassword from './pages/user/ChangePassword';
import SendMoney from './pages/user/SendMoney';
import UHome from './pages/user/UHome';
import UViewProfile from './pages/user/ViewProfile';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/401' element={<UnAuthorized />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
        <Route path='/netbanking' element={<NetBanking />}></Route>
        {/* <Route path='/user/applyJob/:id' element={<ApplyJob />}></Route> */}

        {/* <Route path='/user/*'>
        <Route path='applyJob/:id' element={<AuthGuard roles={['ROLE_USER']}><ApplyJob /></AuthGuard>} />
        <Route path='appliedJob' element={<AuthGuard roles={['ROLE_USER']}><AppliedJob /></AuthGuard>} />
      </Route> */}


        <Route path='/admin/*' element={
          <AuthGuard roles={['ROLE_ADMIN']}>
            <MainPage />
          </AuthGuard>
        }> </Route>




        <Route path='/emp/*' element={
          <AuthGuard roles={['ROLE_EMP']}>
            <MainPage />
          </AuthGuard>
        }></Route>

        <Route path='/user/*' >
          <Route path='uhome' element={<AuthGuard roles={['ROLE_USER']}><UHome /></AuthGuard>}></Route>
          <Route path='allTransaction' element={<AuthGuard roles={['ROLE_USER']}><AllTransaction /></AuthGuard>}></Route>
          <Route path='balance' element={<AuthGuard roles={['ROLE_USER']}><Balance /></AuthGuard>}></Route>
          <Route path='changePassword' element={<AuthGuard roles={['ROLE_USER']}><ChangePassword /></AuthGuard>}></Route>
          <Route path='sendMoney' element={<AuthGuard roles={['ROLE_USER']}><SendMoney /></AuthGuard>}></Route>
          <Route path='viewProfile' element={<AuthGuard roles={['ROLE_USER']}><UViewProfile /></AuthGuard>}></Route>
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
