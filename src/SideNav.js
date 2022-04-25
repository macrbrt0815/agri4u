import all from "./resources/icons/all.png";
import fruit from "./resources/icons/fruit.png";
import vegie from "./resources/icons/vegetable.png";
import protein from "./resources/icons/protein.png";
import dairy from "./resources/icons/dairy.png";

const SideNav = (props) => {
  return (
    <div class="sidenav position-sticky">
      <div class="list-group justify-content-between">
        <button
          value="all"
          class="list-group-item list-group-item-action"
          onClick={props.getFilter}
        >
          <img class="icon" src={all} /> &nbsp; All
        </button>
        <button
          value="fruit"
          class="list-group-item list-group-item-action"
          onClick={props.getFilter}
        >
          <img class="icon" src={fruit} /> &nbsp; Fruits
        </button>
        <button
          value="vegetable"
          class="list-group-item list-group-item-action"
          onClick={props.getFilter}
        >
          <img class="icon" src={vegie} /> &nbsp; Vegetables
        </button>
        <button
          value="protein"
          class="list-group-item list-group-item-action"
          onClick={props.getFilter}
        >
          <img class="icon" src={protein} /> &nbsp; Proteins
        </button>
        <button
          value="dairy"
          class="list-group-item list-group-item-action"
          onClick={props.getFilter}
        >
          <img class="icon" src={dairy} /> &nbsp; Dairy
        </button>
      </div>
    </div>
  );
};

export default SideNav;
