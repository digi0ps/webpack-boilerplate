import lodash from "lodash";
import "./index.css";
import Picture from "../images/image.png";

const addComponent = component => document.body.appendChild(component);

const textComponent = text => {
  const element = document.createElement("div");
  element.innerHTML = lodash.join(text, " ");
  element.classList.add("hello");
  addComponent(element);
};

const imageComponent = image => {
  const img = new Image();
  img.src = image;
  addComponent(img);
};

textComponent(["Hello", "World"]);
imageComponent(Picture);
