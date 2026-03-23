import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full items-center flex justify-center py-[50px]">
      <div className="flex flex-col items-center gap-[15px] rounded-3xl bg-[#FFFFFF] py-[90px] px-[60px] w-[40%]">
        <h3 className="nunito font-semibold text-[32px] ">Login to Account</h3>
        <p className="font-semibold text-[18px] text-[#202224]">
          Please enter your email and password to continue
        </p>
        <form className="items-start flex flex-col w-full gap-[15px] mt-[40px]">
          <label className="font-semibold text-[18px]" htmlFor="email">
            Email address:
          </label>
          <input
            type="email"
            placeholder="esteban_schiller@gmail.com"
            required
            className="rounded-[8px] border-[1px] border-[#D8D8D8] w-full bg-[#F1F4F9] py-[15px] px-[15px] items-start"
          />
          <label
            className="font-semibold text-[168x] mt-[40px]"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="email"
            placeholder="------------"
            required
            className="rounded-[8px] border-[1px] border-[#D8D8D8] w-full bg-[#F1F4F9] py-[15px] px-[15px] items-start"
          />
        </form>
        <div className="flex w-full items-center justify-between">
          <div className="font-[600] text-[20px] text-[#797A7C] gap-[10px] items-center flex">
            <input type="checkbox" />
            <p>Remember Password</p>
          </div>
          <Link className="text-[#797A7C] font-semibold text-[18px]">
            Forget Password?
          </Link>
        </div>
        <button className="rounded-[8px] opacity-[90%] mt-[50px] font-bold text-[20px] py-[15px] px-[20px] w-[80%] bg-[#5B8DFF] text-[#FFFFFF] cursor-pointer">
          Sign In
        </button>
        <p className="text-[#6E6F70] font-semibold text-[20px] flex items-center gap-[15px]">
          <span>Don’t have an account? </span>
          <Link to="/create_account" className="text-[#5A8CFF] font-bold text-[20px] underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
