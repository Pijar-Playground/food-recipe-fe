import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Detail from "./pages/Detail";
import AddRecipe from "./pages/AddRecipe";

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
      path: "add-recipe",
      element: <AddRecipe />,
    },
  ]);

  // JSX
  return <RouterProvider router={router} />;
}

export default App;
