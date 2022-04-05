import React from "react";
import "./_slick-theme.css";
import "./_slick.css";
import Slider from "react-slick";
import imgCarnesFrias from "../../assets/images/carnes-frias-pizza.png";
import imgHawaiana from "../../assets/images/hawaiana-pizza.png";
import img4Quesos from "../../assets/images/quesos-pizza.png";
import imgPepperonni from "../../assets/images/pepperonni-pizza.png";
import img4QuesosPepperonni from "../../assets/images/pepperonni-quesos-pizza.png";
import PizzaCarouselItem from "./PizzaCarouselItem/PizzaCarouselItem";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PizzaCarousel = () => {
  const [sliderRef, setSliderRef] = React.useState(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const pizzasMenu = [
    {
      name: "Hawaiana",
      img: imgHawaiana,
      ingredients: ["Piña", "Jamon", "Queso"],
      id: 1,
      prices: [
        ["Chica", 100 , 1],
        ["Mediana", 125 , 2],
        ["Grande", 165,3],
      ],
    },
    {
      name: "Carnes Frias",
      img: imgCarnesFrias,
      ingredients: ["Jamon", "Salami", "Salchicha", "Queso"],
      id: 2,
      prices: [
        ["Chica", 115,4],
        ["Mediana", 140,5],
        ["Grande", 280,6],
      ],
    },
    {
      name: "Pepperonni",
      img: imgPepperonni,
      ingredients: ["Pepperonni", "Queso"],
      id: 3,
      prices: [
        ["Chica", 85,7],
        ["Mediana", 110,8],
        ["Grande", 150,9],
      ],
    },
    {
      name: "4 Quesos",
      img: img4Quesos,
      ingredients: [
        "Queso",
        "Queso Mozzarella",
        "Queso Parmessano",
        "Queso Cheddar",
      ],
      id: 4,
      prices: [
        ["Chica", 85 , 10],
        ["Mediana", 110,11],
        ["Grande", 150,12],
      ],
    },
    {
      name: "Mitad y Mitad",
      img: img4QuesosPepperonni,
      ingredients: [
        "Queso",
        "Queso Mozzarella",
        "Queso Parmessano",
        "Queso Cheddar",
        "Pepperonni",
      ],
      id: 5,
      prices: [
        ["Chica", 100,13],
        ["Mediana", 125,14],
        ["Grande", 165,15],
      ],
    },
  ];

  return (
    <div className=" w-full lg:w-[60%] relative">
      <button
        className=" flex items-center justify-center text-4xl text-sky-200 absolute top-[50%] left-[-20px] z-10 h-9 w-9 rounded-lg bg-transparent border-2 border-transparent hover:bg-dark-blue-1 hover:border-white transition-all duration-300 active:scale-75  "
        onClick={sliderRef?.slickPrev}
      >
        <FaAngleLeft />
      </button>
      <button
        className=" flex items-center justify-center text-4xl text-sky-200 absolute top-[50%] right-[-20px] z-10 h-9 w-9 rounded-lg bg-transparent border-2 border-transparent hover:bg-dark-blue-1 hover:border-white transition-all duration-300 active:scale-75 "
        onClick={sliderRef?.slickNext}
      >
        <FaAngleRight />
      </button>
      <Slider ref={setSliderRef} {...settings}>
        {pizzasMenu.map((element, index) => (
          <PizzaCarouselItem key={index} infoPizza={element} />
        ))}
      </Slider>
    </div>
  );
};

export default PizzaCarousel;
