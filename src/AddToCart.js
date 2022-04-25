import { useEffect, useState } from "react";

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

export let customerCart = [];

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };
  return {
    count,
    increment,
    decrement
  };
};

const AddToCart = (props) => {
  //set item quantity
  //fruits
  const {
    count: appleQuantity,
    increment: incrementApple,
    decrement: decrementApple
  } = useCounter(0);
  const {
    count: orangeQuantity,
    increment: incrementOrange,
    decrement: decrementOrange
  } = useCounter(0);
  const {
    count: bananaQuantity,
    increment: incrementBanana,
    decrement: decrementBanana
  } = useCounter(0);
  //vegetables
  const {
    count: cabbageQuantity,
    increment: incrementCabbage,
    decrement: decrementCabbage
  } = useCounter(0);
  const {
    count: carrotQuantity,
    increment: incrementCarrot,
    decrement: decrementCarrot
  } = useCounter(0);
  const {
    count: eggplantQuantity,
    increment: incrementEggplant,
    decrement: decrementEggplant
  } = useCounter(0);
  //proteins
  const {
    count: beefQuantity,
    increment: incrementBeef,
    decrement: decrementBeef
  } = useCounter(0);
  const {
    count: porkQuantity,
    increment: incrementPork,
    decrement: decrementPork
  } = useCounter(0);
  const {
    count: chickenQuantity,
    increment: incrementChicken,
    decrement: decrementChicken
  } = useCounter(0);
  const {
    count: fishQuantity,
    increment: incrementFish,
    decrement: decrementFish
  } = useCounter(0);
  const {
    count: eggQuantity,
    increment: incrementEgg,
    decrement: decrementEgg
  } = useCounter(0);
  //dairy
  const {
    count: butterQuantity,
    increment: incrementButter,
    decrement: decrementButter
  } = useCounter(0);
  const {
    count: cheeseQuantity,
    increment: incrementCheese,
    decrement: decrementCheese
  } = useCounter(0);
  const {
    count: milkQuantity,
    increment: incrementMilk,
    decrement: decrementMilk
  } = useCounter(0);
  //add item to cart
  const addToCart = (
    itemName,
    itemType,
    itemImage,
    itemPrice,
    itemQuantity
  ) => {
    let inCart = false;
    const total = itemPrice * itemQuantity;
    const item = {
      name: itemName,
      type: itemType,
      image: itemImage,
      price: itemPrice,
      quantity: itemQuantity,
      total: total
    };
    for (let index = 0; index < customerCart.length; index++) {
      if (customerCart[0].name === itemName) {
        inCart = true;
        customerCart[0].quantity += itemQuantity;
        customerCart[0].total += total;
      }
    }
    if (!inCart) {
      customerCart = [...customerCart];
      customerCart.push(item);
    }
    inCart = false;
  };

  switch (props.item) {
    //fruits
    case "Apple":
      return (
        <div>
          <div class="row">
            <small>Quantity:</small>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={decrementApple}
                  type="button"
                  class="btn btn-minus btn-sm"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm text-center "
                value={appleQuantity}
                min="1"
                disabled
              />
              <div class="input-group-prepend">
                <button
                  onClick={incrementApple}
                  type="button"
                  class="btn btn-add btn-sm"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-1 mx-auto">
            {appleQuantity !== 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    appleQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    appleQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );

    case "Orange":
      return (
        <div>
          <div class="row">
            <small>Quantity:</small>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={decrementOrange}
                  type="button"
                  class="btn btn-minus btn-sm"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm text-center "
                value={orangeQuantity}
                min="1"
                disabled
              />
              <div class="input-group-prepend">
                <button
                  onClick={incrementOrange}
                  type="button"
                  class="btn btn-add btn-sm"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-1 mx-auto">
            {orangeQuantity !== 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    orangeQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    orangeQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );

    case "Banana":
      return (
        <div>
          <div class="row">
            <small>Quantity:</small>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={decrementBanana}
                  type="button"
                  class="btn btn-minus btn-sm"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm text-center "
                value={bananaQuantity}
                min="1"
                disabled
              />
              <div class="input-group-prepend">
                <button
                  onClick={incrementBanana}
                  type="button"
                  class="btn btn-add btn-sm"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-1 mx-auto">
            {bananaQuantity !== 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    bananaQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    bananaQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );

    //vegetables
    case "Cabbage":
      return (
        <div>
          <div class="row">
            <small>Quantity:</small>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={decrementCabbage}
                  type="button"
                  class="btn btn-minus btn-sm"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm text-center "
                value={cabbageQuantity}
                min="1"
                disabled
              />
              <div class="input-group-prepend">
                <button
                  onClick={incrementCabbage}
                  type="button"
                  class="btn btn-add btn-sm"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-1 mx-auto">
            {cabbageQuantity !== 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    cabbageQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    cabbageQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );

    case "Carrot":
      return (
        <div>
          <div class="row">
            <small>Quantity:</small>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={decrementCarrot}
                  type="button"
                  class="btn btn-minus btn-sm"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm text-center "
                value={carrotQuantity}
                min="1"
                disabled
              />
              <div class="input-group-prepend">
                <button
                  onClick={incrementCarrot}
                  type="button"
                  class="btn btn-add btn-sm"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-1 mx-auto">
            {carrotQuantity !== 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    carrotQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    carrotQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );

    case "Eggplant":
      return (
        <div>
          <div class="row">
            <small>Quantity:</small>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={decrementEggplant}
                  type="button"
                  class="btn btn-minus btn-sm"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm text-center "
                value={eggplantQuantity}
                min="1"
                disabled
              />
              <div class="input-group-prepend">
                <button
                  onClick={incrementEggplant}
                  type="button"
                  class="btn btn-add btn-sm"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-1 mx-auto">
            {eggplantQuantity !== 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    eggplantQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    eggplantQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );

    //proteins
    case "Beef":
      return (
        <div>
          <div class="row">
            <small>Quantity:</small>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={decrementBeef}
                  type="button"
                  class="btn btn-minus btn-sm"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm text-center "
                value={beefQuantity}
                min="1"
                disabled
              />
              <div class="input-group-prepend">
                <button
                  onClick={incrementBeef}
                  type="button"
                  class="btn btn-add btn-sm"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-1 mx-auto">
            {beefQuantity !== 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    beefQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    beefQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );

    case "Pork":
      return (
        <div>
          <div class="row">
            <small>Quantity:</small>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={decrementPork}
                  type="button"
                  class="btn btn-minus btn-sm"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm text-center "
                value={porkQuantity}
                min="1"
                disabled
              />
              <div class="input-group-prepend">
                <button
                  onClick={incrementPork}
                  type="button"
                  class="btn btn-add btn-sm"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-1 mx-auto">
            {porkQuantity !== 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    porkQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    porkQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );

    case "Chicken":
      return (
        <div>
          <div class="row">
            <small>Quantity:</small>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={decrementChicken}
                  type="button"
                  class="btn btn-minus btn-sm"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm text-center "
                value={chickenQuantity}
                min="1"
                disabled
              />
              <div class="input-group-prepend">
                <button
                  onClick={incrementChicken}
                  type="button"
                  class="btn btn-add btn-sm"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-1 mx-auto">
            {chickenQuantity !== 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    chickenQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    chickenQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );

    case "Fish":
      return (
        <div>
          <div class="row">
            <small>Quantity:</small>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={decrementFish}
                  type="button"
                  class="btn btn-minus btn-sm"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm text-center "
                value={fishQuantity}
                min="1"
                disabled
              />
              <div class="input-group-prepend">
                <button
                  onClick={incrementFish}
                  type="button"
                  class="btn btn-add btn-sm"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-1 mx-auto">
            {fishQuantity !== 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    fishQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    fishQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );

    case "Egg":
      return (
        <div>
          <div class="row">
            <small>Quantity:</small>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={decrementEgg}
                  type="button"
                  class="btn btn-minus btn-sm"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm text-center "
                value={eggQuantity}
                min="1"
                disabled
              />
              <div class="input-group-prepend">
                <button
                  onClick={incrementEgg}
                  type="button"
                  class="btn btn-add btn-sm"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-1 mx-auto">
            {eggQuantity !== 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    eggQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    eggQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );

    //dairy
    case "Butter":
      return (
        <div>
          <div class="row">
            <small>Quantity:</small>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={decrementButter}
                  type="button"
                  class="btn btn-minus btn-sm"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm text-center "
                value={butterQuantity}
                min="1"
                disabled
              />
              <div class="input-group-prepend">
                <button
                  onClick={incrementButter}
                  type="button"
                  class="btn btn-add btn-sm"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-1 mx-auto">
            {butterQuantity !== 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    butterQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    butterQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );

    case "Cheese":
      return (
        <div>
          <div class="row">
            <small>Quantity:</small>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={decrementCheese}
                  type="button"
                  class="btn btn-minus btn-sm"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm text-center "
                value={cheeseQuantity}
                min="1"
                disabled
              />
              <div class="input-group-prepend">
                <button
                  onClick={incrementCheese}
                  type="button"
                  class="btn btn-add btn-sm"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-1 mx-auto">
            {cheeseQuantity !== 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    cheeseQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    cheeseQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );

    case "Milk":
      return (
        <div>
          <div class="row">
            <small>Quantity:</small>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={decrementMilk}
                  type="button"
                  class="btn btn-minus btn-sm"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm text-center "
                value={milkQuantity}
                min="1"
                disabled
              />
              <div class="input-group-prepend">
                <button
                  onClick={incrementMilk}
                  type="button"
                  class="btn btn-add btn-sm"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-1 mx-auto">
            {milkQuantity !== 0 ? (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    milkQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  addToCart(
                    props.item,
                    props.type,
                    props.image,
                    props.price,
                    milkQuantity
                  )
                }
                class="btn btn-dark btn-block"
                type="button"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      );

    default:
      return (
        <div class="input-group">
          <div class="input-group-prepend">
            <button type="button" class="btn btn-minus btn-sm decrement">
              <i class="fas fa-minus"></i>
            </button>
          </div>
          <input
            type="text"
            class="form-control form-control-sm text-center "
            min="1"
            disabled
          />
          <div class="input-group-prepend">
            <button type="button" class="btn btn-add btn-sm increment">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      );
  }
};

export default AddToCart;
