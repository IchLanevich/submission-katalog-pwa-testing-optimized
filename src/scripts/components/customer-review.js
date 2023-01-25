import API_ENDPOINT from "../globals/api-endpoint";
import postReview from "../utils/fetch-helper";
import Toastify from "toastify-js";

class CustomerReview extends HTMLElement {
  /**
   * @param {any} data
   */
  set restaurantData(data) {
    this._restaurantData = data;
    this._render();
  }

  _render() {
    const { restaurant } = this._restaurantData;

    this.innerHTML = `
        <div class="customer-reviews">
        <div class="section-title">
          <h2 tabindex="0">Customer reviews</h2>
        </div>
        <div class="customer-reviews__list">
          ${restaurant.customerReviews
            .map(
              (review) => `<div tabindex="0" class="customer-review-card">
              <p class="customer-review__name">${review.name}</p>
              <p class="customer-review__description">${review.review}</p>
              <p class="customer-review__date">${review.date}</p>
            </div>`
            )
            .join("")}
        </div>
    </div>
    <div class="form-wrapper">
      <form id="review-form">
        <div class="input-ctrl">
          <label for="userName">Name</label>
          <input type="text" id="userName" placeholder="Write your name..."/>
        </div>
        <div class="input-ctrl">
          <label for="review">Review</label>
          <textarea id="review" placeholder="Write your review..."></textarea>
        </div>
        <button class="submit-btn">Submit</button>
      </form>
    </div>
        `;
  }

  connectedCallback() {
    const reviewForm = document.querySelector("#review-form");
    const username = document.querySelector("#userName");
    const review = document.querySelector("#review");

    reviewForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      Toastify({
        text: "✔️ Review submitted",
        duration: 2000,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          color: "#13191b",
          fontWeight: "600",
          background: "#dedede",
        },
        onClick: function () {}, // Callback after click
      }).showToast();

      const data = {
        id: this._restaurantData.restaurant.id,
        name: username.value,
        review: review.value,
        date: new Date().toISOString(),
      };

      const response = await postReview(`${API_ENDPOINT.ADD_REVIEW}`, data);

      return response;
    });
  }
}

customElements.define("customer-review", CustomerReview);
