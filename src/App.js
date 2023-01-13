import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Detail from "./pages/Detail";
import AddRecipe from "./pages/AddRecipe";
import Profile from "./pages/Profile";
import Maintenance from "./pages/Maintenance";
import Logout from "./pages/Auth/Logout";
import React from "react";

// import redux
import store from "./store/index";
import { Provider } from "react-redux";

// functional component
function App() {
  const maintenance = ["/register", "/add-recipe"];
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
    {
      path: "logout",
      element: <Logout />,
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
