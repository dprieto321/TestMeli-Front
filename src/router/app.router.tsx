import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../pages/searchPage";
import { ResultsPage } from "../pages/resultsPage";
import { ProductPage } from "../pages/productPage/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/items",
    element: <ResultsPage />,
  },
  {
    path: "/items/:productId",
    element: <ProductPage />,
  },
]);

export default router;
