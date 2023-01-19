import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Detail from "./pages/Detail";
import AddRecipe from "./pages/AddRecipe";
import Profile from "./pages/Profile";

// functional component
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "detail",
      element: <Detail />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "add-recipe",
      element: <AddRecipe />,
    },
    {
      path: "url-barunya-2",
      element: <AddRecipe />,
    },
  ]);

  // JSX
  return <RouterProvider router={router} />;
}

export default App;
