import { useNavigate } from "react-router-dom";
import { useData } from "../main";

const Navbar = () => {
  const navigate = useNavigate();
  const { filters, setFilters } = useData();

  return (
    <div className="flex justify-between gap-10 flex-row w-full items-center">
      <h1>Products</h1>
      <div className="border-2 border-solid border-black rounded-sm">
        <select
          name=""
          id=""
          onChange={(e) =>
            setFilters({ ...filters, department: e.target.value })
          }
        >
          <option value="all">All</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
      </div>
      <div>
        <input
          type="checkbox"
          name=""
          id="low-stock-item"
          checked={filters?.lowStock}
          onChange={() =>
            setFilters({ ...filters, lowStock: !filters?.lowStock })
          }
        />
        <label htmlFor="low-stock-item">Low Stock Items</label>
      </div>
      <div className="border-2 border-solid border-black rounded-sm">
        <select
          name=""
          id=""
          onChange={(e) => setFilters({ ...filters, sorting: e.target.value })}
        >
          <option value="" hidden>
            Select Sort By:{" "}
          </option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
      </div>
      <button
        className="bg-blue-700 text-white w-16 h-8 mr-2 mt-1 rounded-sm"
        onClick={() => navigate("/new-product")}
      >
        New
      </button>
    </div>
  );
};

export default Navbar;
