import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }

  // public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
  //   return this.model.create({ ...motorcycle });
  // }

  // public async findAll(): Promise<IMotorcycle[]> {
  //   return this.model.find();
  // }

  // public async findById(_id: string): Promise<IMotorcycle | null> {
  //   return this.model.findById(_id);
  // }

  // public async findByIdAndUpdate(
  //   _id: string,
  //   req: IMotorcycle,
  // ): Promise<IMotorcycle | null> {
  //   return this.model.findByIdAndUpdate(_id, req);
  // }
}
