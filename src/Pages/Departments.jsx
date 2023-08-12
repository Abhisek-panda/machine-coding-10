import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { useData } from "../main";

const Departments = () => {
  const { filters, setFilters } = useData();
  const navigate = useNavigate();

  const handleKitchen = () => {
    setFilters({ ...filters, department: "Kitchen" });
    navigate("/products");
  };
  const handleClothing = () => {
    setFilters({ ...filters, department: "Clothing" });
    navigate("/products");
  };
  const handleToys = () => {
    setFilters({ ...filters, department: "Toys" });
    navigate("/products");
  };

  return (
    <div className="flex gap-5">
      <div>
        <Sidebar />
      </div>
      <div className="flex gap-5 mt-5">
        <div className="w-48 bg-neutral-200 h-24 flex flex-col items-center rounded-md hover:bg-slate-600 justify-center hover:cursor-pointer hover:text-white">
          <h2 onClick={handleKitchen} className="font-bold text-2xl">
            Kitchen
          </h2>
        </div>
        <div className="w-48 bg-neutral-200 h-24 flex flex-col items-center rounded-md hover:bg-slate-600 justify-center hover:cursor-pointer hover:text-white justify-center">
          <h2 onClick={handleClothing} className="font-bold text-2xl">
            Clothing
          </h2>
        </div>
        <div className="w-48 bg-neutral-200 h-24 flex flex-col items-center rounded-md hover:bg-slate-600 justify-center hover:cursor-pointer hover:text-white justify-center">
          <h2 onClick={handleToys} className="font-bold text-2xl">
            Toys
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Departments;
