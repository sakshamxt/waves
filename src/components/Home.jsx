import { fetchDataFromApi } from "../utils/api";
import Banner from "./Banner";
import Categories from "./Categories";
import Products from "./Products";
import { Context } from "../utils/context";

import { useEffect, useContext } from "react";

const Home = () => {

    
    const { categories, setCategories, products, setProducts } = useContext(Context);
    

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    
    const getProducts = () => {
        fetchDataFromApi('/api/products?populate=*').then(res => {
            console.log(res)
            setProducts(res)
        });
    }
    
    
    const getCategories = () => {
        fetchDataFromApi('/api/categories?populate=*').then(res => {
            console.log(res)
            setCategories(res)
        });
    }
    
    


    return (
        <main className="w-full">
            <Banner/>
            <Categories categories={categories} />
            <div className="px-6 md:px-52">
                <Products products={products} heading={'Popular products'} />
            </div>
        </main>
    );
};

export default Home;
