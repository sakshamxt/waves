import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import Cart from './Cart';
import Search from './Search';
import { Context } from '../utils/context';


const Header = () => {
    
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const { cartCount } = useContext(Context);
    
    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);



    return (
        <>
        <main className={` ${scrolled ? 'sticky top-0 animate-slide' : ''} shadow-sm w-full px-6 md:px-52 py-4 relative bg-white/65 backdrop-blur-md border-b-[1px] border-black/20 z-50 text-black flex items-center justify-between`}>
            <div className='hidden md:flex items-center gap-6'>
                <Link className='text-sm hover:text-black/80 transition-all' to={'/'}>Home</Link>
                <Link className='text-sm hover:text-black/80 transition-all' to={'/about'}>About</Link>
                <Link className='text-sm hover:text-black/80 transition-all' to={'/categories'}>Categories</Link>
            </div>
            <div className='md:absolute md:top-1/2 md:left-1/2 md:-translate-x-[50%] md:-translate-y-[50%] text-[1.3rem] md:text-xl font-black'>
                <Link to={'/'}>WAVES</Link>
            </div>
            <div className='flex items-center gap-5 text-xl'>
                <TbSearch className='cursor-pointer' onClick={() => setShowSearch(true)} />
                <AiOutlineHeart className='cursor-pointer' />
                <span className='flex items-center relative cursor-pointer' onClick={() => setShowCart(true)}>
                    <CgShoppingCart />
                    { !!cartCount && <span className='text-[13px] font-semibold bg-[#4022e9] text-white rounded-full absolute -top-[7px] -right-[12px] w-[18px] h-[18px] flex items-center justify-center'>{cartCount}</span>}
                </span>
            </div>
        </main>
        { showCart && <Cart setShowCart={setShowCart} /> }
        { showSearch && <Search setShowSearch={setShowSearch} /> }
        </>
    );
};

export default Header;
