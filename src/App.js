import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <ProductsPage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
