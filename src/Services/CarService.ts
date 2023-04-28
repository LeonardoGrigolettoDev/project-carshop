import { Types } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  public isValidMongoId(_id: string): boolean { // validação do id para pesquisa
    return Types.ObjectId.isValid(_id);
  }

  private createCarDomain(car: ICar | null) {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public findAll() {
    const carODM = new CarODM();
    return carODM.findAll();
  }

  public findById(_id: string) {
    const carODM = new CarODM();
    return carODM.findById(_id);
  }

  public findByIdAndUpdate(_id: string, body: ICar) {
    const carODM = new CarODM();
    return carODM.findByIdAndUpdate(_id, body);
  }
}
