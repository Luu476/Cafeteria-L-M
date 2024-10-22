import cakes from "./cakes.js";
import coffees from "./coffees.js";

function createProductElement(product) {
  let article = document.createElement("article");
  article.innerHTML = `
  <h1>${product.name}</h1>
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
  `;
  return article;
}

let sectionCoffees = document.getElementById("showProducts_coffees");
if (sectionCoffees) {
  coffees.forEach((coffee) => {
    let coffeeElement = createProductElement(coffee);
    sectionCoffees.appendChild(coffeeElement);
  });
}

let sectionCakes = document.getElementById("showProducts_cakes");

if (sectionCakes) {
  cakes.forEach((cake) => {
    let cakeElement = createProductElement(cake);
    sectionCakes.appendChild(cakeElement);
  });
}

let sectionPromos = document.getElementById("showProducts_promos");
if (sectionPromos) {
  promotions.forEach((promo) => {
    console.log("holaaa");
    let article = document.createElement("article");
    article.innerHTML = `
      <div class="promo-item">
        <div class="promo-coffee">
          <img src="${promo.coffee.image}" alt="${promo.coffee.name}">
          <h2>${promo.coffee.name}</h2>
          <p>${promo.coffee.description}</p>
        </div>
        <div class="promo-cake">
          <img src="${promo.cake.image}" alt="${promo.cake.name}">
          <h2>${promo.cake.name}</h2>
          <p>${promo.cake.description}</p>
        </div>
      </div>
    `;
    sectionPromos.appendChild(article);
  });
}

console.log(cakes);
console.log(coffees);
console.log(promos);