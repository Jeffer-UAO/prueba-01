import Link from "next/link";
import { CardImg, CardTitle } from "reactstrap";
import { BASE_NAME } from "@/config/constants";
import styles from "./Retail.module.scss";
import { map } from "lodash";

export function Promotion(props) {
  const { products } = props;

  const scale = "c_scale,f_auto,q_50,w_400/";
  const upload = "image/upload/";

  return (
    <div className={styles.content}>
      <h2>Promociones</h2>

      <div className={styles.list}>
        {map(
          products,
          (product, index) =>
            product.offer && (
              <>
                {product.images ? (
                  <Link
                    key={index}
                    href={`/${product.slug}`}
                    className={styles.list__product}
                  >
                    <CardImg
                      alt="Card image cap"
                      src={
                        BASE_NAME +
                        upload +
                        scale +
                        product.images.split(upload)[1]
                      }
                    />

                    <div className={styles.product}>
                      <CardTitle className={styles.title}>
                        <h5>
                          {product.name} {product.name_extend}
                        </h5>
                        <h6>$ {product.price1}</h6>
                      </CardTitle>
                    </div>
                  </Link>
                ) : (
                  <Link
                    key={index}
                    href={`/${product.slug}`}
                    className={styles.list__product}
                  >
                    <CardImg alt="Card image cap" src={product.image_alterna} />
                    <div className={styles.product}>
                      <CardTitle className={styles.title}>
                        <h5>
                          {product.name} {product.name_extend}
                        </h5>
                        <h6>$ {product.price1}</h6>
                      </CardTitle>
                    </div>
                  </Link>
                )}
              </>
            )
        )}
      </div>
    </div>
  );
}
