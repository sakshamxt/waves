import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <main className="fixed w-full h-full z-[999] top-0 left-0 bg-white transform translate-y-full animate-slideSearchWindow">
      <div className="w-full flex items-center justify-center py-4 px-6 md:px-52 border-b-[1px] border-solid border-black/10 relative">
        <input
          type="text"
          autoFocus
          placeholder="Search for products"
          className="w-full max-w-[1200px] h-[50px] md:h-[80px] text-center text-xl md:text-5xl font-semibold text-[#212121] outline-none border-none uppercase"
          value={query}
          onChange={onChange}
        />
        <MdClose
          className="cursor-pointer absolute text-2xl md:text-5xl right-5 md:right-10 top-[50%] transform -translate-y-[50%]"
          onClick={() => setShowSearch(false)}
        />
      </div>

      {/* search result content */}
      <div className="max-w-[calc(100%-20px)] md:max-w-[800px] pt-4 my-0 mx-auto">
        
        {/* search results */}
        <div className="h-[calc(100vh-114px)] md:h-[calc(100vh-134px)] overflow-auto">
          
          {/* search items */}
          {data?.data?.map((item) => (
            <div
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
              className="cursor-pointer py-[10px] px-4 md:px-5 border-b-[1px] bg-black/5 md:hover:bg-black/10 border-black/10"
            >
              <div className="flex items-center justify-start gap-3 md:gap-4">
                <div className="bg-black/5 p-1 h-[53px] rounded-sm">
                  <img
                    className="h-full"
                    src={
                      process.env.REACT_APP_DEV_URL +
                      item.attributes?.img?.data?.attributes?.url
                    }
                    alt="product img"
                  />
                </div>
                <div className="flex flex-col gap-1 w-[80%] md:w-[90%]">
                  <div className="flex flex-col">
                    <span className="w-full text-sm font-semibold block text-ellipsis whitespace-nowrap overflow-hidden">
                      {item.attributes?.title}
                    </span>
                    <span className="w-full text-xs block text-ellipsis whitespace-nowrap overflow-hidden">
                      {item.attributes?.desc}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
};

export default Search;
