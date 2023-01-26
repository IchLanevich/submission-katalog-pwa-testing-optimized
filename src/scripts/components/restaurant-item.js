import CONFIG from "../globals/config";

class RestaurantItem extends HTMLElement {
  /**
   * @param {any} data
   */
  set restaurantData(data) {
    this._restaurantData = data;
    this._render();
  }

  _render() {
    const { name, pictureId, rating, description, id } = this._restaurantData;

    this.innerHTML = `
        <div class="restaurant-item">
            <div class="restaurant-item__header">
                <img class="restaurant-item__header__poster" alt="${name} picture"
                src="${CONFIG.BASE_IMAGE_URL}/${pictureId}"> 
            <div class="restaurant-item__header__rating">
                <p>⭐️<span class="restaurant-item__header__rating__score">${rating}</span></p>
            </div >
            <div class="restaurant-item__content">
                <a href="/#/detail/${id}">${name}</a>
                <p>${description}</p>
            </div>
        </div >
      `;
  }
}

customElements.define("restaurant-item", RestaurantItem);
