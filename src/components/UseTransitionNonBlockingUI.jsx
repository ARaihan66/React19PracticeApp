import React, { useEffect, useState, useTransition } from "react";

function UseTransitionNonBlockingUI() {
  const [searchProductText, setSearchProductText] = useState("");
  const [data, setData] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/productList");

        const product = await response.json();
        console.log(product);
        setData(product);
        setFilterProduct(product);
        setloading(false);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    console.log(searchText);
    setSearchProductText(searchText);
    startTransition(() => {
      if (searchText.trim() === "") {
        setFilterProduct(data);
      } else {
        const filteredData = data.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilterProduct(filteredData);
      }
    });
  };

  if (loading) <h4>Data is loading</h4>;

  if (isPending) <h4>Data is loading</h4>;

  return (
    <>
      <div className="flex justify-center">
        <form>
          <input
            type="text"
            name="searchText"
            value={searchProductText}
            placeholder="Search Product"
            onChange={handleSearch}
            className="border-1 border-amber-300 px-[15px] py-[5px] mb-10 focus:outline-none w-[400px] rounded-md"
          />
        </form>
      </div>
      <div className="grid grid-cols-5">
        {filterProduct && filterProduct.length > 0 ? (
          filterProduct.map((item) => (
            <div
              key={item.id}
              className="border-1 border-gray-200 m-2 p-3 rounded-md font-semibold bg-amber-100 shadow-md"
            >
              <p>Product Id : {item.id}</p>
              <p>Product Name: {item.name}</p>
            </div>
          ))
        ) : (
          <h4>No product is available</h4>
        )}
      </div>
    </>
  );
}

export default UseTransitionNonBlockingUI;
