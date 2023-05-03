import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleId = '/motorcycles/:id';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next)
  .create());
routes.get('/cars', (req, res, next) => new CarController(req, res, next)
  .findAll());
routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next)
  .findById());
routes.put('/cars/:id', (req, res, next) => new CarController(req, res, next)
  .findByIdAndUpdate());
routes.delete('/cars/:id', (req, res, next) => new CarController(req, res, next)
  .deleteById());

routes.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next)
  .create());
routes.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next)
  .findAll());
routes.get(motorcycleId, (req, res, next) => new MotorcycleController(req, res, next)
  .findById());
routes.put(motorcycleId, (req, res, next) => new MotorcycleController(req, res, next)
  .findByIdAndUpdate());
routes.delete(motorcycleId, (req, res, next) => new MotorcycleController(req, res, next)
  .deleteById());

export default routes;
