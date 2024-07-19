import { useEffect, useState } from "react";
import { api } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../store/productslice";
import { IoMdArrowDropdown } from "react-icons/io";

import Line from "../../assets/Line 27.svg";

import Cart from "../card/Card";

const base_url = import.meta.env.VITE_BASE_URL;

const Products = ({ cart, setCart }) => {
  const products = useSelector((store) => store.productsReducer.products);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);

  const [selectedBrands, setSelectedBrands] = useState("");
  const [selectedColors, setSelectedColors] = useState("");

  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    async function fetchingBrands() {
      const response = await api.get("/brands");
      setBrands(response.data);
    }
    fetchingBrands();
  }, []);

  useEffect(() => {
    async function fetchingColors() {
      const response = await api.get(`/colors`);
      setColors(response.data);
    }
    fetchingColors();
  }, []);

  useEffect(() => {
    async function fetchingProducts() {
      setLoading(true);

      let query = `https://headphones-server.onrender.com/products`;

      const params = [];

      if (selectedColors) {
        params.push(`color_options_like=${encodeURIComponent(selectedColors)}`);
      }

      if (selectedBrands) {
        params.push(`brand_name=${encodeURIComponent(selectedBrands)}`);
      }

      if (params.length > 0) {
        query += `?${params.join("&")}`;
      }

      try {
        const response = await api.get(`${query}`);
        let products = response.data;

        if (sortOrder === "asc") {
          products.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "desc") {
          products.sort((a, b) => b.price - a.price);
        }

        dispatch(addProducts(products));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchingProducts();
  }, [selectedBrands, selectedColors, sortOrder]);

  return (
    <div className="">
      <hr className="mb-[50px]" />
      <div className="w-full h-[85px] flex justify-between items-center px-[130px] bg-[#D5F8CF] text-[#0BA42D] mb-[50px]" >
        <h3 className="ml-[150px]">Filter By:</h3>
        <select
          className="bg-transparent outline-none"
          name="price"
          id=""
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div className="mt-[80px] flex gap-[50px] container">
        <aside className="w-[270px]">
          <img src={Line} alt="" className="" />
          <div>
            <div className="w-full flex justify-between items-center cursor-pointer">
              <h3 className="m-[15px] ml-[70px]">BRAND</h3>
            </div>
            <ul className="ml-[70px]">
              {brands.map((brand, index) => (
                <li key={index} className="mb-[5px]">
                  <input
                    className="product-input"
                    type="checkbox"
                    value={brand}
                    name="brand"
                    id={brand}
                    checked={brand === selectedBrands}
                    onChange={(e) => setSelectedBrands(e.target.value)}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </li>
              ))}
              <button className="resetBtn mb-[20px]" onClick={() => setSelectedBrands("")}>Reset</button>
            </ul>
            <img src={Line} alt="" className="my-2" />
          </div>
          <div>
            <h3 className="m-[15px] ml-[70px]">COLORS</h3>
            <ul className="w-[200px] gap-1 flex flex-wrap ml-[70px]">
              {colors.map((color, index) => (
                <li key={index}>
                  <div
                    style={{
                      border: "1px solid black",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: color,
                      outline: selectedColors === color ? "3px solid red" : "",
                    }}
                    onClick={() => setSelectedColors(color)}
                  />
                </li>
              ))}
              <button className="resetBtn" onClick={() => setSelectedColors("")}>Reset</button>
            </ul>
          </div>
        </aside>
        <main className="w-[1250px] m-auto ml-[50px]">
          {loading ? (
            <p>Loading...</p>
          ) : products.length ? (
            <div className="ul_container">
              {products.map((product) => (
                <Cart
                  key={product.id}
                  product={product}
                  cart={cart}
                  setCart={setCart}
                />
              ))}
            </div>
          ) : (
            <p>No products</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
