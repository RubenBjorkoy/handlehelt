class Store {
  public readonly chain: Chain;
  private location: Geolocation | undefined;
  private hours: OpeningHours[];

  /**
   * constructor
   * @param {Chain}chain the chain which the store belongs to
   */
  constructor(chain: Chain, hours: OpeningHours[], location?: Geolocation) {
    this.chain = chain;
    this.location = location;
    this.hours = hours;
  }

  /**
   * isOpenNow
   * @returns {boolean} true if the store is open when function is called, false otherwise
   */
  public isOpenNow(): boolean {
    const now = new Date();
    const day = now.getDay();
    const hours = this.hours[day];
    if (hours === undefined) {
      return false; //store is closed today
    }
    return hours.isWithinHours(now.getHours(), now.getMinutes());
  }
}
