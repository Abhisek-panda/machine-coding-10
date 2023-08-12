import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useData } from "../main";

const Products = () => {
  const { newInventoryData } = useData();
  return (
    <div className="flex gap-5">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div>
          <Navbar />
        </div>
        <div className="">
          <table className="w-full">
            <thead className="bg-gray-200 ">
              <tr>
                <td>Image</td>
                <td>Name</td>
                <td>Description</td>
                <td>Price</td>
                <td>Stock</td>
                <td>Supplier</td>
              </tr>
            </thead>
            <tbody>
              {newInventoryData.map((product) => {
                return (
                  <tr key={product?.id}>
                    <td>
                      <img
                        src={product?.imageUrl}
                        alt=""
                        className="h-12 w-12 object-fill"
                      />
                    </td>
                    <td>{product?.name}</td>
                    <td>{product?.description}</td>
                    <td>${product?.price}</td>
                    <td>{product?.stock}</td>
                    <td>{product?.supplier}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
