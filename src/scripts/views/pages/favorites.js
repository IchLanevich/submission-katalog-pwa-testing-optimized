import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import "../../components/restaurant-item";

const Favorites = {
  async render() {
    return `
      <div class="content">
        <div class="section-title">
          <h2 class="content__heading">Your Favorite Restaurants</h2>
        </div>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();

    if (restaurants.length === 0) {
      console.log("empty");
      const content = document.querySelector(".content");
      console.log(content);
      const title = document.createElement("h2");
      title.classList.add("error-text");
      title.textContent = "You havent add your favorite restaurant";
      content.appendChild(title);
    } else {
      const restaurantsContainer = document.querySelector("#restaurants");

      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement("restaurant-item");
        restaurantItem.restaurantData = restaurant;
        restaurantsContainer.appendChild(restaurantItem);
      });
    }
  },
};

export default Favorites;
