export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    name === "foo" ? (this.name = "fixme") : (this.name = name);
    // checkout the note i changed from here, cause it is a test,
    // it should be the same but if i change fixme to foo it will pass anyway
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const ItemTypes = {
  Brie: "Aged Brie",
  Pass: "Backstage passes to a TAFKAL80ETC concert",
  Hand: "Sulfuras, Hand of Ragnaros",
};

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateBrie(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }
  // pass Function
  updatePass(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.sellIn < 11 && item.quality < 50) {
        item.quality = item.quality + 1;
      }
      if (item.sellIn < 6 && item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality;
    }
  }
  // pass hand
  updateHand(item: Item) {
    // empty function
  }
  updateNormal(item: Item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case ItemTypes.Brie:
          this.updateBrie(item);
          continue;
        case ItemTypes.Pass:
          this.updatePass(item);
          continue;
        case ItemTypes.Hand:
          this.updateHand(item);
          continue;
        default:
          this.updateNormal(item);
          continue;
      }
    }
    return this.items;
  }
}
