import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import NewsletterBg from '../assets/newsletter-bg.jpg';

const Newsletter = () => {
    return (
        <main className='w-full relative flex flex-col md:flex-row items-center justify-center h-[60vh] overflow-hidden'>
            <img className='h-full blur-sm w-full absolute object-cover' src={NewsletterBg} alt='newsletter-bg' />
            <div className='absolute flex flex-col gap-2 items-center justify-center'>
                <span className='uppercase text-black/70 text-sm'>Newsletter</span>
                <span className='uppercase text-xl text-center md:text-2xl font-semibold'>Sign up for latest updates and offers</span>
                <div className='flex flex-col md:flex-row md:items-center gap-3 mt-3'>
                    <input className='text-sm px-4 py-2 w-80 outline-none bg-transparent border-[1px] border-black rounded-sm placeholder:text-black' placeholder='Email Address' type="text"  />
                    <button className='text-sm px-4 py-2 bg-[#4022e9] hover:bg-[#654de7] border-[1px] border-black rounded-sm text-white'>Subscribe</button>
                </div>
                <span className='text-black/80 text-sm'>Will be used in accordance with our Privacy Policy</span>
                <div className='flex items-center gap-3 text-white'>
                    <FaLinkedinIn className='bg-[#212121] w-7 h-7 text-sm p-[6px] rounded-full' />
                    <FaFacebookF className='bg-[#212121] w-7 h-7 text-sm p-[6px] rounded-full' />
                    <FaTwitter className='bg-[#212121] w-7 h-7 text-sm p-[6px] rounded-full' />
                    <FaInstagram className='bg-[#212121] w-7 h-7 text-sm p-[6px] rounded-full' />
                </div>
            </div>
        </main>
    );
};

export default Newsletter;
