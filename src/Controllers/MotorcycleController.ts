import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

const HTTP_201 = 201;
const HTTP_200 = 200;
const HTTP_404 = 404;
const HTTP_422 = 422;

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(HTTP_201).json(newMotorcycle);
    } catch (err) {
      this.next(err);
    }
  }

  public async findAll() {
    const foundMotorcycles = await this.service.findAll();
    const motorcyclesFormatted = foundMotorcycles.map((e) => ({
      id: e.id,
      model: e.model,
      year: e.year,
      color: e.color,
      status: e.status,
      buyValue: e.buyValue,
      category: e.category,
      engineCapacity: e.engineCapacity,
    }));
    return this.res.status(HTTP_200).json(motorcyclesFormatted);
  }

  public async findById() {
    const isValidId = this.service.isValidMongoId(this.req.params.id);
    if (!isValidId) {
      return this.res.status(HTTP_422).json({ message: 'Invalid mongo id' });
    }
    const foundMotorcycle = await this.service.findById(this.req.params.id);
    if (!foundMotorcycle) {
      return this.res.status(HTTP_404).json({ message: 'Motorcycle not found' });
    }
    const motorcycleFormatted = {
      id: foundMotorcycle.id,
      model: foundMotorcycle.model,
      year: foundMotorcycle.year,
      color: foundMotorcycle.color,
      status: foundMotorcycle.status,
      buyValue: foundMotorcycle.buyValue,
      category: foundMotorcycle.category,
      engineCapacity: foundMotorcycle.engineCapacity,
    };
    return this.res.status(HTTP_200).json(motorcycleFormatted);
  }

  public async findByIdAndUpdate() {
    const isValidId = this.service.isValidMongoId(this.req.params.id);
    if (!isValidId) {
      return this.res.status(HTTP_422).json({ message: 'Invalid mongo id' });
    }
    const motorcycleUpdated = await this.service.findByIdAndUpdate(
      this.req.params.id,
      this.req.body,
    );
    if (!motorcycleUpdated) {
      return this.res.status(HTTP_404).json({ message: 'Motorcycle not found' });
    }
    const motorcycleModified = await this.service.findById(this.req.params.id);
    if (!motorcycleModified) {
      return this.res.status(HTTP_404).json({ message: 'Something went wrong.' });
    }
    const motorcycleFormatted = {
      id: motorcycleModified.id,
      model: motorcycleModified.model,
      year: motorcycleModified.year,
      color: motorcycleModified.color,
      status: motorcycleModified.status,
      buyValue: motorcycleModified.buyValue,
      category: motorcycleModified.category,
      engineCapacity: motorcycleModified.engineCapacity,
    };
    return this.res.status(HTTP_200).json(motorcycleFormatted);
  }
}
