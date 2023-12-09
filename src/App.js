import './App.css';
import { SignUp } from './components/createaccount/createaccount';
import { Home } from './components/home/home';
import { Error404 } from './components/Errorhandling/error';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Login } from './components/loginorlogout/login';
import { useUsersValue } from './Context/userContext';
import { useEffect } from 'react';

function App() {
  const { isLogin, setIslogin } = useUsersValue()

  useEffect(() => {
    const check = window.localStorage.getItem("islogin");
    if (check === "true") {
      setIslogin(true);
    }
  }, [])
  const router = createBrowserRouter([
    {
      path: '/chatme/',
      errorElement: <Error404 />,
      children: [
        {index:true, element: isLogin? <Home />:<Navigate to="/chatme/login" /> },
        {path: '/chatme/signup', element: <SignUp /> },
        {path: '/chatme/login', element: <Login /> },
      ],
    },
  ]); 
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
