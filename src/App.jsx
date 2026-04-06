import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Favorites from "./pages/favorites/Favorites";
import Inbox from "./pages/inbox/Inbox";
import ProductStock from "./pages/productStock/ProductStock";
import Pricing from "./pages/pricing/Pricing";
import Calendar from "./pages/calendar/Calendar";
import TodoList from "./pages/todoList/TodoList";
import Contact from "./pages/contact/Contact";
import Invoice from "./pages/invoice/Invoice";
import UiElements from "./pages/uiElements/UiElements";
import Team from "./pages/team/Team";
import Table from "./pages/table/Table";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import CreateAccount from "./pages/createAccount/CreateAccount";
import Orderlists from "./pages/orderLists/Orderlists";

const App = () => {
  return (
    <div className="w-full flex items-start justify-between">
      <Sidebar />
      <div className="w-[80%]" style={{ width: "80%", gap: "30px" }}>
        <Header />
        <div className="px-[30px] items-center flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/order_lists" element={<Orderlists />} />
            <Route path="/product_stock" element={<ProductStock />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/to_do" element={<TodoList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/ui_elements" element={<UiElements />} />
            <Route path="/team" element={<Team />} />
            <Route path="/table" element={<Table />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create_account" element={<CreateAccount />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
