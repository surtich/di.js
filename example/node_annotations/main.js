import {Inject, Injector} from 'di';
import {Car} from './car';

var injector = new Injector([]);

console.log('Getting in the car...');
var car = injector.get(Car);

car.run();

if (car.isRunning()) {
  console.log('The car is running');
} else {
  console.log('The car is stopped');
}
