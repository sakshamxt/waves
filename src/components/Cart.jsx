import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../utils/context";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-end z-[99] ">
      <div className="bg-black/50 absolute top-0 left-0 w-full h-full"></div>
      <div className="w-full animate-slideCart md:w-80 h-full bg-white py-6 md:py-4 z-[1] flex flex-col transform translate-x-full">
        <div className="flex px-6 md:px-5 items-center justify-between pb-5 md:pb-3 border-b-[1px] border-black/10 shadow-sm">
          <span className="uppercase font-semibold text-base">
            Shopping Cart
          </span>
          <span
            className="uppercase gap-[2px] font-semibold cursor-pointer text-xs flex items-center"
            onClick={() => setShowCart(false)}
          >
            <MdClose size={18} /> Close
          </span>
        </div>

        {/* empty cart */}
        {!cartItems?.length && (
          <div className="flex flex-col gap-4 items-center py-6 mt-12">
            <BsCartX className="text-8xl text-black/20" />
            <span className="text-sm font-semibold">
              No products in the cart.
            </span>
            <Link onClick={() => setShowCart(false)} to={'/'} className="flex items-center justify-center font-semibold h-10 bg-[#4022e9] hover:bg-[#4022e9]/90 rounded-sm cursor-pointer text-white px-4 text-sm uppercase">
              Return to shop
            </Link>
          </div>
        )}

        {!!cartItems?.length && (
          <div className="flex flex-col justify-between h-full overflow-auto">
            <div>
              <CartItem />
            </div>

            {/* cart footer */}
            <div className="fixed bottom-0 bg-white w-full px-6 md:px-5 border-t-[1px] border-black/10 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-base font-medium">Subtotal:</span>
                <span className="text-xl font-bold text-[#4022e9]">
                  &#8377;{cartSubTotal}
                </span>
              </div>
              <div className="w-full h-[1px] bg-black/10 my-3 mb-6"></div>
              <div className="flex items-center justify-center font-semibold h-10 bg-[#4022e9] hover:bg-[#4022e9]/90 rounded-sm cursor-pointer text-white px-4 my-4 text-sm uppercase">
                Checkout
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
