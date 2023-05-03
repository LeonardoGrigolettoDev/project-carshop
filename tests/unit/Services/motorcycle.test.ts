import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const MODEL = 'Honda Cb 600f Hornet';

describe('Realiza testes nos componentes services de Motorcycle.', function () {
  it('Deverá realizar um insert no DB corretamente.', async function () {
    const motorcycleInput: IMotorcycle = {
      model: MODEL,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.0,
      category: 'Street',
      engineCapacity: 600,
    };
    const motorcycleOutput: IMotorcycle = {
      id: '6452919cabbf977fafd0c9af',
      model: MODEL,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.create(motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });
  
  it('Deverá retornar os documentos corretos no método findAll.', async function () {
    const motorcycleOutput = [
      {
        id: '6452919cabbf977fafd0c9af',
        model: MODEL,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30,
        category: 'Street',
        engineCapacity: 600,
      },
    ];
    sinon.stub(Model, 'find').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Deverá retornar os documentos corretos no método findById.', async function () {
    const motorcycleOutput: IMotorcycle = {
      id: '6452919cabbf977fafd0c9af',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'findById').resolves(motorcycleOutput);
    const service = new MotorcycleService();
    const result = await service.findById('6452919cabbf977fafd0c9af');

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});

/* modelo:   it('', async function () {

  }); */
