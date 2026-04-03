import { AiOutlineProduct } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import {
  FaCalendarAlt,
  FaElementor,
  FaFileInvoice,
  FaInbox,
  FaTable,
} from "react-icons/fa";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { GoListUnordered } from "react-icons/go";
import { IoIosPricetag, IoMdContacts } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineSpaceDashboard } from "react-icons/md";
import { RiStockLine, RiTeamFill } from "react-icons/ri";

export const links = [
  {
    text: "Dashboard",
    to: "/",
  },
  {
    text: "Products",
    to: "/products",
  },
  {
    text: "Favorites",
    to: "/favorites",
  },
  {
    text: "Inbox",
    to: "/inbox",
  },
  {
    text: "Order Lists",
    to: "/order_lists",
  },
  {
    text: "Product Stock",
    to: "/product_stock",
  },
  {
    text: "Pricing",
    to: "/pricing",
  },
  {
    text: "Calender",
    to: "/calendar",
  },
  {
    text: "To-Do",
    to: "/to_do",
  },
  {
    text: "Contact",
    to: "/contact",
  },
  {
    text: "Invoice",
    to: "/invoice",
  },
  {
    text: "UI Elements",
    to: "/ui_elements",
  },
  {
    text: "Team",
    to: "/team",
  },
  {
    text: "Table",
    to: "/table",
  },
  {
    text: "Settings",
    to: "/settings",
  },
];

// dashboard
import statisticsImg1 from "../assets/dashboard-statistics-cart-img1.png";
import statisticsImg2 from "../assets/dashboard-statistics-cart-img2.png";
import statisticsImg3 from "../assets/dashboard-statistics-cart-img3.png";
import statisticsImg4 from "../assets/dashboard-statistics-cart-img4.png";

export const statistics = [
  {
    img: statisticsImg1,
    subtitle: "Total User",
    title: "40,689",
    statistics: "Up from yesterday",
    statisticsSpan: "8.5%",
    statisticsSpanCol: "#00B69B",
  },
  {
    img: statisticsImg2,
    subtitle: "Total Order",
    title: "10293",
    statistics: "Up from past week",
    statisticsSpan: "1.3%",
    statisticsSpanCol: "#00B69B",
  },
  {
    img: statisticsImg3,
    subtitle: "Total Sales",
    title: "$89,000",
    statistics: "Up from yesterday",
    statisticsSpan: "4.3%",
    statisticsSpanCol: "#F93C65",
  },
  {
    img: statisticsImg4,
    subtitle: "Total Pending",
    title: "2040",
    statistics: "Up from yesterday",
    statisticsSpan: "1.8%",
    statisticsSpanCol: "#00B69B",
  },
];

export const dashDetails_top = {
  title: "Deals Details",
  btn: "October",
};

import dealsCartImg from "../assets/dashboard-deals-cart-img.png";

export const dealsContTop = [
  "Product Name",
  "Location",
  "Date - Time",
  "Piece",
  "Amount",
  "Status",
];

export const dashDeals_cont = [
  {
    img: dealsCartImg,
    title: "Apple Watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2026 - 12.53 PM",
    piece: "423",
    amount: "$34,295",
    status: "Delivered",
  },
  {
    img: dealsCartImg,
    title: "Apple Watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2026 - 12.53 PM",
    piece: "423",
    amount: "$34,295",
    status: "Delivered",
  },
  {
    img: dealsCartImg,
    title: "Apple Watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2026 - 12.53 PM",
    piece: "423",
    amount: "$34,295",
    status: "Delivered",
  },
  {
    img: dealsCartImg,
    title: "Apple Watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2026 - 12.53 PM",
    piece: "423",
    amount: "$34,295",
    status: "Delivered",
  },
];

// Revenue
import arrow1 from "../assets/revenue-cart2-arrow1.png";
import arrow2 from "../assets/revenue-cart2-arrow2.png";

export const revenue_top = {
  title: "Revenue",
  btn: "October",
};

export const arrows = [arrow1, arrow2];

// product
import cartimg from "../assets/product-cart-img.png";

export const product_cont = [
  {
    img: cartimg,
    title: "Apple Watch Series 4 ",
    price: "$120.00",
    btn: "Edit Product",
  },
  {
    img: cartimg,
    title: "Apple Watch Series 4 ",
    price: "$120.00",
    btn: "Edit Product",
  },
  {
    img: cartimg,
    title: "Apple Watch Series 4 ",
    price: "$120.00",
    btn: "Edit Product",
  },
  {
    img: cartimg,
    title: "Apple Watch Series 4 ",
    price: "$120.00",
    btn: "Edit Product",
  },
  {
    img: cartimg,
    title: "Apple Watch Series 4 ",
    price: "$120.00",
    btn: "Edit Product",
  },
  {
    img: cartimg,
    title: "Apple Watch Series 4 ",
    price: "$120.00",
    btn: "Edit Product",
  },
  {
    img: cartimg,
    title: "Apple Watch Series 4 ",
    price: "$120.00",
    btn: "Edit Product",
  },
  {
    img: cartimg,
    title: "Apple Watch Series 4 ",
    price: "$120.00",
    btn: "Edit Product",
  },
  {
    img: cartimg,
    title: "Apple Watch Series 4 ",
    price: "$120.00",
    btn: "Edit Product",
  },
];
