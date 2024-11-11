import { useNavigate } from "react-router-dom";

const Product = ({ id, data }) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate('/product/' + id)} className="w-[calc(50%-10px)] md:w-[calc(25%-15px)] mb-5">
            <div className='bg-black/5 md:h-72 p-6 hover:p-3 transition-all cursor-pointer rounded-md flex items-center justify-center mb-2'>
                <img className='w-full' src={process.env.REACT_APP_DEV_URL + data.img.data?.attributes?.url} alt="product-image" />
            </div>
            <div className=''>
                <span className='font-semibold text-sm md:text-base block text-ellipsis whitespace-nowrap overflow-hidden'>{ data.title }</span>
                <span className='text-[1rem] md:text-[1.1rem] font-bold'>&#8377;{data.price}</span>
            </div>
        </div>
    );
};

export default Product;
