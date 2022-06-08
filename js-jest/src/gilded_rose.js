class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {

    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i]

      this.initialQualityUpdate(item)

      this.decreaseSellIn(item)

      this.pastSellInDate(item)
    }

    return this.items;
  }

  initialQualityUpdate(item){
    if (this.regularItem(item) && this.hasQuality(item)) {
      this.decreaseQuality(item)
    }
      
    else {
      this.betterWithAge(item)
    }
  }

  pastSellInDate(item){
    if (item.sellIn < 0) {
      if (item.name != 'Aged Brie') {
        if (this.regularItem(item)) {
          this.decreaseQuality(item)
        } else {
          item.quality = 0
        }
      } else {
        this.increaseQuality(item)
      }
    }
  }

  hasQuality(item){
    if (item.quality > 0){
      return true
    }
  }

  betterWithAge(item){ 
    let betterWithAgeItems = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert']
    if (betterWithAgeItems.includes(item.name)){
      this.increaseQuality(item)
      this.increaseConcertQuality(item)
    }
  }

  increaseConcertQuality(item){
    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.sellIn < 11) {
        this.increaseQuality(item)
      }
      
      if (item.sellIn < 6) {
        this.increaseQuality(item)
      }
      
    }
  }

  decreaseSellIn(item){
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }
  }

  regularItem(item){
    let irregularItems = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros']
    
    if(irregularItems.includes(item.name)){
      return false
    }
    else {
      return true
    }
  }

  decreaseQuality(item){
    item.quality = item.quality - 1;
  }

  increaseQuality(item){
    if (item.quality < 50) {
      item.quality += 1;
    }
  }
}

module.exports = {
  Item,
  Shop
}
