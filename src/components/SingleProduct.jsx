import { useState, useContext } from "react";
import RelatedProducts from "./RelatedProducts";
import ClipLoader from "react-spinners/ClipLoader";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import {
  FaCartPlus,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Context } from "../utils/context";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(
    `/api/products?populate=*&[filters][id]=${id}`
  );
  const [quantity, setQuantity] = useState(1);

  const { handleAddToCart } = useContext(Context);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!data) return;
  const product = data.data[0]?.attributes;

  return (
    <div className="px-6 md:px-52 py-6 md:py-14">
      <div>
        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <ClipLoader color={"#000"} loading={loading} size={150} />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row mb-2 md:mb-10">
            <div className="bg-black/5 p-6 w-full md:w-[45%] cursor-pointer rounded-md flex items-center justify-center">
              <img
                src={
                  process.env.REACT_APP_DEV_URL +
                  product.img?.data?.attributes?.url
                }
                alt="product-image"
              />
            </div>
            <div className="flex flex-col gap-3 py-4 md:py-0 md:px-8 md:w-[55%]">
              <span className="font-semibold text-lg">{product?.title}</span>
              <span className="font-bold text-xl">&#8377;{product?.price}</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <span
                    className="cursor-pointer rounded-tl-sm rounded-bl-sm border-[1px] border-black/20 w-9 h-10 flex items-center justify-center"
                    onClick={() => decrement()}
                  >
                    -
                  </span>
                  <span className="border-t-[1px] border-b-[1px] border-black/20 w-14 h-10 flex items-center justify-center">
                    {quantity}
                  </span>
                  <span
                    className="cursor-pointer rounded-tr-sm rounded-br-sm border-[1px] border-black/20 w-9 h-10 flex items-center justify-center"
                    onClick={() => increment()}
                  >
                    +
                  </span>
                </div>
                <div
                  onClick={() => {
                    handleAddToCart(data.data[0], quantity);
                    setQuantity(1);
                  }}
                  className="flex gap-2 items-center h-10 font-semibold bg-[#4022e9] hover:bg-[#4022e9]/90 rounded-sm cursor-pointer text-white px-4 text-sm uppercase"
                >
                  <FaCartPlus />
                  Add to cart
                </div>
              </div>
              <span className="text-sm leading-[1.4rem] text-black/90 mt-4">
                {product.desc}
              </span>
              <div className="w-full h-[1px] bg-black/20 mt-2 rounded-full"></div>
              <div className="mt-3 text-sm flex items-center gap-1">
                <span className="font-medium">Category:</span>
                <span className="text-black/80">
                  {product.categories?.data[0]?.attributes?.title}
                </span>
              </div>
              <div className="text-sm flex items-center gap-1">
                <span className="font-medium">Share:</span>
                <div className="flex items-center gap-3 text-lg">
                  <FaFacebookF className="text-[#4267B2] cursor-pointer" />
                  <FaTwitter className="text-[#1DA1F2] cursor-pointer" />
                  <FaInstagram className="text-[#C13584] cursor-pointer" />
                  <FaPinterest className="text-[#E60023] cursor-pointer" />
                  <FaLinkedin className="text-[#2867B2] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        )}

        <RelatedProducts
          productId={id}
          categoryId={product.categories?.data[0]?.id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
