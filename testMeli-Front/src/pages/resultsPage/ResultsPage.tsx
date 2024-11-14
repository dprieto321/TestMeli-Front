import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../../layout/container";
import MainLayout from "../../layout/mainLayout";
import { ProductList } from "./ProductList";
import Breadcrumb from "../../components/Breadcrumb";
import { getItems } from "../../services/list.service";
import "./results.scss";
import { Spinner } from "../../components/Spinner";
import { IProduct } from "../../interfaces";

export const ResultsPage = () => {
  const [searchParams] = useSearchParams();
  const searchProduct = searchParams.get("search") || "";
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (searchProduct) {
      setLoading(true);
      setError(null);

      getItems(searchProduct)
        .then((response) => {
          setProducts(response.items);
          setCategories(response.categories);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setError("Hubo un problema al obtener los resultados.");
        })
        .finally(() => setLoading(false));
    }
  }, [searchProduct]);

  return (
    <MainLayout>
      <Container>
        <Breadcrumb categories={categories} />
        <Container className="containerResults">
          {loading ? (
            <Spinner />
          ) : error ? (
            <p>{error}</p>
          ) : products.length ? (
            <ProductList products={products} />
          ) : (
            <p>{error}</p>
          )}
        </Container>
      </Container>
    </MainLayout>
  );
};
