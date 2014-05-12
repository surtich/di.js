var di = require('di');
import {Car} from '../car';
import {Engine} from '../engine';
import {MockEngine} from './mock_engine';
var testing = require('di/dist/cjs/testing');

describe('Car', function() {
  beforeEach(function() {
    var injector = new di.Injector([MockEngine]);
    this.car = injector.get(Car);
  });

  it('is running', function() {
    expect(this.car.isRunning()).toBe(true);
  });
});

describe('Car2', function() {
  beforeEach(testing.use(MockEngine));

  it('is running', testing.inject(Car, function(car) {
    expect(car.isRunning()).toBe(true);
  }));
  
});
