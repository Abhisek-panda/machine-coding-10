import Sidebar from "../Components/Sidebar";
import { useData } from "../main";

const Home = () => {
  const { totalInventoryProduct, totalDeliveredProduct, totalLowStockProduct } =
    useData();
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex">
        <div>
          <p>{totalInventoryProduct}</p>
          <h3>Total Stock</h3>
        </div>
        <div>
          <p>{totalDeliveredProduct}</p>
          <h3>Total Delivered</h3>
        </div>
        <div>
          <p>{totalLowStockProduct.length}</p>
          <h3>Low Stock Items</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
