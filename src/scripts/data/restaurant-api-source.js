import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApiSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      return response.json();
    } catch (error) {
      Toastify({
        text: '❌ Unable to fetch data',
        duration: 60000,
        gravity: 'top', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          color: '#13191b',
          fontWeight: '600',
          background: '#dedede',
        },
        onClick() {}, // Callback after click
      }).showToast();
    }
  }
}

export default RestaurantApiSource;
