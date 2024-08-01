import React from "react";
import PropTypes from "prop-types";

import { data } from "../cards/data";

interface CardProps {
  title: string;
  image: string;
  text: string;
  feature: string;
}

const Card: React.FC<CardProps> = ({ title, image, text, feature }) => {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white ">
      <img
        className="w-24 h-24 mx-auto mt-[-3rem] bg-white rounded-lg p-1"
        src={image}
        alt={title}
      />
      <h2 className="text-2xl font-bold text-center py-6">{title}</h2>
      <p className="text-center text-4xl font-bold">{text}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-6 text-2xl">{feature}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  feature: PropTypes.string.isRequired,
};

const Cards: React.FC = () => {
  return (
    <section id="Card">
      <div className="w-full py-16 px-4 bg-[#f15d31] ">
        <div className="text-center w-full text-3xl font-bold text-white pb-20 mt-10">
          <h1>Why Use LAO GPS TRACKER!</h1>
        </div>

        <div className="max-w-[1240px] mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {data.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
