import { useState, useEffect } from "react";
import AddToCart from "./AddToCart";

//fruits
import "./resources/fruit/apple.jpg";
import "./resources/fruit/orange.jpg";
import "./resources/fruit/banana.jpg";
//vegetables
import "./resources/vegetable/cabbage.jpg";
import "./resources/vegetable/carrot.jpg";
import "./resources/vegetable/eggplant.jpg";
//proteins
import "./resources/protein/beef.jpg";
import "./resources/protein/pork.jpg";
import "./resources/protein/chicken.jpg";
import "./resources/protein/fish.jpg";
import "./resources/protein/egg.jpg";
//dairy
import "./resources/dairy/butter.jpg";
import "./resources/dairy/cheese.jpg";
import "./resources/dairy/milk.jpg";

export const data = [
  {
    name: "Apple",
    type: "fruit",
    image: "apple",
    price: (45).toFixed(2)
  },
  {
    name: "Orange",
    type: "fruit",
    image: "orange",
    price: (45).toFixed(2)
  },
  {
    name: "Banana",
    type: "fruit",
    image: "banana",
    price: (30).toFixed(2)
  },
  {
    name: "Cabbage",
    type: "vegetable",
    image: "cabbage",
    price: (70).toFixed(2)
  },
  {
    name: "Carrot",
    type: "vegetable",
    image: "carrot",
    price: (40).toFixed(2)
  },
  {
    name: "Eggplant",
    type: "vegetable",
    image: "eggplant",
    price: (55).toFixed(2)
  },
  {
    name: "Beef",
    type: "protein",
    image: "beef",
    price: (464).toFixed(2)
  },
  {
    name: "Pork",
    type: "protein",
    image: "pork",
    price: (355).toFixed(2)
  },
  {
    name: "Chicken",
    type: "protein",
    image: "chicken",
    price: (208).toFixed(2)
  },
  {
    name: "Fish",
    type: "protein",
    image: "fish",
    price: (150).toFixed(2)
  },
  {
    name: "Egg",
    type: "protein",
    image: "egg",
    price: (103).toFixed(2)
  },
  {
    name: "Butter",
    type: "dairy",
    image: "butter",
    price: (185).toFixed(2)
  },
  {
    name: "Cheese",
    type: "dairy",
    image: "cheese",
    price: (61).toFixed(2)
  },
  {
    name: "Milk",
    type: "dairy",
    image: "milk",
    price: (110).toFixed(2)
  }
];

const Card = (props) => {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (props.filter === "all" || props.filter === "") {
      setFilter(data);
    } else {
      setFilter(data.filter((element) => element.type === props.filter));
    }
  }, [props.filter]);

  const listItems = filter.map((element, index) => (
    <div class="card mb-2" key={index}>
      <div class="card-block">
        <div class="p-5">
          <img
            src={require("./resources/" +
              element.type +
              "/" +
              element.image +
              ".jpg")}
            class="img-fluid"
            alt={element.name}
          />
        </div>
        <div class="card-body">
          <div class="card-title">
            <div class="row">
              <h5>{element.name}</h5>
            </div>
            <div class="row">
              <div class="text-success">Php&nbsp;&nbsp;{element.price}</div>
            </div>
          </div>
        </div>
        <div class="card-footer mb-2">
          <AddToCart
            item={element.name}
            type={element.type}
            image={element.image}
            price={element.price}
          />
        </div>
      </div>
    </div>
  ));

  return <div class="card-columns">{listItems}</div>;
};

export default Card;
