import { useNavigate } from "react-router-dom";

const Categories = ({ categories }) => {

  const navigate = useNavigate();

  return (
    <div className="w-full px-6 md:px-52 py-12">
      <div className="w-full flex gap-y-4 gap-2 justify-between flex-wrap">
        
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            to={"/category/1"}
            preventScrollReset={false}
            className="overflow-hidden"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              className="w-full md:h-auto md:w-[16.9rem] hover:scale-[1.2] transition-all cursor-pointer"
              src={process.env.REACT_APP_DEV_URL + item.attributes?.img?.data?.attributes?.url}
              alt="Category 1"
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Categories;
