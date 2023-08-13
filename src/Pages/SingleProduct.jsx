import { useParams } from "react-router-dom";
import { useData } from "../main";
import Sidebar from "../Components/Sidebar";

const SingleProduct = () => {
  const { newInventoryData } = useData();
  const { productId } = useParams();
  console.log({ productId });

  const singleProduct = newInventoryData?.find(
    (product) => product?.id.toString() === productId?.toString()
  );

  return (
    <div className="flex gap-5">
      <div>
        <Sidebar />
      </div>
      <div className="flex gap-5 mt-5">
        <div>
          <img
            src={singleProduct?.imageUrl}
            alt={singleProduct?.name}
            className="w-80 h-48 object-cover shadow-lg"
          />
        </div>
        <div>
          <h1>Name: {singleProduct?.name}</h1>
          <p>Department:{singleProduct?.department}</p>
          <p>Price: {singleProduct?.price}</p>
          <p>Stock: {singleProduct?.stock}</p>
          <p>Supplier: {singleProduct?.supplier}</p>
          <p>Desc: {singleProduct?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
