import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public getId() { return this.id; }
  public getModel() { return this.model; }
  public getYear() { return this.year; }
  public getColor() { return this.color; }
  public getStatus() { return this.status; }
  public getBuyValue() { return this.buyValue; }
  public getDoorsQty() { return this.doorsQty; }
  public getSeatsQty() { return this.seatsQty; }
  public setId(id: string) { this.id = id; }
  public setModel(model: string) { this.model = model; }
  public setYear(year: number) { this.year = year; }
  public setColor(color: string) { this.color = color; }
  public setStatus(status: boolean) { this.status = status; }
  public setBuyValue(buyValue: number) { this.buyValue = buyValue; }
  public setDoorsQty(doorsQty: number) { this.doorsQty = doorsQty; }
  public setSeatsQty(seatsQty: number) { this.seatsQty = seatsQty; }
}
