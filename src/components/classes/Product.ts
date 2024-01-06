class Product {
  //note: the product is spesific, not generic. synonymous with skew, not product-type.
  public readonly id: number;
  public readonly name: string;
  public readonly category: Category<Product>;
  private price: number;
  private description: string | undefined;
  constructor(
    id: number,
    name: string,
    category: Category<Product>,
    price: number,
    description?: string
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.description = description;
  }
  public getPrice(): number {
    return this.price;
  }
  public setPrice(p: number): void {
    this.price = p;
  }
  public getDescription(): string | undefined {
    return this.description;
  }
  public toString(): string {
    return `${this.id} ${this.name} ${this.price} ${this.description}`;
  }
}
