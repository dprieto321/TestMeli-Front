import { DetailProps } from "../../interfaces";
import { formatCurrency } from "../../utils/formatPrice";
import BuyButton from "../ButtonBuy";
import "./detail.scss";

export const Detail = ({ product }: DetailProps) => {
  if (!product) return;
  return (
    <>
      <div className="detailItem">
        <div className="detailItemTop">
          <div className="detailImage">
            <img
              src={product.picture}
              alt={`Imagen del producto: ${product.title}`}
              loading="lazy"
            ></img>
          </div>
          <div className="detailInfo">
            <p className="detailCondition">
              {product.condition === "new" ? "Nuevo" : "Usado"} -{" "}
              {product.sold_quantity} vendidos
            </p>
            <h3 className="detailTitle">{product.title}</h3>
            <p className="detailPrice">
              {formatCurrency.format(product.price.amount || 0)}
            </p>
            <BuyButton type="button">Comprar</BuyButton>
          </div>
        </div>
        <div className="detailDescription">
          <p className="titleDescription">Descripción del producto</p>
          <p className="description">{product.description}</p>
        </div>
      </div>
    </>
  );
};
