import { Route, Routes, Outlet } from "react-router-dom";
import './App.css';
import Navigation from './components/common/Navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import About from './pages/About';
import Blog from './pages/Blog';
import Category from "./pages/Category";
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Course from "./pages/Course";
import Home from './pages/Home';
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import MyCourses from "./pages/MyCourses";
import NotFound from "./pages/NotFound";
import OwnedCourses from "./pages/MyCourses/OwnedCourses";
import LikedCourses from "./pages/MyCourses/LikedCourses";
import Checkout from "./pages/Checkout";
import Footer from './components/common/Footer/Footer'
import Learn from "./pages/Learn";
import Article from "./pages/Article";
import MyProfile from "./pages/Profile/MyProfile";
import OrderHistory from "./pages/Profile/OrderHistory";
import DeleteProfile from "./pages/Profile/DeleteProfile";

const AppLayout = () => (
  <>
    <div className='p-5 pt-0 max-w-7xl mx-auto '>
      <Navigation />
      <div className="min-h-screen">
        <Outlet /> {/* <-- nested routes rendered here */}
      </div>
      <Footer />
    </div>

  </>
);

const EmptyLayout = () => (
  <>
    <div className='p-10 mt-10 max-w-7xl mx-auto'>
      <Outlet /> {/* <-- nested routes rendered here */}
    </div>

  </>
);

const App = () => {

  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Empty layout */}
        <Route element={<EmptyLayout />} >
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* main content inside app layout*/}
        <Route element={<AppLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog/:categorySlug" element={<Blog />} />
          <Route path="/blog/:categorySlug/:authorSlug/:slug" element={<Article />} />
          <Route path="/categories/:slug" element={<Category />} />
          <Route path="/course/:slug" element={<Course />} />
          <Route path="/course/:slug/learn" element={<Learn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="my-courses" element={<MyCourses />}>
            <Route index element={<OwnedCourses />} />
            <Route path="owned" element={<OwnedCourses />} />
            <Route path="liked" element={<LikedCourses />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="profile" element={<Profile />} >
            <Route index element={<MyProfile />} />
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path="delete-profile" element={<DeleteProfile />} />
            <Route path="*" element={<NotFound />} />
          </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
