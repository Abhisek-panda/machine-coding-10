import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between gap-10 flex-row w-full items-center">
      <h1>Products</h1>
      <div className="border-2 border-solid border-black rounded-sm">
        <select name="" id="">
          <option value="all">All</option>
          <option value="kitchen">Kitchen</option>
          <option value="clothing">Clothing</option>
          <option value="toys">Toys</option>
        </select>
      </div>
      <div>
        <input type="checkbox" name="" id="low-stock-item" />
        <label htmlFor="low-stock-item">Low Stock Items</label>
      </div>
      <div className="border-2 border-solid border-black rounded-sm">
        <select name="" id="">
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
