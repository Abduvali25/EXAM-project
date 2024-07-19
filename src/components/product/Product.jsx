import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import Line from "../../assets/Line 29.png";
import { VscCallIncoming } from "react-icons/vsc";
import heart from "../../assets/fi-bs-heart.png";
import delivery from "../../assets/delivery.png"

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchProductId() {
      const response = await api.get(`/products/${productId}`);
      setProduct(response.data);
    }

    

    fetchProductId();
  }, [productId]);


  return (
    <div className="product-box">
      {product && (
        <>
          <p className="text-lg ml-[220px] mt-[50px]">Products / {product.brand_name} / {product.name}</p>
          <div className="product-box-mini">
          <img src={product.image_url} alt="" className="w-[700px] "/>
          <div className="product-content-text">
            <h1 className="text-4xl">{product.name}</h1>
            <p>{product.description}</p>
             <p>⭐️⭐️⭐️⭐️⭐️ {`(${product.rating_counts})`}</p>
             <img src={Line} alt="" className="" />
             <p>{`${product.price}$`}</p>
            <p>{product.description}</p>
            <img src={Line} alt="" className="" />
            <div>
              <p>Choose a color</p>
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
            </div>
            <img src={Line} alt="" className="" />
            <div className="flex gap-5 mt-[10px]">
              <p className="p-button">-<button className=" ml-[15px] mr-[15px]">1</button>+</p>
              <p>Only <span className="color">16 items</span> left! <br /> Don't miss it</p>
            </div>
           <div className="flex2">
           <button
          className="ml-[430px] mb-[170px] bottom-button w-[500px] h-[50px] flex justify-center items-center gap-2 bg-[#0BA42D] text-white rounded-lg absolute mt-1">
          Add To Cart
        </button>
           </div>
          </div>
          <img className="w-[50px] h-[50px] mt-[480px] ml-[20px]" src={heart} alt="yurak" />
          </div>
          <div className="img-box mr-[500px]">
          <img src={product.image_url} alt="" className="w-[150px] "/>
          <img src={product.image_url} alt="" className="w-[150px] "/>
          <img src={product.image_url} alt="" className="w-[150px] "/>
          <img src={product.image_url} alt="" className="w-[150px] "/>
          <img src={product.image_url} alt="" className="w-[150px] "/>
          </div>
          <img src={delivery} alt="rasm" className="w-[600px] mt-[850px] ml-[600px]"/>
        </>
      )}
    </div>
  );
};

export default Product;
