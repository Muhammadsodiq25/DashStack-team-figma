import logo2 from "../../assets/logo.png"
import {links} from "../../data/Muhammadsodiq"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-[20%] items-start h-full" style={{width:'15%', alignItems:'start'}}>
        <div className="flex gap-[50px] flex-col w-[15%] h-full fixed items-center py-[20px] px-[15px] bg-[#FFFFFF] overflow-scroll" style={{transition:'all 0.3s ease', overflow:'scroll', scrollbarWidth:'none'}}>
        <button className="flex items-center gap-[10px] cursor-pointer">
            <img src={logo2} alt="" width={50}/>
            <p className="nunito font-[700] text-[20px]"><span className="text-[#4880FF]">Dash</span>Stack</p>
        </button>

        <nav className="w-full flex flex-col items-center">
            <ul className="flex flex-col gap-[25px] w-full items-start">
                {
                    links.map((link,index) => {
                        return <li className="w-full hover-link" key={index}>
                            <Link className="link-hover ml-[30px] w-[100%]" to={link.to}>{link.text}</Link>
                        </li>
                    })
                }
            </ul>
        </nav>
    </div>
    </div>
  )
}

export default Sidebar
