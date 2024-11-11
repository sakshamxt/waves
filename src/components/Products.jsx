import Product from './Product';

const Products = ({ products, innerPage, heading }) => {
    return (
        <div className='py-10'>
            { innerPage ? '' : <><div className='uppercase text-lg font-semibold mb-1'>{heading}</div> 
            <div className='h-[3px] w-[50px] rounded-full bg-[#4022e9] mb-10'></div></>
            }
            <div className='flex flex-wrap justify-start gap-5'>
                {
                    products?.data?.map((item) => (
                        <Product key={item.id} id={item.id} data={item.attributes} />
                    ))
                }
            </div>
        </div>
    );
};

export default Products;
