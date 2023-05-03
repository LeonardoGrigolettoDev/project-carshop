import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  // public async create(car: ICar): Promise<ICar> {
  //   return this.model.create({ ...car });
  // }

  // public async findAll(): Promise<ICar[]> {
  //   return this.model.find();
  // }

  // public async findById(_id: string): Promise<ICar | null> {
  //   return this.model.findById(_id);
  // }

  // public async findByIdAndUpdate(_id: string, req: ICar): Promise<ICar | null> {
  //   return this.model.findByIdAndUpdate(_id, req);
  // }
}
