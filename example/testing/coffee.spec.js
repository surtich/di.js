// TODO(vojta): add an API for exporting these APIs to global namespace.
var di = require('di');
var use = require('di/dist/cjs/testing').use;
var inject = require('di/dist/cjs/testing').inject;

import {CoffeeMaker} from '../coffee/coffee_maker';
import {Heater} from '../coffee/heater';
import {Pump} from '../coffee/pump';
import {MockHeater, DummyHeater} from './mocks';


describe('simple mocking in beforeEach', function() {
  beforeEach(use(DummyHeater).as(Heater));
  
  it('should brew', inject(CoffeeMaker, function(cm) {

    cm.brew();
  }));

});

describe('more mocking in beforeEach', function() {

  beforeEach(function() {
    // Use MockHeater, instead of Heater.
    use(MockHeater).as(Heater);

    // Inlined mock - if it's not a function/class, the actual value is used.
    use({
      pump: jasmine.createSpy('pump')
    }).as(Pump);
  });

  it('should brew', inject(CoffeeMaker, Heater, Pump, function(cm, heater, pump) {
    cm.brew();

    expect(heater.on).toHaveBeenCalled();
    expect(pump.pump).toHaveBeenCalled();
  }));
});

describe('mocking inside it', function() {
  it('should brew', function() {
    // Both use().as() and inject() can be also used inside it().
    use(MockHeater).as(Heater);
    inject(CoffeeMaker, function(cm, heater) {
      cm.brew();
    });

    // There can be multiple use() or inject() calls.
    // However, you can't use use() after you already called inject().
    inject(Heater, function(heater) {
      expect(heater.on).toHaveBeenCalled();
    });
  });
});
