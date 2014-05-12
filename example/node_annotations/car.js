import {Inject} from 'di';
import {Engine} from './engine';

@Inject(Engine)
export class Car {

  constructor(engine) {
    this.engine = engine;
  }

  run() {
    this.engine.start();
  }

  isRunning() {
    return this.engine.state === 'running';
  }
	
}
