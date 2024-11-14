import { Link } from "react-router-dom";
import "./productCard.scss";
import ic_shipping from "../../assets/ic_shipping.png";
import { formatCurrency } from "../../utils/formatPrice";
import { ProductCardProps } from "../../interfaces";

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      className="linkProduct"
      to={`/items/${product.id}`}
      title={product.title}
    >
      <div className="productCard">
        <div className="productCardContent">
          <div className="leftProduct">
            <img
              src={product.picture}
              alt={`Imagen del producto: ${product.title}`}
              loading="lazy"
            />
          </div>
          <div className="centerProduct">
            <div className="containerPrice">
              <p>{formatCurrency.format(product.price.amount)}</p>
              {product.free_shipping && (
                <img
                  src={ic_shipping}
                  alt={`envio gratis: ${product.title}`}
                  loading="lazy"
                />
              )}
            </div>
            <h3>{product.title}</h3>
          </div>
        </div>
        <div className="rightProduct">
          {product.free_shipping && <p>¡Envío Gratis!</p>}
        </div>
      </div>
    </Link>
  );
};
