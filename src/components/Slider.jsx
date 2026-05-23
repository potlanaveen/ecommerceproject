import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
  color: "white",
};
const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <IoIosArrowBack size={24} />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <IoIosArrowForward size={24} />
    </button>
  ),
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "500px",
  borderRadius: "15px",
  position: "relative",
  overflow: "hidden",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)",
  zIndex: 1,
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cover&w=3457&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cover&w=1470&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cover&w=1472&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  
];

function Slider() {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Slide {...properties} transitionDuration={500}>
          {slideImages.map((slideImage, index) => (
            <div key={index} className="px-2">
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <div style={overlayStyle}></div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Slider;
