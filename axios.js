import "regenerator-runtime/runtime";
import axios from "axios";

var url = "http://api.giphy.com/v1/gifs/search?q=";
var keyWord = "";
var api_key = "&api_key=9amNrlAB3hfyJtJByZfmtmLG7S8VGG7s";
var input = document.querySelector(".input");
var button = document.querySelector(".button");
var remove = document.querySelector(".remove");
var gift = document.querySelector(".gift");
button.onclick = () => {
  keyWord = input.value;
  axios
    .get(url + keyWord + api_key)
    .then((response) => {
      const { data } = response;
      const firstElement = data.data[0];
      const {
        images: {
          original: { url },
        },
      } = firstElement;
      let elementImg = document.createElement("img");
      elementImg.src = url;
      elementImg.className = "itemImg";
      gift.appendChild(elementImg);
    })
    .catch((e) => {
      console.log(e);
    });
};

remove.onclick = () => {
  gift.innerHTML = "";
};
