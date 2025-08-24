import React, { useEffect, useState } from "react";

function UseTransitionNonBlockingUI() {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/productList");

        const product = await response.json();
        console.log(product);
        setData(product);
        setIsPending(false);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <form>
          <input
            type="text"
            placeholder="Search Product"
            className="border-1 border-amber-300 px-[15px] py-[5px] mb-10 focus:outline-none w-[400px] rounded-md"
          />
        </form>
      </div>
      <div className="grid grid-cols-5">
        {data && data.length > 0 ? (
          data.map((item) => (
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
