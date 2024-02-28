import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { remove, toggleAnmount } from "../../redux/reducers/product-reducer";

export const StoreCard = ({ id, name, img, userCount, userPrice, count }) => {
  const dispatch = useDispatch();
  const [showBtn, setShowBtn] = useState(false);
  const addCount = () => {
    if (userCount <= count) {
      dispatch(toggleAnmount({ type: "add", id }));
    } else {
      setShowBtn(true);
    }
  };

  const deleteProduct = () => {
    dispatch(remove({ id }));
  };

  return (
    <div className="container-uz">
      <div className="flex items-center gap-5 border p-2 rounded-lg mt-10 relative">
        <div className="w-[150px] h-[150px]">
          <img src={img} alt="" />
        </div>

        <div>
          <h1>{name}</h1>
          <p>{count} total count</p>
          <p>${userPrice}</p>
          <div className="flex gap-2 items-center mt-4">
            <button
              disabled={showBtn || userCount === count}
              onClick={addCount}
              className="bg-green-600 rounded-lg px-3 lg:h-[5vh] disabled:bg-green-300 disabled:cursor-not-allowed md:h-[8vh]"
            >
              +
            </button>
            <span>{userCount}</span>
            
              <button disabled={userCount <= 1}
              className="bg-green-600 rounded-lg px-3 lg:h-[5vh] md:h-[8vh] disabled:cursor-not-allowed disabled:bg-green-300"
              onClick={() => dispatch(toggleAnmount({ type: "remove", id }))}
              >
                -
              </button>
            
            <span onClick={deleteProduct} className="cursor-pointer absolute top-2 right-3 bg-red-700 rounded-md py-1 px-2">X</span>
          </div>
        </div>
      </div>
    </div>
  );
};
