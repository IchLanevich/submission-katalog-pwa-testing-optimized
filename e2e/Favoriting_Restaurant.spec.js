const assert = require("assert");

Feature("Liking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorites");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.seeElement("#restaurants");
  I.see("You havent add your favorite restaurant", ".error-text");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see("You havent add your favorite restaurant", ".error-text");

  I.amOnPage("/");

  I.waitForElement(".restaurant-item__content a", 5);

  I.seeElement(".restaurant-item__content a");
  const firstRestaurant = locate(".restaurant-item__content a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement("#favoriteButton", 5);

  I.seeElement("#favoriteButton");
  I.click("#favoriteButton");

  I.amOnPage("/#/favorites");
  I.seeElement("restaurant-item");

  const favoritedRestaurantTitle = await I.grabTextFrom(
    ".restaurant-item__content a"
  );
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

Scenario("disliking one restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.waitForElement(".restaurant-item__content a", 5);

  I.click(locate(".restaurant-item__content a").first());

  I.waitForElement("#favoriteButton", 5);
  I.click("#favoriteButton");

  I.amOnPage("/#/favorites");
  I.waitForElement(".restaurant-item__content a", 5);

  I.click(locate(".restaurant-item__content a").first());

  I.waitForElement("#favoriteButton", 5);

  I.seeElement("#favoriteButton");
  I.click("#favoriteButton");

  I.amOnPage("/#/favorites");
  I.see("You havent add your favorite restaurant", ".error-text");
});
