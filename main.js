let navbar = document.querySelector(".navbar");
let saw = document.querySelector("#menu-btn");

saw.onclick = () => {
  navbar.classList.toggle("activeNav");
};

saw.addEventListener("click", () => {
  navbar.classList.toggle("navbar");
});

let cartItem = document.querySelector(".cart-items-container");
let saw2 = document.querySelector("#cart-btn");

saw2.onclick = () => {
  cartItem.classList.toggle("activeCart");
};

saw2.addEventListener("click", () => {
  cartItem.classList.toggle("cart-items-container");
});

let search = document.querySelector(".search-form");
let saw3 = document.querySelector("#serch-btn");

saw3.onclick = () => {
  search.classList.toggle("activeSearch");
};

saw3.addEventListener("click", () => {
  search.classList.toggle("search-form");
});

