const {Shop, Item} = require("../src/gilded_rose");

describe("A regular item with quality 10", function() {
  it("should decrease in quality to 9 after a day", function() {
    const gildedRose = new Shop([new Item("sword", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });
});

describe("Once the sell by date has passed", function() {
  it("Quality degrades twice as fast", function() {
    const gildedRose = new Shop([new Item("sword", -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(48);
  });
});

describe("The Quality of an item", function() {
  it("is never negative", function() {
    const gildedRose = new Shop([new Item("sword", 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe("An aged brie with quality 50", function() {
  it("Should not become 51, but stay at quality 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 50, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe("An legendary item with quality 80", function() {
  it("Should not change quality", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 50, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
});

