import React from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import Login from "./pages/Auth/Login";
import AddRecipe from "./pages/AddRecipe";
import Register from "./pages/Auth/Register";
import Maintenance from "./pages/Maintenance";
import store from "./stores/index";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// functional component
function App() {
  const maintenance = ["/detail", "/profile", "/register", "/add-recipe"];
  const [isPageMaintenance, setIsPageMaintenance] = React.useState(
    process.env.REACT_APP_IS_MAINTENANCE === "true" &&
      maintenance.find((res) => res === document.location.pathname)
  );
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
      path: "detail/:id",
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
  ]);

  if (isPageMaintenance) {
    return (
      <Maintenance
        maintenanceList={maintenance}
        turnOnMaintenance={() => setIsPageMaintenance(true)}
        turnOffMaintenance={() => setIsPageMaintenance(false)}
      />
    );
  } else {
    // JSX
    return (
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  }
}

export default App;
