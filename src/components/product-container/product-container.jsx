import React, { useState } from "react";
import { Modal } from "../modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { StoreCard } from "../store-card/store-card";
import { deleteAllProducts } from "../../redux/reducers/product-reducer";
import cart from "/cart.jpg";
import { toast } from "react-toastify";

export const ProductContainer = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { products, totalPrice, count } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const deleteAllProduct = () => {


    if (products.length <= 0) {
      return toast.error("Product yo'q", { theme: "colored", type: "error" });
    }
    else if(products.length <= 1){
       return toast.error("Kamida 2 ta product o'chira olasiz", { theme: "colored", type: "error", });
    }
    else{
    dispatch(deleteAllProducts());
    }
  };
  return (
    <div className="">
      <div className="grid  justify-end relative mr-5">
        <img
          className="w-[50px] cursor-pointer"
          src={cart}
          alt=""
          onClick={() => setIsOpen(true)}
        />
        <span className=" absolute w-[25px] h-[25px]  -right-1 me-auto top-1 md:me-3 md:w-[20px] md:h-[20px] md:-right-3  rounded-full bg-red-800 text-white flex justify-center items-center">
          {count}
        </span>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col gap-5">
          <div>
            <button
              className="bg-red-700 w-full rounded-lg p-2"
              onClick={deleteAllProduct}
            >
              Delete All Products
            </button>
            <h1>${totalPrice}</h1>

            {products.map((item) => (
              <StoreCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};
