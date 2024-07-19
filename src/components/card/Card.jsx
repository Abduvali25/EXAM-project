import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const Cart = ({ product, cart, setCart }) => {
  return (
    <main>
      <div className="w-[230px] h-[500px] border-[1px solid to-black] p-3 containerrr">
        <img
          className="w-full h-[200px] mb-2"
          src={product.image_url}
          alt={product.name}
        />
        <div></div>
        <h4 className="m-1 text-[20px] font-bold">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h4>
        <p>{product.description}</p>
        <div className="flex gap-2 my-4">
          {product.color_options.map((color, index) => (
            <div
              key={index}
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: "1px solid black",
                background: color,
              }}
              className=""
            />
          ))}
        </div>
        <strong>{`$${product.price}`}</strong>
        <div className="add-btn inline">
          <Button onClick={() => setCart([...cart, product])}>
            <FaCartShopping />
            Add To Cart
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
