class OpeningHours {
  //okay, this may be overkill
  private readonly startHour: number;
  private readonly startMinute: number;
  private readonly endHour: number;
  private readonly endMinute: number;

  /**
   * constructor
   * @param {number} startHour the hour the store opens
   * @param {number} startMinute the minute the store opens
   * @param {number} endHour the hour the store closes
   * @param {number} endMinute the minute the store closes
   */
  constructor(
    startHour: number,
    startMinute: number,
    endHour: number,
    endMinute: number
  ) {
    this.startHour = startHour;
    this.startMinute = startMinute;
    this.endHour = endHour;
    this.endMinute = endMinute;
  }
  /**
   * isWithinHours
   * @param hour - the hour to check
   * @param minute - the minute to check
   * @returns true if the time is within the opening hours, false otherwise
   */
  public isWithinHours(hour: number, minute: number): boolean {
    if (hour < this.startHour || hour > this.endHour) {
      return false;
    } else if (hour === this.startHour && minute < this.startMinute) {
      return false;
    } else if (hour === this.endHour && minute > this.endMinute) {
      return false;
    }
    return true;
  }

  /**
   * toString
   * @returns {String} a string representation of the opening hours
   */
  public toString(): String {
    return `${this.startHour}:${this.startMinute} - ${this.endHour}:${this.endMinute}`;
  }
}
