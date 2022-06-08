const {Shop, Item} = require("../src/gilded_rose");

describe("A regular item with quality 10", function() {
  it("should decrease in quality to 9 after a day", function() {
    const gildedRose = new Shop([new Item("sword", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });
});
