class Category<Product> {
  //basic idea:
  //the Category is the archetype of products, and the products are the instances of the archetype.
  //basically, to search for the cheapest can of tuna, you'd search the "tuna"-category.
  //each product-object within the category would be along the lines of "first price 400g tunfiskboks" or "rema 1000 tunfisk i vann".
  //this is essential for the price-sorting, as the different skews need to be comparable. the Category class is what achieves this.
  public readonly name: String;
  private products: Product[];

  constructor(name: String, products?: Product[]) {
    this.name = name;
    this.products = products || [];
  }
}
