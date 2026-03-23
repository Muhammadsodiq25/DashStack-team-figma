import { product_cont } from "../../data/Muhammadsodiq";

const Products = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col gap-[15px] py-[50px] px-[50px] items-start rounded-2xl w-full bg-[#4880FF] text-[#FFFFFF]">
        <p className="font-[600] text-[16px] text-[#FFFFFF]">September 12-22</p>
        <h3 className="font-[900] nunito  text-[37px]">
          Enjoy free home <br /> delivery in this summer
        </h3>
        <p className="font-[600] text-[16px]">
          Designer Dresses - Pick from trendy Designer Dress.
        </p>
        <button className="font-[700] text-[14px] bg-[#FF8743] rounded-[11px] py-[10px] px-[30px] cursor-pointer">
          Get Started
        </button>
      </div>
      <div className="grid grid-cols-3 items-center gap-[50px] mt-[30px] w-full">
        {product_cont.map((cart, index) => {
          return (
            <div
              key={index}
              className="bg-[#FFFFFF] py-[30px] px-[30px] gap-[15px] flex flex-col items-center rounded-2xl"
            >
              <img src={cart.img} alt="" />
              <h4 className="font-[700] text-[18px]">{cart.title}</h4>
              <p className="font-[700] text-[16px] text-[#4880FF]">
                {cart.price}
              </p>
              <button className="py-[10px] px-[22px] bg-[#EBF1FB] cursor-pointer font-[700] text-[14px] rounded-2xl">
                {cart.btn}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
