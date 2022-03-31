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

const PizzaCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll:2,
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
      ingredients: " Piña, Jamon y Queso.",
      prices: [
        ["chica", 100],
        ["mediana", 125],
        ["grande", 165],
      ],
    },
    {
      name: "Carnes Frias",
      img: imgCarnesFrias,
      ingredients: "Jamon, Salami, Salchicha y Queso.",
      prices: [
        ["chica", 100],
        ["mediana", 125],
        ["grande", 165],
      ],
    },
    {
      name: "Pepperonni",
      img: imgPepperonni,
      ingredients: "Pepperonni y Queso.",
      prices: [
        ["chica", 90],
        ["mediana", 115],
        ["grande", 155],
      ],
    },
    {
      name: "4 Quesos",
      img: img4Quesos,
      ingredients: "4 Quesos.",
      prices: [
        ["chica", 100],
        ["mediana", 125],
        ["grande", 165],
      ],
    },
    {
      name: "Mitad y Mitad",
      img: img4QuesosPepperonni,
      ingredients: "Pepperonni y 4 Quesos.",
      prices: [
        ["chica", 100],
        ["mediana", 125],
        ["grande", 165],
      ],
    },
  ];

  return (
    <div className=" w-full lg:w-[60%]" >
      <Slider {...settings}>
        {pizzasMenu.map((element, index) => (
          <PizzaCarouselItem key={index} infoPizza={element} />
        ))}
      </Slider>
    </div>
  );
};

export default PizzaCarousel;
