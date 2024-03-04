import React from "react";

import { CardImg } from "reactstrap";

import styles from "./SoldOut.module.scss";

export function SoldOut(props) {
  const { product } = props;

  const format = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Cambia 'es-ES' por tu configuración regional
  };

  return (
    <div className={styles.list__product}>
      <div className={styles.soldout}>
        <span>AGOTADO</span>
      </div>

      {product.image ? (
        <CardImg alt="Card image cap" src={product?.image} />
      ) : (
        <CardImg alt="Card image cap" src={product?.image_alterna} />
      )}

      <h5>{product.name}</h5>
      <div className={styles.product}>
        <div className={styles.price}></div>
      </div>
    </div>
  );
}
