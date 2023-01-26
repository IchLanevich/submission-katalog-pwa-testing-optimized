const assert = require("assert");

Feature("Liking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorites");
});

// Scenario("showing empty liked restaurants", ({ I }) => {
//   I.seeElement("#restaurants");
//   I.see("You havent add your favorite restaurant", ".error-text");
// });

Scenario("liking one restaurant", async ({ I }) => {
  I.see("You havent add your favorite restaurant", ".error-text");

  I.amOnPage("/");

  I.seeElement(".restaurant-item__content a");
  const firstRestaurant = locate(".restaurant-item__content a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#favoriteButton");
  I.click("#favoriteButton");

  I.amOnPage("/#/favorites");
  I.seeElement("restaurant-item");

  const favoritedRestaurantTitle = await I.grabTextFrom(
    ".restaurant-item__content a"
  );
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});
