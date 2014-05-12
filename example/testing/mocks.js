import {Provide} from '../../src/annotations';
import {Heater} from '../coffee/heater';

class MockHeater {
  constructor() {
    this.on = jasmine.createSpy('on');
    this.off = jasmine.createSpy('off');
  }
}

@Provide(Heater)
class DummyHeater {
  constructor() {}
  on() {
    console.log("Hola2")
  }
  off() {}
}

export {MockHeater, DummyHeater}
