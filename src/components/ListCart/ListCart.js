import { useCart } from "@/hooks/useCart";
import { Button, CardImg } from "reactstrap";
import { map } from "lodash";
import { BASE_NAME } from "@/config/constants";

import { BsTrash3 } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

import styles from "./ListCart.module.scss";

export function ListCart(props) {
  const { product } = props;


  const { decreaseCart, incrementCart, deleteCart } = useCart();
  const format = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Cambia 'es-ES' por tu configuración regional
  };

  return (
    <div>
      <div className={styles.list}>
        <h4>CARRITO</h4>
        {map(product, (item) => (
          <div key={item.code} className={styles.card}>
            {item.image ? (
              <CardImg
                alt="Card image cap"

                src={item.image}
              />
            ) : (
              <CardImg
                alt="Card image cap"
                src={item.image_alterna}
                className={styles.skeleton}
              />
            )}

            <div className={styles.detalle}>
              <p className={styles.name}>{item.name}</p>

              <p className={styles.price}>$ {format(item.price)} </p>
              {/* <p className={styles.price}>Mayor: $ {item.price2}</p> */}

              <div className={styles.btn}>
                <span>
                  <AiOutlineMinusCircle
                    onClick={() => decreaseCart(item.id)}
                    size={30}
                    color="grey"
                  />
                  <p>{item.quantity}</p>
                  <AiFillPlusCircle
                    onClick={() => incrementCart(item.id)}
                    size={30}
                    color="green"
                  />
                </span>

                <Button
                  onClick={() => deleteCart(item.id)}
                  className={styles.btnDelete}
                >
                  <BsTrash3 size="15" color="red" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
