import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

const INVALID_MONGO_ID = 'Invalid mongo id';
const CAR_NOT_FOUND = 'Car not found';
const HTTP_201 = 201;
const HTTP_200 = 200;
const HTTP_404 = 404;
const HTTP_422 = 422;

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(HTTP_201).json(newCar);
    } catch (err) {
      this.next(err);
    }
  }

  public async findAll() {
    const foundCars = await this.service.findAll();
    const carsFormatted = foundCars.map((e) => ({
      id: e.id,
      model: e.model,
      year: e.year,
      color: e.color,
      status: e.status,
      buyValue: e.buyValue,
      doorsQty: e.doorsQty,
      seatsQty: e.seatsQty,
    }));
    return this.res.status(HTTP_200).json(carsFormatted);
  }

  public async findById() {
    const isValidId = this.service.isValidMongoId(this.req.params.id);
    if (!isValidId) {
      return this.res.status(HTTP_422).json({ message: INVALID_MONGO_ID });
    }
    const foundCar = await this.service.findById(this.req.params.id);
    if (!foundCar) {
      return this.res.status(HTTP_404).json({ message: CAR_NOT_FOUND });
    }
    const carFormatted = {
      id: foundCar.id,
      model: foundCar.model,
      year: foundCar.year,
      color: foundCar.color,
      status: foundCar.status,
      buyValue: foundCar.buyValue,
      doorsQty: foundCar.doorsQty,
      seatsQty: foundCar.seatsQty,
    };
    return this.res.status(HTTP_200).json(carFormatted);
  }

  public async findByIdAndUpdate() {
    const isValidId = this.service.isValidMongoId(this.req.params.id);
    if (!isValidId) {
      return this.res.status(HTTP_422).json({ message: INVALID_MONGO_ID });
    }
    const carUpdated = await this.service.findByIdAndUpdate(
      this.req.params.id,
      this.req.body,
    );
    if (!carUpdated) {
      return this.res.status(HTTP_404).json({ message: CAR_NOT_FOUND });
    }
    const carModified = await this.service.findById(this.req.params.id);
    if (!carModified) {
      return this.res.status(HTTP_404).json({ message: 'Something went wrong.' });
    }
    const carFormatted = {
      id: carModified.id,
      model: carModified.model,
      year: carModified.year,
      color: carModified.color,
      status: carModified.status,
      buyValue: carModified.buyValue,
      doorsQty: carModified.doorsQty,
      seatsQty: carModified.seatsQty,
    };
    return this.res.status(HTTP_200).json(carFormatted);
  }

  public async deleteById() {
    const isValidId = this.service.isValidMongoId(this.req.params.id);
    if (!isValidId) {
      return this.res.status(HTTP_422).json({ message: INVALID_MONGO_ID });
    }
    const deleted = await this.service.deleteById(this.req.params.id);
    if (!deleted) {
      return this.res.status(HTTP_404).json({ message: CAR_NOT_FOUND });
    }
    const carFormatted = {
      id: deleted.id,
      model: deleted.model,
      year: deleted.year,
      color: deleted.color,
      status: deleted.status,
      buyValue: deleted.buyValue,
      doorsQty: deleted.doorsQty,
      seatsQty: deleted.seatsQty,
    };
    return this.res.status(HTTP_200).json(carFormatted);
  }
}
