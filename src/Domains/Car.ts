import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;
  // private type: 'Car';

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
    // this.type = 'Car';
  }

  public getDoorsQty() {
    return this.doorsQty;
  }
  public getSeatsQty() {
    return this.seatsQty;
  }
  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }
  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }
}
