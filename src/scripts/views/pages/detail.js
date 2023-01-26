import RestaurantApiSource from "../../data/restaurant-api-source";
import UrlParser from "../../routes/url-parser";
import "../../components/customer-review";
import { createRestaurantDetailTemplate } from "../templates/template-creator";
import FavoriteButtonPresenter from "../../utils/favorite-button-presenter";
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

const Detail = {
  async render() {
    return `  
        <div id="restaurant" class="restaurant"></div>
        <div id="customer-review"></div>
        <div id="favoriteButtonContainer"></div>

      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
    const restaurantData = restaurant.restaurant;
    const restaurantContainer = document.querySelector("#restaurant");

    const customerReviewContainer = document.querySelector("#customer-review");
    const customerReview = document.createElement("customer-review");
    customerReview.restaurantData = restaurant;
    customerReviewContainer.appendChild(customerReview);

    FavoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector(
        "#favoriteButtonContainer"
      ),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: restaurantData,
    });

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(
      restaurant.restaurant
    );
  },
};

export default Detail;
