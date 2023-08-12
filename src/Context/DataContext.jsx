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
    const newData = [...data];

    const filteredDepartment =
      filters?.department === "Kitchen"
        ? newData?.filter((product) => product?.department === "Kitchen")
        : filters?.department === "Clothing"
        ? newData?.filter((product) => product?.department === "Clothing")
        : filters?.department === "Toys"
        ? newData?.filter((product) => product?.department === "Toys")
        : newData;

    const filteredLowStock = filters?.lowStock
      ? filteredDepartment?.filter((product) => product?.stock <= 10)
      : filteredDepartment;

    const sortedData = filters?.sorting
      ? filters?.sorting === "name"
        ? [...filteredLowStock].sort((a, b) => a?.name.localeCompare(b?.name))
        : filters?.sorting === "price"
        ? [...filteredLowStock].sort((a, b) => a?.price - b?.price)
        : [...filteredLowStock].sort((a, b) => a?.stock - b?.stock)
      : filteredLowStock;
    return sortedData;
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
        filteredProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
