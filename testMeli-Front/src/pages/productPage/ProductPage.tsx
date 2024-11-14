import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../layout/container";
import MainLayout from "../../layout/mainLayout";
import Breadcrumb from "../../components/Breadcrumb";
import "./productPage.scss";
import { getItemById } from "../../services/item.service";
import { Detail } from "../../components/Detail";
import { IDetail } from "../../interfaces";
import { Spinner } from "../../components/Spinner";

export const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [item, setItem] = useState<IDetail | null>(null);
  useEffect(() => {
    if (productId) {
      setLoading(true);
      setError(null);

      getItemById(productId)
        .then((response) => {
          setItem(response.item);
        })
        .catch((error) => {
          console.error("Error fetching item details:", error);
          setError("Hubo un problema al obtener los detalles del producto.");
        })
        .finally(() => setLoading(false));
    }
  }, [productId]);

  return (
    <MainLayout>
      <Container>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p>{error}</p>
        ) : item ? (
          <>
            <Breadcrumb categories={[item.title]} />
            <Container className="containerDetail">
              <Detail product={item} />
            </Container>
          </>
        ) : (
          <p>No se encontró el producto.</p>
        )}
      </Container>
    </MainLayout>
  );
};
