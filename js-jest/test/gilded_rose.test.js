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

describe("Aged Brie", function() {
  it("increases in Quality the older it gets", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });
});

describe("The Quality of an item", function() {
  it("is never more than 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 50, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe("Sulfuras", function() {
  it("Should not change quality", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 50, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
});

describe("Sulfuras", function() {
  it("never has to be sold", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 50, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(50);
  });
});

describe("Backstage passes", function() {
  it("increases in Quality by 1 the older it gets", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });
});

describe("Backstage passes", function() {
  it("increases in Quality by 2 when 10 days or less left", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 9, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(7);
  });
});

describe("Backstage passes", function() {
  it("increases in Quality by 3 when 5 days or less left", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 4, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });
});

describe("Backstage passes", function() {
  it("decreases in Quality to 0 when 0 days left", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe("Conjured item", function() {
  it("decreases in Quality twice as fast", function() {
    const gildedRose = new Shop([new Item("Conjured Sword", 4, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });
});