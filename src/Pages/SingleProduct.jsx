import { useParams } from "react-router-dom";
import { useData } from "../main";

const SingleProduct = () => {
  const { newInventoryData } = useData();
  const { productId } = useParams();

  const singleProduct = newInventoryData?.find(
    (product) => product?.id.toString() === productId.toString()
  );
  console.log(singleProduct);

  return <div></div>;
};

export default SingleProduct;
