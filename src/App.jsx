// React Router DOM imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import MainLayout from "./layouts/MainLayout";

// Pages
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          
        }
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
