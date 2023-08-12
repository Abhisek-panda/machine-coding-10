import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { useData } from "../main";

const NewProducts = () => {
  const {
    newInventoryData,
    setNewInventoryData,
    productDetail,
    setProductDetail,
  } = useData();

  console.log({ newInventoryData });

  const navigate = useNavigate();
  const handleAddNewProduct = () => {
    setNewInventoryData([...newInventoryData, productDetail]);
    setProductDetail({
      department: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: "",
      delivered: 0,
      imageUrl: "",
    });
    navigate("/products");
  };

  return (
    <div className="flex w-full gap-5">
      <div>
        <Sidebar />
      </div>
      <div className=" w-full  h-sceen flex flex-col justify-around items-start">
        <h1>Add New Product:</h1>
        <div className="flex flex-col">
          DepartMent:
          <select
            name=""
            id=""
            className="border-2 border-solid border-black"
            onChange={(e) =>
              setProductDetail({ ...productDetail, department: e.target.value })
            }
          >
            <option value="all" hidden>
              Select Your Department
            </option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="product-name">Name</label>
          <input
            type="text"
            id="product-name"
            placeholder="Mixer-500"
            className="border-2 border-solid border-black"
            onChange={(e) =>
              setProductDetail({ ...productDetail, name: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="product-desc">Description</label>
          <textarea
            id="product-desc"
            className="border-2 border-solid border-black"
            onChange={(e) =>
              setProductDetail({
                ...productDetail,
                description: e.target.value,
              })
            }
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            placeholder="0"
            className="border-2 border-solid border-black"
            onChange={(e) =>
              setProductDetail({ ...productDetail, price: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="product-stock">Stock:</label>
          <input
            type="number"
            id="product-stock"
            placeholder="0"
            className="border-2 border-solid border-black"
            onChange={(e) =>
              setProductDetail({ ...productDetail, stock: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="product-sku">SKU:</label>
          <input
            type="text"
            id="product-sku"
            placeholder="KITCHEN004"
            className="border-2 border-solid border-black"
            onChange={(e) =>
              setProductDetail({ ...productDetail, sku: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="product-supplier">Supplier</label>
          <input
            type="text"
            id="product-supplier"
            className="border-2 border-solid border-black"
            onChange={(e) =>
              setProductDetail({ ...productDetail, supplier: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="product-deliver">Delivery:</label>
          <input
            type="text"
            disabled
            placeholder="0"
            className="border-2 border-solid border-black"
            onChange={(e) =>
              setProductDetail({ ...productDetail, delivery: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="product-img">Image URL:</label>
          <input
            type="text"
            placeholder="https://m.media-amazon.com/images/I/616vJsA33kL.jpg"
            className="border-2 border-solid border-black"
            onChange={(e) =>
              setProductDetail({ ...productDetail, imageUrl: e.target.value })
            }
          />
        </div>
        <button
          className="bg-blue-700 text-white p-2"
          onClick={handleAddNewProduct}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default NewProducts;
