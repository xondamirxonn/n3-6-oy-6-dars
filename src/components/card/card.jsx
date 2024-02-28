import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/reducers/product-reducer";

export const Card = (product) => {
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const [button, setButton] = useState(false);
  useEffect(() => {
    setButton(products.find((item) => item.id === product.id));
  }, [products, product.id]);
  const addProduct = () => {
    dispatch(add(product));
    setButton(true);
    toast("Product qo'shildi", { type: "success", theme: "colored" });
  };
  const DeleteProduct = () => {
    dispatch(remove(product));
    setButton(false);
    toast("Product o'chirildi", { type: "success", theme: "colored" });
  };

  return (
    <div className="border p-4 mt-10 ">
      <div className="w-[250px] h-[250px]">
        <img src={product.img} alt="" />
      </div>
      <h1 className="text-3xl text-blue-300">{product.name}</h1>
      <p>Price: ${product.price}</p>
      <span>Count: {product.count}</span>
      {button ? (
        <button
          onClick={DeleteProduct}
          className=" bg-red-600 rounded-lg border-transparent w-full mt-5 py-3"
        >
          Remove
        </button>
      ) : (
        <button
          onClick={addProduct}
          className="bg-green-600 rounded-lg border-transparent w-full mt-5 py-3"
        >
          Add
        </button>
      )}
    </div>
  );
};

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { add, remove } from "../../redux/reducers/product-reducer";
// import { toast } from "react-toastify";

// export const Card = (product) => {
//   const { products } = useSelector((state) => state.product);
//   const dispatch = useDispatch();
//   const [inCart, setInCart] = useState(false);

//   // Check if the product is in the cart
//   useEffect(() => {
//     setInCart(products.some((item) => item.id === product.id));
//   }, [products, product.id]);

//   const addProduct = () => {
//     dispatch(add(product));
//     setInCart(true);
//     toast("Product qo'shildi", { type: "success", theme: "colored" });
//   };

//   const deleteProduct = () => {
//     dispatch(remove(product));
//     setInCart(false);
//     toast("Product o'chirildi", { type: "success", theme: "colored" });
//   };

//   return (
//     <div className="border p-4 mt-10">
//       <div className="w-[250px] h-[250px]">
//         <img src={product.img} alt="" />
//       </div>
//       <h1 className="text-3xl text-blue-300">{product.name}</h1>
//       <p>Price: ${product.price}</p>
//       <span>Count: {product.count}</span>
//       {inCart ? (
//         <button
//           onClick={deleteProduct}
//           className="bg-red-600 rounded-lg border-transparent w-full mt-5 py-3"
//         >
//           Remove
//         </button>
//       ) : (
//         <button
//           onClick={addProduct}
//           className="bg-green-600 rounded-lg border-transparent w-full mt-5 py-3"
//         >
//           Add
//         </button>
//       )}
//     </div>
//   );
// };
