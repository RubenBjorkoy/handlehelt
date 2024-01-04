class Chain {
  public readonly name: String; //silly little TS, this is called a "constant". (can be public because it's readonly)
  private website: URL | undefined; //optional, could become useful later, could get logo from it for example

  private stores: Store[];

  /**
   * constructor
   * @param {String} name the name of the chain
   * @param {Store[]} [stores=[]]  optional; array of stores in the chain
   * @param {URL}[website] optional; the website of the chain
   */
  constructor(name: String, stores?: Store[], website?: URL) {
    //at least you don't have to overload constructors?
    this.name = name;
    this.stores = stores || []; //maybe elvis this bitch if it doesn't like python syntax
    this.website = website;
  }
  /**
   * gets the name of the chain. can also be accessed directly with .name
   * @returns {String} the name of the chain.
   *
   */
  public getName(): String {
    //just for ease of use of getter/setters, just as well directly access public
    return this.name;
  }
  /**
   * add a new store to the chain.
   * @param {Store} s the store-object to add to the chain
   */
  public addStore(s: Store): void {
    this.stores.push(s);
  }
  /**
   * get all stores belonging to a chain
   * @returns {Store[]} an array of store-objects
   */
  public getStores(): Store[] {
    return this.stores;
  }
  /**
   * removes a store-object from the collection belonging to the chain, or throws a new MissingStoreException if not found.
   * @param {Store}s the store-object to remove
   */
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
