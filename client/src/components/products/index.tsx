import React from "react";
import PropTypes from "prop-types";
import { data } from "../products/data";

interface ProductProps {
  name: string;
  title: string;
  image: string;
  btntext: string;
  link: string;
}

const Product: React.FC<ProductProps> = ({
  name,
  title,
  image,
  btntext,
  link,
}) => {
  return (
    <div className="container mx-auto p-4 my-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1">
          <img
            src={image}
            alt={name}
            className="rounded-full shadow-md w-50%  bg-[#fcb114]"
          />
        </div>
        <div className="md:col-span-1">
          <h1 className="text-2xl font-semibold mb-2">{name}</h1>
          <p className="text-base text-white mb-4">{title}</p>
          <a href={link}>
            <button className="bg-[#1178bb] text-white px-4 py-2 rounded-md hover:bg-sky-700">
              {btntext}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  btntext: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const Products: React.FC = () => {
  return (
    <>
      <section id="Product">
        <div className="bg-[#646464] min-h-screen py-[3rem] mt-10">
          <div className="text-center w-full text-lg text-white pb-20">
            <div className="text-center w-full text-3xl font-bold text-white py-[5rem]">
              <h1>Our Products</h1>
              <hr />
            </div>
            {data.map((item, index) => (
              <Product key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
