/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

import { inventoryData } from "../Data/InventoryData";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(inventoryData);
  const [newInventoryData, setNewInventoryData] = useState(data);
  const [filters, setFilters] = useState({
    department: "",
    lowStock: false,
    sorting: "",
  });
  const [productDetail, setProductDetail] = useState({
    id: uuid(),
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

  const filteredProduct = () => {
    const newData = [...newInventoryData];
    const filteredDepartment = filters?.department ? 
  };

  const totalInventoryProduct = newInventoryData.reduce(
    (acc, { stock }) => acc + Number(stock),
    0
  );

  const totalDeliveredProduct = newInventoryData.reduce(
    (acc, { delivered }) => acc + Number(delivered),
    0
  );

  const totalLowStockProduct = newInventoryData.filter(
    (product) => product?.stock <= 10
  );

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        newInventoryData,
        setNewInventoryData,
        totalInventoryProduct,
        totalDeliveredProduct,
        totalLowStockProduct,
        filters,
        setFilters,
        productDetail,
        setProductDetail,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
