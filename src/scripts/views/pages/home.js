import RestaurantApiSource from '../../data/restaurant-api-source';
import '../../components/restaurant-item';

const Home = {
  async render() {
    return `
        <div class="content">
            <div id="hero">
                <h1 class="hero-headline">Explore your nearby restaurants</h1>
            </div>
            <div class="section-title">
            <h2>Restaurants</h2>
            </div>
            <div id="restaurants" class="restaurants">
            </div>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.restaurantList();
    if (restaurants) {
      const restaurantsContainer = document.querySelector('#restaurants');

      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('restaurant-item');
        restaurantItem.restaurantData = restaurant;
        restaurantsContainer.appendChild(restaurantItem);
      });
    } else {
      const content = document.querySelector('.content');
      const title = document.createElement('h2');
      title.classList.add('error-text');
      title.textContent = 'Unable to fetch';
      content.appendChild(title);
    }
  },
};

export default Home;
