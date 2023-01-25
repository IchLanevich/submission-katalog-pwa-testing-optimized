import CONFIG from "../../globals/config";
import "../../components/customer-review";

const createRestaurantDetailTemplate = (restaurant) => `
  <article id="restaurant-details" tabindex='0'>
  <h2 tabindex='0' class="restaurant__title">${restaurant.name}</h2>
  <img tabindex='0' class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}/${
  restaurant.pictureId
}" alt="${restaurant.name} picture"/>
  <h3 tabindex='0' class="restaurant-heading-text">Information</h3>
  <div class="restaurant__info">
    <div class="restaurant__crumb">
      <h4 tabindex='0'>Restaurant name</h4>
      <p tabindex='0'>${restaurant.name}</p>
    </div>
    <div class="restaurant__crumb">
      <h4 tabindex='0'>Rating</h4>
      <p tabindex='0'>⭐️${restaurant.rating}</p>
    </div>
    <div class="restaurant__crumb">
    <h4 tabindex='0'>Categories</h4>
    <ul class="restaurant__categories">${restaurant.categories
      .map(
        (category) =>
          `<li tabindex='0' class="restaurant__category">${category.name}</li>`
      )
      .join("")}
    </ul>
    </div>
    <div class="restaurant__crumb">
    <h4 tabindex='0'>City</h4>
    <p tabindex='0'>${restaurant.city}</p>
    </div>
    <div class="restaurant__crumb">
    <h4 tabindex='0'>Address</h4>
    <p tabindex='0'>${restaurant.address}</p>
    </div>
  </div>
  <div class="restaurant__description">
    <h4 tabindex='0'>Description</h4>
    <p tabindex='0'>${restaurant.description}</p>
  </div>
  <div class="restaurant-menus">
  <div class="restaurant-menus__drinks">
  <h4 tabindex="0" class="restaurant-menus__title">Drinks</h4>
    <ul class="restaurant-menus__drinks__list">
    ${restaurant.menus.drinks
      .map((drink) => `<li tabindex="0">${drink.name}</li>`)
      .join("")}
  </ul>
  </div>
  <div class="restaurant-menus__drinks">
  <h4 tabindex="0" class="restaurant-menus__title">Foods</h4>
    <ul class="restaurant-menus__foods__list">
      ${restaurant.menus.foods
        .map((food) => `<li tabindex="0">${food.name}</li>`)
        .join("")}
    </ul>
  </div>
  </div>
  </article>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
      src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}">
    <div class="restaurant-item__header__rating" >
      <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </ >
      </div >
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div >
  `;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
