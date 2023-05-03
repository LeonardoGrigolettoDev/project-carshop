import { Model, Schema, model, models } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected _model: Model<T>;
  private _schema: Schema;
  protected _modelName: string;

  constructor(schema: Schema, modelName: string) {
    this._schema = schema;
    this._modelName = modelName;
    this._model = models[this._modelName] || model(this._modelName, this._schema);
  }
  public create(vehicle: T): Promise<T> {
    return this._model.create({ ...vehicle });
  }

  public async findAll(): Promise<T[]> {
    return this._model.find();
  }

  public async findById(_id: string): Promise<T | null> {
    return this._model.findById(_id);
  }

  public async findByIdAndUpdate(
    _id: string,
    req: Partial<T>,
  ): Promise<T | null> {
    return this._model.findByIdAndUpdate(_id, req);
  }

  public async deleteById(id: string): Promise<T | null> {
    return this._model.findByIdAndDelete(id);
  }
}
