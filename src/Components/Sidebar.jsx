import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-48 bg-black text-white flex flex-col gap-12 text-xl px-2">
      <Link to="/">Dashboard</Link>
      <Link to="/departments">Departements</Link>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Sidebar;
