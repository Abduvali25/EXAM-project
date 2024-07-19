import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import line from "../../assets/Line 599.svg";
import secondLine from "../../assets/Line 58.svg";

const Cart = ({ products }) => {
  const totalPrice = products.reduce((acc, current) => acc + current.price, 0);

  return (
    <div className="w-[1290px] h-[100vh] m-auto mt-[100px]">
      <div className="pl-8 flex flex-col gap-12 mb-[50px]">
        <Link
          to={"/products"}
          className="flex items-center readex font-bold text-[18px] gap-2"
        >
          <span>
            <IoMdArrowBack />
          </span>
          Back to Shopping
        </Link>
        <h1 className="hammer font-normal text-[32px]">SHOPPING CART</h1>
      </div>
      <main className="flex gap-10 ">
        <section className="w-[833px]">
          <img src={line} alt="" />
          <article className="flex justify-between pl-16">
            <h1 className="hammer font-normal text-[22px]">Product</h1>
            <article className="flex gap-12 items-center pr-6">
              <h1 className="hammer font-normal text-[22px] pr-4">Quantity</h1>
              <h1 className="hammer font-normal text-[22px]">Price</h1>
            </article>
          </article>
          <img src={line} alt="" />
          <div className="w-full p-10">
            <div className="w-[791px] flex flex-col gap-8">
              {products &&
                products.map((p, index) => {
                  return (
                    <div
                      className="w-[791px] h-[155px] bottom flex gap-5 justify-between"
                      key={index}
                    >
                      <div className="flex gap-8">
                        <img
                          className="w-[155px] h-[155px]"
                          src={p.image_url}
                          alt=""
                        />
                        <article className="flex flex-col gap-3 ">
                          <h1 className="hammer font-normal text-[20px]">
                            {p.brand_name}
                          </h1>
                          <p className="readex font-light text-[18px]">
                            {p.name}
                          </p>
                          <p className="readex font-light text-[16px]">Black</p>
                          <p className="readex font-light text-[16px] text-[#0BA42D]">
                            In Stock
                          </p>
                        </article>
                      </div>
                      <div className="h-[50px] flex gap-10 p-3 items-center pr-[10px]">
                        <button className="w-[135px] h-[47px] rounded-[40px] bg-[#F5F5F5]">
                          - <span className="mx-5">1</span> +
                        </button>
                        <b>{`$${p.price}`}</b>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
        <aside className="w-[380px] ">
          <article className="flex flex-col gap-5">
            <h1 className="hammer font-normal text-[32px]">CART TOTALS</h1>
            <img src={secondLine} alt="" />
            <p className="flex justify-between readex font-light text-[18px]">
              Shipping (3-5 Business Days){" "}
              <span className="readex font-medium">Free</span>
            </p>
            <p className="flex justify-between readex font-light text-[18px]">
              TAX (estimated for the United States (US)){" "}
              <span className="readex font-medium">$0</span>
            </p>
            <p className="flex justify-between readex font-light text-[18px]">
              Subtotal{" "}
              <span className="readex font-medium">{`$${totalPrice.toFixed(
                2
              )}`}</span>
            </p>
            <img className="my-4" src={secondLine} alt="" />
            <b className="flex justify-between readex">
              Total <b>{`$${totalPrice.toFixed(2)}`}</b>
            </b>
          </article>
          <button className="w-[396px] h-[54px] rounded-[10px]  px-[53px] my-10 bg-[#0BA42D] Inter font-bold text-white text-[18px]">
            Proceed to Checkout
          </button>
          <Link
            to={"/products"}
            className="flex items-center readex font-bold text-[18px] pl-[110px] gap-2"
          >
            <span>
              <IoMdArrowBack />
            </span>
            Back to Shopping
          </Link>
        </aside>
      </main>
    </div>
  );
};

export default Cart;
