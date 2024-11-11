import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../utils/context";

const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);

  return (
    <div className="">
      {/* cart item */}

      {cartItems.map((item) => (
        <div key={item.id} className=" py-4 px-6 md:px-5 border-b-[1px] md:hover:bg-black/5 border-black/10">
          <div className="flex items-start justify-between">
            <div className="bg-black/5 p-1 h-[53px] rounded-sm">
              <img className="h-full" src={process.env.REACT_APP_DEV_URL + item.attributes?.img?.data?.attributes?.url} alt="product img" />
            </div>
            <div className="flex flex-col gap-1 w-[77%]">
              <div className="flex items-center justify-between">
                <span className="w-[90%] text-sm font-semibold block text-ellipsis whitespace-nowrap overflow-hidden">
                  {item.attributes?.title}
                </span>
                <MdClose onClick={() => handleRemoveFromCart(item)} size={17} className="cursor-pointer" />
              </div>
              <div className="flex items-center">
                <span onClick={() => handleCartProductQuantity('dec', item)} className="cursor-pointer rounded-tl-sm rounded-bl-sm border-[1px] border-black/20 w-7 h-7 flex items-center justify-center">
                  -
                </span>
                <span className="border-t-[1px] border-b-[1px] border-black/20 w-7 text-sm h-7 flex items-center justify-center">
                  {item.attributes?.quantity}
                </span>
                <span onClick={() => handleCartProductQuantity('inc', item)} className="cursor-pointer rounded-tr-sm rounded-br-sm border-[1px] border-black/20 w-7 h-7 flex items-center justify-center">
                  +
                </span>
              </div>
              <div className="flex items-center text-xs font-semibold gap-1 mt-1">
                <span>{item.attributes?.quantity}</span>
                <span>x</span>
                <span className="text-[#4022e9]">&#8377;{item.attributes?.price * item.attributes?.quantity}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
