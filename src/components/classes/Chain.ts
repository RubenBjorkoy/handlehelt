class Chain {
  public readonly name: String; //silly little TS, this is called a "constant". (can be public because it's readonly)
  private website: String | undefined; //optional, could become useful later, could get logo from it for example

  private stores: Store[];

  constructor(name: String, stores?: Store[], website?: String) {
    //at least you don't have to overload constructors?
    this.name = name;
    this.stores = stores || []; //maybe elvis this bitch if it doesn't like python syntax
    this.website = website;
  }

  public getName(): String {
    //just for ease of use of getter/setters, just as well directly access public
    return this.name;
  }

  public addStore(s: Store): void {
    this.stores.push(s);
  }
  public getStores(): Store[] {
    return this.stores;
  }
  public removeStore(s: Store): void {
    //assuming we only allow 1 instance of every store in our array
    let i: number = this.stores.indexOf(s);
    if (i > -1) {
      this.stores.splice(i, 1);
    } else {
      throw new MissingStoreException(); //object orienting, the right way
    }
  }
}
