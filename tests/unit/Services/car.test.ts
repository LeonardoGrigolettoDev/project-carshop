import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
// import Car from '../../../src/Domains/Car';

describe('Realiza testes nos componentes services de Car.', function () {
  it('Deverá realizar um insert no DB corretamente.', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.0,
      doorsQty: 2,
      seatsQty: 5,
    };
    const carOutput: ICar = {
      id: '645279859f294f081e078ec6',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12,
      doorsQty: 2,
      seatsQty: 5,
    };
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deverá retornar os documentos corretos no método findAll.', async function () {
    const carOutput: ICar[] = [
      {
        id: '64527bf067bbd138daf07904',
        model: 'Marea',
        year: 1992,
        color: 'Red',
        status: true,
        buyValue: 12,
        doorsQty: 2,
        seatsQty: 5,
      },
      {
        id: '64527bf267bbd138daf07906',
        model: 'Mareaa',
        year: 1992,
        color: 'Red',
        status: true,
        buyValue: 12,
        doorsQty: 2,
        seatsQty: 5,
      },
      {
        id: '64527bf567bbd138daf07908',
        model: 'Mareaaa',
        year: 1992,
        color: 'Red',
        status: true,
        buyValue: 12,
        doorsQty: 2,
        seatsQty: 5,
      },
      {
        id: '64527bf667bbd138daf0790a',
        model: 'Mareaaaa',
        year: 1992,
        color: 'Red',
        status: true,
        buyValue: 12,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];
    sinon.stub(Model, 'find').resolves(carOutput);
    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(carOutput);
  });
  it('Deverá retornar os documentos corretos no método findById.', async function () {
    const carOutput: ICar = {
      id: '64527bf067bbd138daf07904',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12,
      doorsQty: 2,
      seatsQty: 5,
    };
    sinon.stub(Model, 'findById').resolves(carOutput);
    const service = new CarService();
    const result = await service.findById('64527bf067bbd138daf07904');

    expect(result).to.be.deep.equal(carOutput);
  });
  it('Deverá retornar o objeto que foi atualizado no método findByIdAndUpdate', async function () {
    const carOutput: ICar = {
      id: '64527bf067bbd138daf07904',
      model: 'Hilux',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12,
      doorsQty: 1,
      seatsQty: 2,
    };
    const carBody: ICar = {
      model: 'Hilux',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12,
      doorsQty: 1,
      seatsQty: 2,
    };
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);
    const service = new CarService();
    const result = await service.findByIdAndUpdate('64527bf067bbd138daf07904', carBody);

    expect(result).to.be.deep.equal(carOutput);
  });
});

/* modelo:   it('', async function () {

  }); */
