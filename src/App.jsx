import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Notifikasi from "./pages/notifikasi/Notifikasi";
import Akun from "./pages/akun/Akun";
import ChangePass from "./pages/akun/ChangePass";
import History from "./pages/akun/History";
import Course from "./pages/course/Course";
import CourseRun from "./pages/course/CourseRun";
import ResetPaswd from "./auth/ResetPaswd";
import DetailCourse from "./pages/course/DetailCourse";
import DashboardAdmin from "./users/admin/DashboardAdmin";
import KelolaKelas from "./users/admin/KelolaKelas";
import Bars from "./pages/akun/Bar";
import OTPPage from "./auth/otp/Otp";
import CoursePayment from "./pages/course/CoursePayment";
import Succespayment from "./pages/course/paymentsucces";
import ForgotPassword from "./auth/ForgotPassword";
import NotFound from "./components/notFound/NotFound";
import DetailCourseRun from "./pages/course/detailCourseRun";
import User from "./users/admin/User";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/auth/otp" element={<OTPPage />} />
        <Route path="/bar" element={<Bars />} />
        <Route path="/userprofile" element={<Akun />} />
        <Route path="/changepass" element={<ChangePass />} />
        <Route path="/history" element={<History />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/resetPassword" element={<ResetPaswd />} />
        <Route path="/detailcourse/:title" element={<DetailCourse />} />
        <Route path="/detailcourserun/:title" element={<DetailCourseRun/>}/>
        <Route path="/course" element={<Course />} />
        <Route path="/course/payment/:title" element={<CoursePayment />} />
        <Route path="/courserun" element={<CourseRun />} />
        <Route path="/paymentsuccess" element={<Succespayment/>}/>
        <Route path="/admin/dashboard" element={<DashboardAdmin />}/>
        <Route path="/admin/kelas" element={<KelolaKelas />} />
        <Route path="/admin/user" element={<User/>} />
        <Route path="/auth/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
