import { Link, useHistory } from "react-router-dom";
import { ISearchProductItem } from "../../../api/search/search-types";
import DBox from "../../../core/DBox";
import DIcon from "../../../core/DIcon";
import { useProductListStyles } from "./useProductListStyles";

interface IProps {
  product: ISearchProductItem;
}

function ProductListItem({ product }: IProps) {
  const classes = useProductListStyles();
  const history = useHistory();

  const goToDetails = (productId: number) => {
    history.push(`product/${product.id}`);
  };

  return (
    <DBox
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pt={2}
      pb={2}
      pl={1}
      pr={1}
    >
      <img
        className={classes.productImage}
        src={product.images.main}
        alt={product.title}
        onClick={() => goToDetails(product.id)}
      />
      <h3
        className={classes.productTitle}
        onClick={() => goToDetails(product.id)}
      >
        {product.title}
      </h3>
      <DBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={0.5}
        width="100%"
      >
        <Link className={classes.detailsLink} to={`product/${product.id}`}>
          جزئیات
        </Link>
        <div className={classes.addToCardButton}>
          <DIcon name="plus" size="12px" color="commonBlack" weight="bold" />
        </div>
      </DBox>
    </DBox>
  );
}

export default ProductListItem;
