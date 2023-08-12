import Sidebar from "../Components/Sidebar";
import { useData } from "../main";

const Home = () => {
  const { totalInventoryProduct, totalDeliveredProduct, totalLowStockProduct } =
    useData();
  return (
    <div className="flex gap-5">
      <div>
        <Sidebar />
      </div>
      <div className="flex gap-5 items-start mt-5">
        <div className="w-48 bg-neutral-200 h-24 flex flex-col items-center rounded-md justify-center">
          <p className="text-xl text-green-600 font-bold">
            {totalInventoryProduct}
          </p>
          <h3>Total Stock</h3>
        </div>
        <div className="w-48 bg-neutral-200 h-24 flex flex-col items-center rounded-md justify-center">
          <p className="text-xl text-yellow-400 font-bold">
            {totalDeliveredProduct}
          </p>
          <h3>Total Delivered</h3>
        </div>
        <div className="w-48 bg-neutral-200 h-24 flex flex-col items-center rounded-md justify-center">
          <p className="text-xl text-red-500 font-bold">
            {totalLowStockProduct.length}
          </p>
          <h3>Low Stock Items</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
