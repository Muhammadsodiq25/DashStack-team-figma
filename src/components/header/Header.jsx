import { IoSearchSharp } from "react-icons/io5";
import notificationsIcon from "../../assets/header-notifications-icon.png";
import flag from "../../assets/header-flag.png";
// import userImg from "../../assets/header-user-img.png";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full items-center justify-between py-[20px] px-[20px] flex ">
      <div className="flex itesm-center gap-[8px] rounded-4xl border-[#D5D5D5] border-2 w-[auto] py-[10px] px-[20px] bg-[inherit] items-center w-[150px]">
        <IoSearchSharp width={60} className="text-[#7A7B7D] text-[20px]" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none text-[18px]"
        />
      </div>
      <div className="flex items-center gap-[30px]">
        <button className="cursor-pointer">
          <img src={notificationsIcon} alt="" />
        </button>
        <button className="flex items-center gap-[10px] cursor-pointer">
          <img src={flag} alt="" />
          <span className="text-[#646464] nunito font-[550] text-[18px]">
            English
          </span>
        </button>
        {/* <div className="flex items-center gap-[15px]">
            <img src={userImg} className="rounded-4xl bg-[#D8D8D8] w-[60px]" alt="" />
            <div className="flex flex-col items-start gap-[px]">
              <p className="text-[#404040] font-[700] text-[16px]">Moni Roy</p>
              <p className="text-[#565656] font-[600] text-[14px]">Admin</p>
            </div>
            <FaRegArrowAltCircleDown className="text-[25px] font-normal text-[#5C5C5C]" />
          </div> */}
        <Link to="/login">
          <button className="py-[10px] px-[20px] rounded-[8px] bg-[#4880FF] text-white font-bold text-[16px] cursor-pointer">
            Sign In
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
