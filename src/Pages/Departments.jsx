import Sidebar from "../Components/Sidebar";

const Departments = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex gap-5">
        <div>
          <h2>Kitchen</h2>
        </div>
        <div>
          <h2>Clothing</h2>
        </div>
        <div>
          <h2>Toys</h2>
        </div>
      </div>
    </div>
  );
};

export default Departments;
