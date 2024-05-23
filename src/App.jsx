import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";
import { Toaster } from "react-hot-toast";
import { CreateBlog } from "./Components/createBlog/CreateBlog";
import Dashboard from "./Components/dashboard/Dashboard";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import { UserLogin } from "./Components/login/UserLogin";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs/>} />
          <Route path="/bloginfo/:id" element={<BlogInfo/>} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/createblog" element={
            <ProtectedRouteForAdmin>
              <CreateBlog />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  )
}

export default App

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "admin.user@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/userlogin'} />
  }
}