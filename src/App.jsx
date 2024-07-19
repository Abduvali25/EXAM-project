import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Product from "./components/product/Product";
import { CiSearch } from "react-icons/ci";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import logo from "./assets/GG.svg";
import { VscCallIncoming } from "react-icons/vsc";
import flag from "./assets/Group.svg";
import earth from "./assets/Vector.svg";
import originalLogo from "./assets/GameGeek.svg";
import gameGeek from "./assets/GameGeek.png"
import { AiOutlineUser } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import Cart from "./components/cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="">
      <div className="w-full h-[68px] bg-[#0D2613] text-white flex justify-around items-center font-extralight">
        <div className="flex gap-8 Inter">
          <img src={logo} alt="" />
          <p className="flex gap-3 items-center">
            <VscCallIncoming /> +4904-049-950
          </p>
        </div>
        <div className="flex gap-5 Inter items-center">
          <p>Get 50% Off on the Selected items </p>
          <div className="w-[2px] h-[30px] bg-[#14FF00] "></div>
          <p>Shop now</p>
        </div>
        <div className="flex gap-12 Inter ">
          <div className="flex items-center gap-2">
            <select className="bg-transparent" name="" id="">
              <option value="">English</option>
            </select>
            <img className="" src={flag} alt="" />
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-[17px] h-[17px]" src={earth} alt="" />
            <p>Location</p>
          </div>
        </div>
      </div>
      <main className="z-20 ">
        <Router>
          <header className="w-full h-[110px] flex justify-around items-center #0D2612 font-extralight">
            <img src={gameGeek} alt="log" />
            <nav className="Inter">
              <ul className="w-full items-center justify-center flex gap-8">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "font-bold text-green-400" : ""
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "font-bold text-green-400" : ""
                    }
                    to={"/products"}
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink>About</NavLink>
                </li>
                <li>
                  <NavLink>Help</NavLink>
                </li>
              </ul>
            </nav>
            <div className="flex gap-3 text-black">
              <CiSearch    className="w-[20px] h-[20px]" />
              <AiOutlineUser className="w-[20px] h-[20px]" />
              <NavLink
                className="flex flex-row-reverse gap-1 items-center"
                to={"/cart"}
              >
                {cart.length > 0 && (
                  <span className="min-w-[10px] min-h-[10px] bg-green-400 rounded-[50px] text-[12px] py-[2px] px-[6px] text-white">
                    {cart.length}
                  </span>
                )}
                <div>
                  <CiShoppingCart />
                </div>
              </NavLink>
            </div>
          </header>
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products cart={cart} setCart={setCart} />}
            />
            <Route path="/products/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart products={cart} />} />
          </Routes>
        
        </Router>
      </main>
    </div>
  );
}

export default App;
