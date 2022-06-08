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
      if (this.regularItem(item)) {
        this.decreaseQuality(item)
      }
        
      else {
        this.increaseQuality(item)
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn < 11) {
            this.increaseQuality(item)
          }
          
          if (item.sellIn < 6) {
            this.increaseQuality(item)
          }
          
        }
        
      }
      if (this.nonLegendaryItem(item)) {
        item.sellIn = item.sellIn - 1;
      }

      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (this.nonLegendaryItem(item)) {
                this.decreaseQuality(item)
              }
            }
          } else {
            item.quality = 0
          }
        } else {
          this.increaseQuality(item)
        }
      }
    }

    return this.items;
  }

  nonLegendaryItem(item){
    item.name != 'Sulfuras, Hand of Ragnaros'
  }

  regularItem(item){
    let nonRegularNames = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros']
    
    if(item.quality > 0 && !nonRegularNames.includes(item.name)){
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
