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
    if (this.betterWithAge(item)) {
      this.betterWithAgeIncrease(item)
    }
    else if (this.conjured(item) && item.quality > 0) {
      this.decreaseQuality(item)
      this.decreaseQuality(item)
    }
    else if (this.regular(item) && item.quality > 0) {
      this.decreaseQuality(item)
    }
  }

  betterWithAge(item){
    let betterWithAgeItems = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert']
    if(betterWithAgeItems.includes(item.name)){
      return true
    }
  }

  betterWithAgeIncrease(item){ 
    this.increaseQuality(item)
    this.increaseConcertQuality(item)
  }

  increaseQuality(item){
    if (item.quality < 50) {
      item.quality += 1;
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
  
  decreaseQuality(item){
    item.quality = item.quality - 1;
  }

  decreaseSellIn(item){
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }
  }

  regular(item){
    let irregularItems = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros']
    
    if(irregularItems.includes(item.name)){
      return false
    }
    else {
      return true
    }
  }

  conjured(item){
    if(item.name.includes('Conjured')){
      return true
    }
    else {
      return false
    }
  }

  pastSellInDate(item){
    if (item.sellIn < 0) {
      if (item.name != 'Aged Brie') {
        if (this.regular(item)) {
          this.decreaseQuality(item)
        } else {
          item.quality = 0
        }
      } else {
        this.increaseQuality(item)
      }
    }
  }

}

module.exports = {
  Item,
  Shop
}
