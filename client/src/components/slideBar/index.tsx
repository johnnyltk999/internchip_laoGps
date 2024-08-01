import { useEffect, useState } from "react";
import pic from "../../assets/VVtower.jpg";
import pic2 from "../../assets/VVtower.jpg";
import pic3 from "../../assets/VVtower.jpg";
import pic4 from "../../assets/VVtower.jpg";
import pic5 from "../../assets/ntp.jpg";

const Slider = () => {
  const images = [pic, pic2, pic3, pic4, pic5];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const autoPlay = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(autoPlay);
    };
  }, [images.length]);

  return (
    <div className="py-8">
      <h1 className="text-center text-3xl font-bold text-[#1778bb] py-8">
        Part of Customer
      </h1>
      <div className="body flex items-center justify-center bg-white py-5 ">
        <div className="slider overflow-hidden ">
          <div
            className="slide-track flex transition-transform duration-500 "
            style={{
              transform: `translateX(calc(-${500 * currentIndex}px))`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="slide flex-shrink-0 flex-grow-0 w-64 md:w-96 mx-2 rounded-lg"
                style={{ margin: "50px" }}
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="object-cover w-full h-32 md:h-48 lg:h-64 rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
