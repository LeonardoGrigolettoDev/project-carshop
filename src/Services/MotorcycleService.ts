import { Types } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  public isValidMongoId(_id: string): boolean { // validação do id para pesquisa
    return Types.ObjectId.isValid(_id);
  }

  private createDomain(motorcycle: IMotorcycle | null) {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newCar = await motorcycleODM.create(motorcycle);
    return this.createDomain(newCar);
  }

  public findAll() {
    const motorcycleODM = new MotorcycleODM();
    return motorcycleODM.findAll();
  }

  public findById(_id: string) {
    const motorcycleODM = new MotorcycleODM();
    return motorcycleODM.findById(_id);
  }

  public findByIdAndUpdate(_id: string, body: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    return motorcycleODM.findByIdAndUpdate(_id, body);
  }
}
