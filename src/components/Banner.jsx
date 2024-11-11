import BannerImg from '../assets/banner-img.png';

const Banner = () => {
    return (
        <main className='w-full h-[95vh] bg-gradient-to-b md:bg-gradient-to-r from-[#c2e1f2] via-[#91c9f7] to-[#f4a8ca] px-52 py-10'>
            <div className=' h-full w-full flex flex-col md:flex-row items-center justify-start md:justify-center' >
                <div className='relative mt-6 md:mt-0 flex flex-col items-center md:items-start gap-6 text-black'>
                    <h1 className='text-[4rem] md:text-[6rem] leading-[4rem] md:leading-[5.5rem] font-bold'>
                        Immersive <br/>Listening
                    </h1>
                    <p className='text-sm w-full md:w-4/5 md:text-left'>
                        Discover top-quality headphones, earphones, speakers, and smartwatches. Elevate your tech experience with our premium selection, blending superior sound and advanced features.
                    </p>
                    <div className='flex gap-6 items-center'>
                        <div className='uppercase font-semibold text-sm px-4 py-2 border-[1px] border-black hover:border-[#1975c1] cursor-pointer hover:bg-[#1975c1] hover:text-white transition-all'>Read More</div>
                        <div className='uppercase font-semibold text-sm px-4 py-2 border-[1px] border-[#1975c1] hover:border-black cursor-pointer bg-[#1975c1] text-white hover:bg-transparent hover:text-black transition-all'>Shop Now</div>
                    </div>
                </div>
                <img className='absolute md:relative filter drop-shadow-lg bottom-0 w-[300px] md:w-[480px] h-auto md:h-auto md:left-7' src={BannerImg} alt="banner-img" />
            </div>
        </main>
    );
};

export default Banner;
