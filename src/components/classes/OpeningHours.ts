class OpeningHours {
  //okay, this may be overkill
  private readonly startHour: number;
  private readonly startMinute: number;
  private readonly endHour: number;
  private readonly endMinute: number;

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

  public toString(): String {
    return `${this.startHour}:${this.startMinute} - ${this.endHour}:${this.endMinute}`;
  }
}
