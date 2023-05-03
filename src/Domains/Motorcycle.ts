import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;
  // static type: 'Motorcycle';

  constructor(motorcycle: IMotorcycle) {
    super(motorcycle);
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }

  public getCategory() {
    return this.category;
  }
  public getEngineCapacity() {
    return this.engineCapacity;
  }
  public setCategory(category: 'Street' | 'Custom' | 'Trail') {
    this.category = category;
  }
  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
}
